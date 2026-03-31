using Portfolio.Api.Services;
using Portfolio.Api.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services
    .AddOptions<PortfolioSiteOptions>()
    .BindConfiguration(PortfolioSiteOptions.SectionName)
    .PostConfigure(options =>
    {
        options.SiteUrl = string.IsNullOrWhiteSpace(options.SiteUrl)
            ? "http://localhost:3000"
            : options.SiteUrl.TrimEnd('/');
    })
    .Validate(options => Uri.TryCreate(options.SiteUrl, UriKind.Absolute, out _), "Portfolio site URL must be an absolute URL.")
    .ValidateOnStart();
builder.Services.AddSingleton<IPortfolioDataService, InMemoryPortfolioDataService>();

var allowedOriginsFromConfiguration = builder.Configuration
    .GetSection("Cors:AllowedOrigins")
    .Get<string[]>();

var allowedOriginsFromEnvironment = builder.Configuration["Cors:AllowedOriginsCsv"]
    ?? builder.Configuration["CORS_ALLOWED_ORIGINS"];

var allowedOrigins = !string.IsNullOrWhiteSpace(allowedOriginsFromEnvironment)
    ? allowedOriginsFromEnvironment
        .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
    : allowedOriginsFromConfiguration ?? new[] { "http://localhost:3000", "https://localhost:3000" };

builder.Services.AddCors(options =>
{
    options.AddPolicy("ClientApp", policy =>
    {
        policy.WithOrigins(allowedOrigins)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("ClientApp");
app.MapControllers();

app.Run();

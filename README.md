# 🎨 Håvard Hetland Vestbø - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my projects, experience, and skills as a Computer Engineering graduate and Management of Technology student..

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Type Safety**: Built with TypeScript for robust development
- **Performance Optimized**: Next.js 15 with Turbopack for fast development and builds
- **Dark Theme**: Elegant dark theme with custom color palette
- **SEO Ready**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Development**: Turbopack for fast builds
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
portfolio/
├── backend/                         # ASP.NET Core Web API (portfolio data service)
│   ├── Controllers/                 # REST controllers (single PortfolioController)
│   ├── Models/                      # Shared DTO/record definitions
│   ├── Services/                    # In-memory data provider
│   └── Portfolio.Api.csproj         # .NET project file
├── my-portfolio/                    # Next.js 15 frontend application
│   ├── src/
│   │   ├── app/                     # Next.js app router pages
│   │   ├── components/              # Reusable React components
│   │   ├── lib/                     # API helpers for backend communication
│   │   └── types/                   # Shared TypeScript contracts
│   ├── public/                      # Static assets
│   └── .env.example                 # Sample environment variables
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- .NET SDK 8.0+
- npm, yarn, or pnpm

### Clone the repository

```bash
git clone https://github.com/havardhvestbo/portfolio.git
cd portfolio
```

### Backend (ASP.NET Core)

1. Install dependencies & run the API
   ```bash
   cd backend
   dotnet restore
   dotnet run
   ```
   The API listens on `http://localhost:5000` by default (see `Properties/launchSettings.json`).

### Frontend (Next.js)

1. Configure environment variables
   ```bash
   cd ../my-portfolio
   cp .env.example .env.local   # optional: adjust PORTFOLIO_API_BASE_URL if needed
   ```
2. Install dependencies and start the dev server
   ```bash
   npm install
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to browse the site.

## 📝 Customization

All portfolio data lives in the ASP.NET Core backend, with the service composed from domain-specific seed files.
Update the relevant seed file in `backend/Data/Seeds/` to change the content returned by the API, or replace the in-memory implementation with a database-backed service. The Next.js app is only the frontend and no longer carries its own duplicate content dataset.

Whenever you change backend data, restart `dotnet run` so the new snapshot is served to the frontend.

Backend data is organized by domain under `backend/Data/Seeds/`:
- `PersonalInfoSeed.cs`
- `SiteConfigSeed.cs`
- `NavigationSeed.cs`
- `ProjectsSeed.cs`
- `ExperiencesSeed.cs`
- `EducationSeed.cs`
- `SkillsSeed.cs`
- `CoursesSeed.cs`

The site URL returned from the backend is configured via `Portfolio:SiteUrl` in appsettings, or `Portfolio__SiteUrl` as an environment variable in production.

## 📚 Available Scripts

**Backend**
- `dotnet run` (from `backend/`) – Start the ASP.NET Core API
- `dotnet build` – Compile the backend project

**Frontend**
- `npm run dev` – Start the Next.js dev server with Turbopack
- `npm run build` – Create a production build
- `npm run start` – Launch the production server
- `npm run lint` – Run ESLint for code quality

## 🔌 API Endpoints

The backend exposes the following JSON endpoints under `/api/portfolio`:

- `/` – Complete portfolio snapshot (all sections in one payload)
- `/personal` – Personal information and social links
- `/config` – Site metadata (name, description, colors, social URLs)
- `/navigation` – Navigation items for the frontend
- `/projects` & `/projects/featured` – Full and featured project lists
- `/experiences` – Professional experience entries
- `/education` – Education history
- `/skills` – Skill matrix
- `/courses` – Course catalogue with credits/grades

## 🎯 Pages

- **Homepage** (`/`) - Hero section, featured projects, and contact
- **About** (`/about`) - Detailed personal and professional information
- **Projects** (`/projects`) - Comprehensive project showcase
- **Courses** (`/courses`) - Educational background and certifications
- **CV** (`/cv`) - Professional resume and experience

## 🌐 Deployment

The frontend can be deployed on [Vercel](https://vercel.com/), but the ASP.NET Core backend in `backend/` must be deployed separately:

1. Deploy `backend/` to a .NET-capable host such as Render, Railway, Azure, or another ASP.NET hosting platform.
2. Configure backend CORS with `CORS_ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app,https://your-domain.com`.
3. Set `Portfolio__SiteUrl=https://your-domain.com` on the backend host.
4. Set `PORTFOLIO_API_BASE_URL=https://your-backend-domain.com` in the Vercel project for `my-portfolio/`.
5. Deploy the Next.js frontend from `my-portfolio/`.

Vercel does not run the ASP.NET Core backend folder for you. If the backend URL is missing or unreachable, the frontend now fails clearly instead of serving a second copy of the portfolio data.

Alternative deployment platforms:
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [Render](https://render.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

**Håvard Hetland Vestbø**
- GitHub: [@havardhvestbo](https://github.com/havardhvestbo)
- LinkedIn: [Håvard Hetland Vestbø](https://www.linkedin.com/in/h%C3%A5vard-hetland-vestb%C3%B8-0a9324151/)
- Email: havardvestbo@icloud.com

# 🎨 Håvard Hetland Vestbø - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my projects, experience, and skills as a Computer Engineering graduate and Management of Technology student.

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
my-portfolio/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── layout.tsx       # Root layout
│   │   ├── about/           # About page
│   │   ├── courses/         # Courses page
│   │   ├── cv/              # CV page
│   │   └── projects/        # Projects page
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── TechChips.tsx    # Technology skill chips
│   │   └── TechMarquee.tsx  # Scrolling tech marquee
│   └── data/                # Static data and configuration
│       ├── config.ts        # Site configuration
│       ├── personal.ts      # Personal information
│       ├── projects.ts      # Project data
│       ├── experience.ts    # Work experience
│       ├── courses.ts       # Educational courses
│       └── navigation.ts    # Navigation menu items
├── public/                  # Static assets
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/havardhvestbo/portfolio.git
   cd portfolio/my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📝 Customization

### Personal Information
Update your personal details in `src/data/personal.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ... more fields
};
```

### Projects
Add your projects in `src/data/projects.ts`:
```typescript
export const projects = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Project description",
    // ... more fields
  }
];
```

### Site Configuration
Update site-wide settings in `src/data/config.ts`:
```typescript
export const siteConfig = {
  name: "Your Portfolio",
  description: "Your description",
  url: "https://yourdomain.com",
  // ... more settings
};
```

## 📚 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Pages

- **Homepage** (`/`) - Hero section, featured projects, and contact
- **About** (`/about`) - Detailed personal and professional information
- **Projects** (`/projects`) - Comprehensive project showcase
- **Courses** (`/courses`) - Educational background and certifications
- **CV** (`/cv`) - Professional resume and experience

## 🌐 Deployment

This portfolio is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

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

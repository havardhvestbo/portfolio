# Data Structure

This folder contains all the structured data for the portfolio website, making it easy to update content without modifying component files.

## Files

### `personal.ts`
Contains personal information including:
- Name, title, and description
- Status (availability)
- Profile image
- Social media links
- Technology stack

### `projects.ts`
Contains all project data including:
- Project details (title, description, year)
- Technologies used
- Links (demo, GitHub, website)
- Featured projects for homepage

### `navigation.ts`
Contains navigation menu structure:
- Navigation links for header/navbar
- Easily add/remove/reorder menu items

### `experience.ts`
Contains professional and educational data:
- Work experience
- Education history
- Skills and proficiency levels
- Categorized by type (frontend, backend, tools, etc.)

### `courses.ts`
Contains detailed academic coursework:
- Course information (code, title, institution)
- Credits, grades, and semester details
- Course topics and technologies
- Helper functions to filter by level and category

### `config.ts`
Contains site-wide configuration:
- Site metadata (name, description, URL)
- Theme colors
- Social links for SEO/metadata

### `index.ts`
Re-exports all data modules for easy importing:
```typescript
import { personalInfo, projects, navLinks } from '@/data';
```

## Usage

To update any content on the website, simply modify the relevant data file. The components will automatically use the updated data.

### Example: Adding a new project
```typescript
// In projects.ts
{
  id: "new-project",
  title: "New Project",
  description: "Project description",
  featured: true, // Will appear on homepage
  technologies: ["React", "TypeScript"],
  links: {
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com"
  },
  year: 2024
}
```

### Example: Updating personal info
```typescript
// In personal.ts
export const personalInfo = {
  name: "Your Name",
  title: "Your Title", 
  description: "Your description",
  // ... other fields
};
```

# Khant Zin Win - Professional Portfolio

A modern, responsive React portfolio website built with TypeScript and Vite. Showcase your professional experience, skills, and expertise in a beautiful, interactive format.

## Features

- ✨ **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎨 **Customizable Styling** - Easy-to-modify CSS with CSS variables for theming
- 📊 **Component-Based** - Organized React components for easy maintenance and updates
- 🔍 **SEO-Friendly** - Semantic HTML and optimized structure
- ♿ **Accessible** - WCAG-compliant markup and navigation

## Sections

- **Header & Navigation** - Sticky header with smooth navigation links
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About** - Professional summary with key achievements
- **Skills** - Organized skill categories and expertise areas
- **Experience** - Timeline view of career history and accomplishments
- **Contact** - Multiple contact options with contact cards

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool
- **CSS3** - Modern styling with animations and gradients
- **ESLint** - Code quality

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── data/           # Data files
│   │   └── portfolio.ts
│   ├── styles/         # Component styles
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Experience.css
│   │   └── Contact.css
│   ├── App.tsx         # Main App component
│   ├── App.css         # Global app styles
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite configuration
└── README.md           # This file
```

## Customization

### Update Portfolio Data

Edit `src/data/portfolio.ts` to update:
- Personal information (name, email, phone, LinkedIn)
- Professional summary
- Skills and expertise areas
- Work experience and achievements
- Contact information

### Customize Colors

Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #1e40af;
  --secondary-color: #0f172a;
  --accent-color: #3b82f6;
  /* ... more variables */
}
```

### Add New Sections

1. Create a new component in `src/components/`
2. Add corresponding styles in `src/styles/`
3. Import and add the component to `src/App.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy your site

### Deploy to Netlify

1. Push your repository to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Other Platforms

The `dist` folder containing your built site can be deployed to any static hosting:
- GitHub Pages
- AWS S3
- Azure Static Web Apps
- Firebase Hosting
- Any other static hosting provider

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Khant Zin Win - Senior Java Developer

- Email: kaolin295@gmail.com
- Phone: +84 356387412
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/khant-zin-win)

---

Made with ❤️ using React and Vite

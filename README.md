# Mukul Jangid - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Full Stack Developer and Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects and smooth animations
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Interactive Elements**: Smooth scroll animations, hover effects, and particle background
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Friendly**: Proper meta tags and structured data for better search visibility
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth transitions
- **Particles**: TSParticles for interactive background
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📱 Sections

1. **Hero Section**: Dynamic role display with animated background
2. **About**: Personal story, education, and key strengths
3. **Skills**: Interactive technology showcase with progress bars
4. **Projects**: Featured projects with detailed descriptions
5. **Experience**: Professional timeline with achievements
6. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mkljngd/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run export
```

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form and info
│   ├── Experience.tsx       # Professional timeline
│   ├── Hero.tsx             # Hero section with animations
│   ├── LoadingScreen.tsx    # Loading animation
│   ├── Navigation.tsx       # Responsive navigation
│   ├── ParticleBackground.tsx # Interactive particles
│   ├── Projects.tsx         # Projects showcase
│   └── Skills.tsx           # Skills and technologies
├── public/
│   └── Mukul_Jangid_Cover_Letter_Resume.pdf
└── ...config files
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue gradient
- Secondary: Purple gradient  
- Accent: Yellow gradient

### Content
Update the following files to customize content:
- `components/Hero.tsx` - Personal introduction and roles
- `components/About.tsx` - Personal story and stats
- `components/Skills.tsx` - Technology skills and achievements
- `components/Projects.tsx` - Project details and descriptions
- `components/Experience.tsx` - Professional experience timeline
- `components/Contact.tsx` - Contact information

### Styling
- Global styles: `app/globals.css`
- Component styles: Individual component files
- Animations: Framer Motion configurations

## 🚀 Deployment

### GitHub Pages

1. Update `next.config.js` for static export:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

2. Build and export:
```bash
npm run build
npm run export
```

3. Deploy the `out` folder to GitHub Pages.

### Other Platforms

The site can be deployed to any static hosting platform:
- Vercel (recommended for Next.js)
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: mkljngd@bu.edu
- **Phone**: (857) 321-3168
- **LinkedIn**: [linkedin.com/in/mkljngd](https://linkedin.com/in/mkljngd)
- **GitHub**: [github.com/mkljngd](https://github.com/mkljngd)
- **Location**: Boston, MA (Open to relocate)

---

Built with ❤️ by Mukul Jangid
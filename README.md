# Portfolio Website - Nguyễn Minh Huy

A modern, elegant portfolio website built with Next.js 16, React 19, and TypeScript.

## 🚀 Features

- **Modern Stack**: Next.js 16, React 19, TypeScript
- **Elegant Design**: Wedding invitation-inspired theme with rose gold/champagne colors
- **Smooth Animations**: Scroll reveal, floating particles, magnetic effects
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized images and code splitting
- **SEO**: Complete metadata and Open Graph tags

## 📋 Sections

- **Hero**: Introduction with animated particles
- **About**: Professional background and expertise
- **Skills**: Frontend, Backend, and DevOps technologies
- **Education**: Academic background
- **Experience**: Work history with expandable details
- **Projects**: Featured projects showcase
- **Gallery**: Company images gallery (separate page)
- **Contact**: Contact information and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.0
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 📦 Installation

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Docker Deployment

#### Production Build

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

#### Development Mode

```bash
# Run in development mode with hot reload
docker-compose -f docker-compose.dev.yml up

# Stop development containers
docker-compose -f docker-compose.dev.yml down
```

#### Manual Docker Commands

```bash
# Build Docker image
docker build -t portfolio-app .

# Run container
docker run -p 3000:3000 portfolio-app

# Run with environment variables
docker run -p 3000:3000 -e NODE_ENV=production portfolio-app
```

The application will be available at `http://localhost:3000`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📁 Project Structure

```
├── app/
│   ├── gallery/          # Gallery page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── contact.tsx       # Contact section
│   ├── education.tsx     # Education section
│   ├── experience.tsx    # Experience section
│   ├── gallery.tsx       # Gallery component
│   ├── hero.tsx          # Hero section
│   ├── navigation.tsx    # Navigation sidebar
│   ├── projects.tsx      # Projects section
│   └── skills.tsx        # Skills section
├── public/
│   └── images/           # Gallery images
└── package.json
```

## 🎨 Customization

### Update Images

Replace images in `public/images/` folder and update the array in `components/gallery.tsx`:

```typescript
const companyImages = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
```

### Update Theme Colors

Modify CSS variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.12 45);
  /* ... other colors */
}
```

### Update Content

- Personal info: `components/hero.tsx`
- About section: `app/page.tsx` (About component)
- Skills: `components/skills.tsx`
- Experience: `components/experience.tsx`
- Projects: `components/projects.tsx`
- Contact: `components/contact.tsx`

## 📝 License

Private project - All rights reserved

## 👤 Author

**Nguyễn Minh Huy**

- Email: yuhuynguyen.1204@gmail.com
- GitHub: [@NguyenHuyu](https://github.com/NguyenHuyu)
- LinkedIn: [nguyenhuyu](https://www.linkedin.com/in/nguyenhuyu/)

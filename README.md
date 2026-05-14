# Royal Amritsar - Smart Travel System

A premium smart itinerary system for exploring Amritsar like an insider. Built with Next.js, React, Tailwind CSS, Framer Motion, and Lucide React.

## Features

✨ **Personalized Smart Itinerary** - AI-powered recommendations tailored to your preferences  
🏆 **Hidden Gems** - Discover premium local experiences beyond tourist content  
📊 **Live Crowd Intelligence** - Real-time insights to avoid unnecessary crowds  
🗺️ **Dynamic Route Optimization** - Smart attraction sequencing and reduced travel fatigue  
🍽️ **Premium Food Recommendations** - Authentic Punjabi cuisine and local favorites  
🔔 **Live Alerts & Suggestions** - Real-time closures, event rush, and dynamic updates  
🛡️ **Safety & Scam Awareness** - Expert guidance to protect your trip  
💬 **Priority Support** - 24/7 traveler support  
📱 **Offline Access** - Everything available even during low network situations  

## Tech Stack

- **Framework**: Next.js 16.2.6
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 11.0.0
- **Icons**: Lucide React 0.344.0
- **Language**: TypeScript 5
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd movodream
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the application.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run production server**
   ```bash
   npm start
   ```

## Project Structure

```
movodream/
├── public/                 # Static assets (images, logo)
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout component
│       ├── page.tsx        # Main page with all sections
│       └── globals.css     # Global styles
├── .gitignore             # Git ignore rules
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── package.json           # Project dependencies
├── vercel.json            # Vercel deployment configuration
└── README.md              # This file
```

## Deploy on Vercel

### Option 1: One-Click Deploy (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

### Option 2: Vercel CLI Deploy

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy your project**
   ```bash
   vercel
   ```

4. **Link to existing project (if needed)**
   ```bash
   vercel link
   ```

### Option 3: Deploy from Git (Recommended for Team Projects)

1. **Connect your GitHub repository to Vercel**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-configures for Next.js

2. **Automatic deployments**
   - Every push to main branch auto-deploys
   - Preview deployments for pull requests

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_APP_NAME=Royal Amritsar
```

The `vercel.json` file already includes production environment configuration.

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Automatic code splitting
- ✅ Static generation and incremental static regeneration
- ✅ CSS-in-JS optimizations
- ✅ Framer Motion animations optimized for performance
- ✅ Vercel edge caching enabled

## Build and Deployment

The project includes:
- **vercel.json** - Optimized Vercel configuration
- **next.config.ts** - Remote image optimization for Unsplash
- **tsconfig.json** - TypeScript strict mode enabled
- **.gitignore** - Excludes node_modules, .next, and build artifacts

## Troubleshooting

### Build fails with missing dependencies
```bash
npm install --save framer-motion lucide-react
```

### Images not loading
- Check `next.config.ts` for correct `remotePatterns` configuration
- Ensure all image URLs use HTTPS

### Deployment issues
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Vercel build logs in dashboard

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## License

MIT License - feel free to use this project for personal or commercial purposes.

---

**Made for travelers who want to experience Amritsar smartly.** 🇮🇳✈️

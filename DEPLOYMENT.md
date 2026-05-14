# Vercel Deployment Guide

## Quick Deploy Steps

### 1. Prepare Your Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Method A: Web Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New"** → **"Project"**
3. Select your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"** (usually takes 1-2 minutes)
6. Your site is live! 🚀

#### Method B: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

#### Method C: Git Integration (Auto-Deploy)
1. Connect your GitHub repo to Vercel
2. Every push to `main` automatically deploys
3. Pull requests get preview URLs

---

## Configuration Details

### vercel.json
The `vercel.json` file includes:
- **buildCommand**: `npm run build` - Builds the Next.js app
- **installCommand**: `npm install` - Installs dependencies
- **outputDirectory**: `.next` - Vercel knows where build output is
- **Security headers**: XSS protection, content type options
- **Caching**: 1-hour default cache for optimal performance

### next.config.ts
Optimizations enabled:
- **Image optimization**: AVIF and WebP formats for faster loading
- **SWC minification**: Faster builds and smaller bundles
- **Production source maps disabled**: Faster deployments
- **Package imports optimization**: Smaller JS bundles
- **Smart caching headers**: Leverages CDN for better performance

### .nvmrc
Specifies Node.js 18.17.0 - Vercel automatically uses this version

---

## Environment Variables

### Setting on Vercel Dashboard
1. Go to your project on Vercel
2. Click **Settings** → **Environment Variables**
3. Add variables (examples below)

### Example Variables
```
NEXT_PUBLIC_APP_NAME=Royal Amritsar
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

**Note**: Variables starting with `NEXT_PUBLIC_` are exposed to the browser.

---

## Deployment Checklist

- ✅ `.gitignore` properly excludes `node_modules` and `.next`
- ✅ `package.json` has all dependencies listed
- ✅ All environment variables defined
- ✅ No hardcoded secrets in code
- ✅ `vercel.json` is configured
- ✅ Repository is on GitHub
- ✅ Code pushed to main branch

---

## Troubleshooting

### Build Fails
**Error**: `Module not found: framer-motion`
```bash
# Solution: Install missing dependencies
npm install framer-motion lucide-react
git add package*.json
git commit -m "Add missing dependencies"
git push origin main
```

### Images Not Loading
**Problem**: Unsplash images show broken
**Solution**: Check `next.config.ts` has correct `remotePatterns`

### Deployment Takes Too Long
**Problem**: Build exceeds 45 seconds
**Solutions**:
- Clear build cache: Project Settings → Deployments → Redeploy (with cache cleared)
- Reduce bundle size by removing unused dependencies
- Enable SWC minification (already enabled in config)

### Preview Deployment Fails
**Problem**: Pull request preview doesn't deploy
**Solution**: Check Vercel build logs for errors

### Domain/Custom URL
1. Go to Vercel Dashboard
2. Click your project
3. Settings → Domains
4. Add your custom domain
5. Update DNS records as shown by Vercel

---

## Monitoring & Analytics

### View Deployment Logs
1. Dashboard → Your Project
2. Deployments tab → Select deployment
3. View build and runtime logs

### Monitor Performance
1. Vercel Analytics (optional paid feature)
2. Google Analytics integration
3. Core Web Vitals monitoring

---

## Post-Deployment

### Verify Deployment
- [ ] Visit your Vercel URL
- [ ] Check all pages load
- [ ] Test navigation links
- [ ] Verify images display
- [ ] Check animations work
- [ ] Test on mobile devices

### Update GitHub
```bash
# Add Vercel badge to README
echo "[Deployed on Vercel](https://yoursite.vercel.app)" >> README.md
```

### Set Up CI/CD
Already integrated! Every push to `main` deploys automatically.

---

## Performance Tips

1. **Optimize Images**: Use Next.js Image component (already done)
2. **Code Splitting**: Next.js does automatic code splitting
3. **Caching**: Vercel's global CDN caches static assets
4. **Analytics**: Monitor Core Web Vitals on Vercel Analytics

---

## Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Environment Variables Guide](https://vercel.com/docs/projects/environment-variables)

---

## Support

**Issues with deployment?**
- Check Vercel build logs for specific errors
- Review this guide's troubleshooting section
- Visit [Vercel Discord Community](https://discord.com/invite/vercel)

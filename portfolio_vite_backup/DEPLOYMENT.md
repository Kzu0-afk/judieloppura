# Deployment Guide

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your machine

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure the project:
     - **Root Directory:** `portfolio`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`
   - Click "Deploy"

3. **Configure Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed by Vercel

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to portfolio directory:**
   ```bash
   cd portfolio
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
4. **Follow the prompts:**
   - Select your project settings
   - Confirm deployment

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Environment Variables

If you need to add environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables (e.g., `VITE_API_URL`)
3. Redeploy the project

## Custom Domain Setup

### Using Your Own Domain

1. **Purchase domain** from a registrar (e.g., Namecheap, GoDaddy, Google Domains)

2. **Add domain to Vercel:**
   - Vercel Dashboard → Project → Settings → Domains
   - Enter your domain name
   - Click "Add"

3. **Configure DNS:**
   
   For **Root Domain** (example.com):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   For **www subdomain** (www.example.com):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for DNS propagation** (can take up to 48 hours, usually much faster)

### Using Vercel Subdomain

Your project will automatically get a Vercel subdomain:
- `https://your-project-name.vercel.app`

You can customize the subdomain in Project Settings.

## Performance Optimization

The portfolio is already optimized with:
- ✅ Vite for fast builds
- ✅ Tailwind CSS purging unused styles
- ✅ React lazy loading ready
- ✅ Optimized images (use WebP when possible)
- ✅ Minimal JavaScript bundles

## Monitoring & Analytics

### Add Vercel Analytics

1. Go to Vercel Dashboard → Your Project → Analytics
2. Enable Analytics (free tier available)
3. View real-time traffic and performance metrics

### Add Google Analytics (Optional)

1. Create a Google Analytics property
2. Add tracking code to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR-GA-ID');
   </script>
   ```

## Continuous Deployment

With Vercel + GitHub integration:
- Every push to `main` branch triggers a production deployment
- Pull requests automatically get preview deployments
- No manual deployment needed!

## Troubleshooting

### Build Fails

**Check build logs:**
- Vercel Dashboard → Deployments → Failed Deployment → View Logs

**Common issues:**
- Missing dependencies: Run `npm install` locally
- Build errors: Run `npm run build` locally to test
- Node version: Ensure Vercel uses correct Node version (18+)

### 404 Errors on Routes

- Ensure `vercel.json` is properly configured with rewrites
- Check that all routes are using client-side routing

### Slow Loading

- Optimize images (use WebP format)
- Enable lazy loading for components
- Check Vercel Analytics for performance insights

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [GitHub Issues](https://github.com/Kzu0-afk/judieloppura/issues)

---

Good luck with your deployment! 🚀


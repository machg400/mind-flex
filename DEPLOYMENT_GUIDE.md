# Quick Deployment Guide - Mind Flex Website

## Deploy to Vercel in 5 Minutes

### Step 1: Prepare Your Project
1. Make sure you have all these files in your project folder:
   - `package.json`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `.gitignore`
   - `src/` folder with App.js, index.js, index.css, App.css
   - `public/` folder with index.html

### Step 2: Push to GitHub
If you haven't already:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial Mind Flex website"

# Create a repo on github.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/mind-flex.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to **[vercel.com](https://vercel.com)**
2. Click **Sign Up** → Choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub
4. Click **New Project**
5. Select **mind-flex** repository
6. Click **Import**
7. Vercel auto-detects React settings
8. Click **Deploy** (blue button)

### Step 4: Share Your Test URL
After deployment completes (~2 minutes), you'll get a URL like:
```
https://mind-flex-abc123.vercel.app
```

Share this with your team!

---

## Test Locally First (Optional)

If you want to test before deploying:

```bash
# Install Node.js from nodejs.org first

# Install dependencies
npm install

# Start local server
npm start

# Opens at http://localhost:3000
# Press Ctrl+C to stop
```

---

## Making Updates

Once deployed to Vercel:

1. Make changes to your code locally
2. Test with `npm start`
3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Your message"
   git push
   ```
4. Vercel auto-deploys! (Check deployment status on vercel.com)

---

## Troubleshooting Vercel Deployment

### Build Error: "react-scripts build exited with 127"
**Solution:** Ensure `package.json` is in your project root with all dependencies listed.

**Verify you have:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.24",
    "autoprefixer": "^10.4.14"
  }
}
```

### Build says "Cannot find module"
**Solution:** 
- Delete `node_modules` folder locally
- Run `npm install`
- Push to GitHub again

### Deployment Timeout
**Solution:** Check your build logs in Vercel dashboard. Usually means a large dependency is installing. Wait for it to complete.

---

## Next Steps

After deployment:
- [ ] Test the website on mobile devices
- [ ] Share URL with stakeholders
- [ ] Collect feedback
- [ ] Update content (replace placeholder text)
- [ ] Add real images and videos
- [ ] Configure custom domain (if needed)

---

## Custom Domain (Optional)

After deploying to Vercel:

1. Buy domain from GoDaddy, Namecheap, or similar
2. Go to Vercel project settings → **Domains**
3. Add your domain
4. Follow DNS configuration steps
5. Takes 24-48 hours to activate

---

**Questions?** Check the README.md in your project folder for more details.

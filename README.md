# Mind Flex - Education Program Website

A modern, responsive React website for the Mind Flex education program featuring a professional design with navy blue, forest green, and light gold color scheme.

## Project Structure

```
mind-flex/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## Prerequisites

- Node.js (v14 or higher) - Download from [nodejs.org](https://nodejs.org)
- npm (comes with Node.js)

## Installation & Setup

### Local Development

1. **Clone or download this project folder**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   This creates an optimized build folder ready for deployment.

## Deploying to Vercel

Vercel is the easiest way to deploy this React app (recommended).

### Option A: GitHub Integration (Easiest)

1. **Push code to GitHub**
   - Create a GitHub account at [github.com](https://github.com) if you don't have one
   - Create a new repository
   - Push this project to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/mind-flex.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account
   - Click "New Project"
   - Select your `mind-flex` repository
   - Click "Import"
   - Vercel auto-detects React settings
   - Click "Deploy"

3. **Get your test URL**
   - Vercel will assign a URL like `https://mind-flex-abc123.vercel.app`
   - Share this URL with your team

### Option B: Direct Upload to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "New Project" → "Upload Files"
4. Drag and drop this entire folder
5. Vercel will detect React and deploy automatically
6. You'll receive a shareable URL

## Deploying to Other Platforms

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select this repository
5. Click "Deploy"

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/mind-flex",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
Then run:
```bash
npm run deploy
```

### Traditional Hosting (via FTP/SSH)
1. Run `npm run build`
2. Upload the `build/` folder contents to your web server
3. Ensure your server is configured to serve `index.html` for all routes

## Features

✅ **Responsive Design** - Optimized for desktop, tablet, and mobile
✅ **Dark Mode** - Navy blue and forest green color scheme
✅ **Multiple Pages** - Home, Apply, Academics, Cost, Vision, FAQs
✅ **Navigation** - Sticky header with responsive menu
✅ **Professional Footer** - Social links and company info
✅ **Card-Based Layouts** - Feature cards and program cards
✅ **Smooth Animations** - Page transitions and hover effects
✅ **Accessible** - Semantic HTML and keyboard navigation

## Pages Included

1. **Home** - Hero section with video placeholder and feature cards
2. **Apply** - Application information with CTA button
3. **Academics** - Program cards showcasing different courses
4. **Cost** - Pricing table with program details
5. **Our Vision** - Company vision and mission statement
6. **FAQs** - Frequently asked questions

## Customization

### Changing Colors
Edit the `colors` object in `src/App.js`:
```javascript
const colors = {
  navyBlue: '#0f172a',
  darkNavy: '#0a0e27',
  forestGreen: '#1a4d2e',
  lightGold: '#d4af37',
  lightText: '#e8eef5',
  accentGold: '#f0c674',
};
```

### Adding Content
Simply replace placeholder text in the page components (HomePage, ApplyPage, etc.) with your actual content.

### Adding Images
1. Place image files in the `public/` folder
2. Reference them in JSX: `<img src="/image-name.jpg" alt="description" />`

### Adding a Real Video
In the HomePage component, replace the video source:
```javascript
<source src="/your-video.mp4" type="video/mp4" />
```

## Troubleshooting

**Error: "react-scripts build exited with 127"**
- Make sure all files are present in the correct directories
- Run `npm install` again
- Delete `node_modules` folder and run `npm install`

**Port 3000 already in use**
```bash
# On macOS/Linux
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Deployment fails on Vercel**
- Check that `package.json` is in the root directory
- Ensure all dependencies are listed in `package.json`
- Check build logs in Vercel dashboard for specific errors

## Support

For issues with React, Tailwind CSS, or deployment:
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)

## License

This project is created for the Mind Flex education program.

---

**Ready to deploy?** Choose Vercel for the fastest setup! 🚀

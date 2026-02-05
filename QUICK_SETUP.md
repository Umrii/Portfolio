# 🚀 Quick Setup Guide - Next.js + TypeScript Portfolio

## Getting Started in 5 Minutes

### Step 1: Prerequisites
- **Node.js 18.17+** - Download from https://nodejs.org/
- Any package manager: npm (comes with Node), yarn, or pnpm

### Step 2: Install Dependencies
```bash
cd portfolio-nextjs
npm install
```
This will install all dependencies (may take 2-3 minutes).

### Step 3: Customize Your Content
Edit `data/portfolioData.ts`:
- Update your name, tagline, and description
- Add your GitHub and LinkedIn URLs
- Update your email address

### Step 4: Start Development Server
```bash
npm run dev
```
Open http://localhost:3000 - your portfolio is live! 🎉

### Step 5: Build for Production
```bash
npm run build
npm run start
```

---

## ✅ Pre-Launch Checklist

### Essential Updates
- [ ] Update personal info in `data/portfolioData.ts`
- [ ] Replace placeholder text in About section
- [ ] Add your actual GitHub and LinkedIn URLs
- [ ] Update email address
- [ ] Update metadata in `app/layout.tsx`

### Content Updates
- [ ] Add your projects to `projects` array
- [ ] Update resume experience and education
- [ ] Add your skills
- [ ] Upload resume PDF to `public/` folder
- [ ] Update `pdfUrl` in resumeData

### Optional Updates
- [ ] Add blog posts when ready
- [ ] Customize colors
- [ ] Add more sections

---

## 🎨 Quick Customization

### Adding a Project
Open `data/portfolioData.ts` and add to the `projects` array:

```typescript
{
  id: 2,
  title: "My Awesome Project",
  description: "What it does...",
  techStack: ["Next.js", "TypeScript", "Tailwind"],
  liveDemo: "https://demo.com",
  github: "https://github.com/you/project"
}
```

### Changing Colors
Find and replace throughout components:
- `purple-400` → your primary color
- `blue-600` → your secondary color
- `purple-500` → your accent color

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free & Automatic)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Option 2: Netlify
1. Build: `npm run build`
2. Go to https://netlify.com
3. Drag and drop your project folder

### Option 3: Command Line (Vercel)
```bash
npm install -g vercel
vercel
```

---

## 💡 TypeScript Benefits

Your portfolio is now type-safe! This means:
- ✅ Fewer bugs
- ✅ Better autocomplete in your editor
- ✅ Easier refactoring
- ✅ Self-documenting code

All your data has types defined in `types/index.ts`.

---

## 🆘 Troubleshooting

### "npm: command not found"
Install Node.js from https://nodejs.org/

### Port 3000 in use
```bash
# Use different port
PORT=3001 npm run dev
```

### TypeScript Errors
```bash
# Check all types
npm run build
```

### Changes not showing
- Save your files
- Wait for hot reload (automatic)
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

---

## 📁 Key Files to Edit

1. **`data/portfolioData.ts`** - All your content
2. **`app/layout.tsx`** - SEO metadata
3. **`types/index.ts`** - TypeScript types (if adding new data structures)
4. **`app/globals.css`** - Custom styles (optional)

---

## 🎯 Next Steps

1. **Customize your content** in `data/portfolioData.ts`
2. **Test locally** with `npm run dev`
3. **Build for production** with `npm run build`
4. **Deploy** to Vercel or Netlify
5. **Share** your portfolio with the world! 🌟

---

## 📚 Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality

# Type checking
tsc --noEmit         # Check TypeScript types
```

---

## 🎉 You're All Set!

Your modern, type-safe portfolio is ready to showcase your work.

Need help? Check the main README.md or open an issue on GitHub.

Good luck! 🚀

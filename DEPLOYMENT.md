# GitHub Pages Deployment Guide

## Step-by-Step Setup

### 1. **Create a GitHub Repository**
- Go to https://github.com/new
- Name your repository: `portfolio`
- Choose: Public (required for free GitHub Pages)
- Do NOT initialize with README (we already have one)
- Click "Create repository"

### 2. **Update the Homepage URL**
Edit `package.json` and change:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio"
```
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

For example, if your username is `johndoe`:
```json
"homepage": "https://johndoe.github.io/portfolio"
```

### 3. **Add GitHub Remote & Push Code**
In your terminal (in the project directory):

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

### 4. **Deploy to GitHub Pages**
Run this command:
```bash
npm run deploy
```

This will:
- Build your portfolio (`npm run build`)
- Push the `dist` folder to the `gh-pages` branch
- GitHub will automatically host it

### 5. **Configure GitHub Pages Settings**
1. Go to your repository: `https://github.com/YOUR_GITHUB_USERNAME/portfolio`
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### 6. **Access Your Portfolio**
Your portfolio will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/portfolio
```

Give it 2-3 minutes for GitHub to deploy.

---

## For Future Updates

Every time you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

Or create a quick alias in your terminal for faster deployment.

---

## Troubleshooting

**Issue: Portfolio doesn't load after deploy**
- Wait 2-5 minutes for GitHub Pages to process
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check repository Settings → Pages to verify deployment

**Issue: Assets not loading (404 errors)**
- Make sure `homepage` URL in `package.json` is correct
- Must include `/portfolio` at the end

**Issue: Can't push to GitHub**
- Make sure you have GitHub credentials set up
- Use SSH keys or personal access tokens for authentication

---

## That's it! 🎉

Your portfolio is now live on GitHub Pages!

**Quick Reference:**
- Deployment command: `npm run deploy`
- View live: `https://YOUR_GITHUB_USERNAME.github.io/portfolio`
- Development: `npm run dev`
- Build locally: `npm run build`

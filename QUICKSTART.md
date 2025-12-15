# 🚀 Quick Start Guide

Welcome to your portfolio website! Here's how to get started:

## Step 1: Add Your Content ✏️

### 1.1 Personal Information
Update all pages with your actual information:

**File: `index.html` (Home Page)**
- [ ] Change "Welcome to My Portfolio" title
- [ ] Update bio description
- [ ] Change email address (search for "your.email@example.com")
- [ ] Update social profile URLs (GitHub, LinkedIn, etc.)

**File: `pages/about.html` (About Page)**
- [ ] Replace "[Your Name]" with your name
- [ ] Update personal background section
- [ ] Add your education details
- [ ] List your technical skills
- [ ] Describe your experience and activities

**File: `pages/projects.html` (Projects Page)**
- [ ] Update Project 1 details
- [ ] Update Project 2 (Hour of Code) details
- [ ] Add/update Additional Project information
- [ ] Add links to your GitHub repositories
- [ ] Add technology tags for each project

**File: `pages/resume.html` (Resume Page)**
- [ ] Update contact information
- [ ] Add professional summary
- [ ] List technical skills
- [ ] Add education details
- [ ] Include work experience (even if it's just projects)
- [ ] List activities and involvement

## Step 2: Add Images 📸

1. Create high-quality images:
   - **profile.jpg**: Your profile photo (500x500px)
   - **project1.jpg**: Screenshot of Project 1 (600x400px)
   - **project2.jpg**: Screenshot of Hour of Code project (600x400px)
   - **project3.jpg**: Screenshot of additional project (600x400px)

2. Save them to the `images/` folder

3. (Optional) Compress images using:
   - TinyPNG.com
   - ImageOptim (Mac)
   - Squoosh.app

## Step 3: Customize Styling 🎨

Want to change the color scheme? Edit `css/styles.css`:

```css
/* Find this at the top of the file */
:root {
  --primary-color: #2563eb;      /* Main blue color */
  --secondary-color: #1e40af;    /* Darker blue */
  --accent-color: #f59e0b;       /* Orange accent */
  --text-dark: #1f2937;          /* Dark text */
  --text-light: #6b7280;         /* Light gray text */
  --bg-light: #f9fafb;           /* Light background */
  --bg-white: #ffffff;           /* White */
  --border-color: #e5e7eb;       /* Borders */
}
```

Change these hex colors to your preferred colors!

## Step 4: Test Your Website 🧪

### Using LiveServer (Recommended):
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your site opens in the browser with auto-refresh

### Manual Testing:
1. Open `index.html` directly in your browser
2. Click through all pages
3. Test on mobile (press F12, toggle device toolbar)

### Testing Checklist:
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Mobile menu works (hamburger icon)
- [ ] Responsive design looks good on all sizes
- [ ] No console errors (F12 → Console tab)
- [ ] Page loads quickly
- [ ] All text is readable

## Step 5: Push to GitHub 🐙

### First Time Setup:
```bash
cd /Users/medinaradjabova/my\ wabe\ page
git config user.name "Your Name"
git config user.email "your.email@example.com"
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### Regular Updates:
```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

## Step 6: Deploy Your Website 🌐

### Option A: GitHub Pages (FREE)
1. Go to GitHub repository settings
2. Scroll to "GitHub Pages"
3. Set source to "main branch"
4. Your site is live at: `https://YOUR_USERNAME.github.io/my-wabe-page/`

### Option B: Netlify (FREE)
1. Go to Netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag your project folder
4. Your site is instantly live

### Option C: Vercel (FREE)
1. Go to Vercel.com
2. Click "New Project"
3. Import from GitHub
4. Follow the setup wizard

## Important URLs to Replace

Search for these placeholders and replace with your actual information:

```
your.email@example.com          → your actual email
https://github.com             → your GitHub URL
https://codecademy.com         → your Codecademy profile
https://linkedin.com           → your LinkedIn profile
YOUR_USERNAME                  → your GitHub username
[Your Name]                    → your actual name
[Your Location]                → your city/state
[Your School]                  → your school name
```

## Common Issues & Solutions

### Images Not Loading
- Check that filenames match exactly (case-sensitive)
- Verify image paths are correct (e.g., `../images/profile.jpg`)
- Ensure images are in the `images/` folder

### Links Not Working
- Check file paths (use `../` to go up one folder)
- Verify spelling of file names
- Test in a clean browser window (clear cache)

### Styling Looks Different
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Try a different browser

### Mobile Menu Not Working
- Check that `js/script.js` is loading (F12 → Console)
- Verify Font Awesome library is loaded
- Test on actual mobile device

## Next Steps

1. **Fill in all your content** - This is the most important step!
2. **Add real images** - Replace placeholders with your actual photos
3. **Test thoroughly** - Check all pages and responsive behavior
4. **Deploy online** - Choose GitHub Pages, Netlify, or Vercel
5. **Share your portfolio** - Tell friends and mentors about it
6. **Keep it updated** - Add new projects as you complete them

## Helpful Resources

- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)

## Need Help?

1. **Check the README.md** - Full documentation
2. **Review the comments** - Code comments explain features
3. **Check HTML structure** - Elements are labeled clearly
4. **Use browser DevTools** - F12 to inspect and debug
5. **Search Stack Overflow** - Most issues have solutions online

---

**You've got this! 💪 Your portfolio is ready to showcase your amazing work!**

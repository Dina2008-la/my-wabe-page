# Customization Guide

## Overview

This guide provides detailed instructions on how to customize every aspect of your portfolio website.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Images](#images)
3. [Colors & Styling](#colors--styling)
4. [Content Updates](#content-updates)
5. [Links & URLs](#links--urls)
6. [Advanced Customization](#advanced-customization)

---

## Personal Information

### Update Your Name

1. **Home Page** (`index.html`):
   - Find: `<h1>Welcome to My Portfolio</h1>`
   - The site automatically uses "My Portfolio" as the main heading

2. **All Pages** - Update the logo to your name:
   - Find: `<a href="index.html" class="logo">My Portfolio</a>`
   - Replace: `My Portfolio` with your name (e.g., `Jane Smith`)

3. **About Page** (`pages/about.html`):
   - Search for: `[Your Name]`
   - Replace all instances with your actual name

4. **Resume Page** (`pages/resume.html`):
   - Update the header section with your name and title

### Update Contact Information

Replace these email addresses throughout the site:
```
your.email@example.com
```

Search in ALL HTML files and replace with your actual email.

Use Find & Replace in VS Code:
1. Press `Ctrl+H` (Cmd+H on Mac)
2. Find: `your.email@example.com`
3. Replace: `your.actual.email@domain.com`
4. Click "Replace All"

---

## Images

### Add Profile Photo

1. Take a professional photo (headshot or casual)
2. Resize to at least 500x500px (square format recommended)
3. Export as JPG or PNG
4. Save as `profile.jpg` in the `images/` folder
5. Clear browser cache to see the change

**Best Practices:**
- Use good lighting
- Neutral background
- Smile naturally
- Professional attire (if formal portfolio)
- Crop closely to your face/shoulders

### Add Project Screenshots

For each project (project1.jpg, project2.jpg, project3.jpg):

1. Take screenshot of your project
2. Edit if needed (crop, enhance, add borders)
3. Resize to 600x400px
4. Export as JPG or PNG
5. Save to `images/` folder with correct name

**Tips:**
- Show the full website/app interface
- Include active states or interesting content
- Use high-quality screenshots
- Consider adding a border frame
- Keep consistent style across all project images

### Optimize Image Sizes

Large images slow down your website. Compress them:

1. **TinyPNG.com**:
   - Upload your image
   - Download compressed version
   - Usually reduces 50-70% size

2. **ImageOptim** (Mac):
   - Drag and drop images
   - Automatic compression

3. **Squoosh.app**:
   - Online tool
   - Various compression options

**Target Sizes:**
- Profile photo: < 200KB
- Project images: < 150KB each

---

## Colors & Styling

### Change Color Scheme

Edit `css/styles.css` (lines 1-20):

```css
:root {
  --primary-color: #2563eb;      /* Main blue - buttons, links */
  --secondary-color: #1e40af;    /* Darker blue - hover states */
  --accent-color: #f59e0b;       /* Orange - highlights */
  --text-dark: #1f2937;          /* Dark text color */
  --text-light: #6b7280;         /* Light gray text */
  --bg-light: #f9fafb;           /* Light background */
  --bg-white: #ffffff;           /* White background */
  --border-color: #e5e7eb;       /* Border color */
}
```

### Popular Color Combinations

**Professional Blue:**
```css
--primary-color: #1e40af;
--secondary-color: #1e3a8a;
--accent-color: #3b82f6;
```

**Warm Orange:**
```css
--primary-color: #ea580c;
--secondary-color: #c2410c;
--accent-color: #f97316;
```

**Modern Purple:**
```css
--primary-color: #7c3aed;
--secondary-color: #6d28d9;
--accent-color: #a855f7;
```

**Green Eco:**
```css
--primary-color: #059669;
--secondary-color: #047857;
--accent-color: #10b981;
```

### Change Fonts

Edit `css/styles.css` (around line 32):

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* Change to: */
  font-family: 'Arial', sans-serif;
  /* Or use Google Fonts - add to HTML <head>: */
  /* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"> */
  /* Then use: font-family: 'Poppins', sans-serif; */
}
```

**Google Font Examples:**
- `'Poppins'` - Modern and friendly
- `'Roboto'` - Clean and professional
- `'Playfair Display'` - Elegant and sophisticated
- `'Inter'` - Contemporary and readable

### Adjust Spacing & Sizing

Edit these in `css/styles.css`:

```css
/* Increase heading size */
.hero h1 {
  font-size: 3.5rem;  /* Change from 3rem */
}

/* Adjust card padding */
.card-content {
  padding: 2rem;  /* Change from 1.5rem */
}

/* Modify section margins */
main {
  padding: 3rem;  /* Change from 2rem */
}
```

---

## Content Updates

### Home Page (`index.html`)

**Update Hero Section:**
```html
<h1>Welcome to My Portfolio</h1>
<p>Full-Stack Developer | Computer Science Enthusiast | Problem Solver</p>
<p>
  I'm a passionate developer dedicated to creating elegant solutions to complex problems.
  This portfolio showcases my projects, skills, and experiences in web development.
</p>
```

Replace with your own professional summary.

**Update Project Cards:**
For each project card, update:
- `<h3 class="card-title">` - Project name
- `<p class="card-description">` - Project description
- `<span class="tag">` - Technology tags

### About Page (`pages/about.html`)

Replace placeholders:
- `[Your Name]` - Your actual name
- `[Your Location]` - Your city/state
- `[Your School Name]` - Your school
- `[Your Field of Study]` - Your major/focus

Update sections:
1. **Hello Section** - Personal introduction
2. **Background** - Where you're from, interests
3. **Education** - Schools, degrees, certifications
4. **Technical Skills** - Programming languages, tools
5. **Professional Experience** - Projects, work, activities
6. **Interests** - Your hobbies and passions

### Projects Page (`pages/projects.html`)

For each project, update:

```html
<h3 class="card-title">PROJECT NAME</h3>
<p class="card-description">PROJECT DESCRIPTION</p>
```

**Features section:**
- List key features with `<li>` tags
- Use relevant, specific descriptions

**Technologies Used:**
- Replace tag names with actual tech used
- Add or remove tags as needed

**Learning Outcomes:**
- Explain what you learned
- Describe problem-solving approach

**Links:**
```html
<a href="YOUR_GITHUB_REPO_URL">View Code</a>
<a href="YOUR_LIVE_SITE_URL">Live Demo</a>
```

### Resume Page (`pages/resume.html`)

Update all sections:
1. **Header** - Name, title, contact info
2. **Professional Summary** - 2-3 sentence overview
3. **Technical Skills** - Organized by category
4. **Education** - Schools, graduation dates
5. **Professional Experience** - Projects, roles, achievements
6. **Activities & Involvement** - Clubs, events, contributions
7. **Additional Information** - Languages, certifications

---

## Links & URLs

### Critical URLs to Update

Use Find & Replace (`Ctrl+H` / `Cmd+H`) to update:

1. **GitHub Profile URL:**
   - Find: `https://github.com`
   - Replace: `https://github.com/YOUR_USERNAME`

2. **GitHub Repository:**
   - Find: `https://github.com/YOUR_USERNAME/my-wabe-page`
   - Replace: Your actual repository URL

3. **Email Address:**
   - Find: `your.email@example.com`
   - Replace: Your email address

4. **Codecademy Profile:**
   - Find: `https://codecademy.com`
   - Replace: Your Codecademy profile URL

5. **LinkedIn Profile:**
   - Find: `https://linkedin.com`
   - Replace: Your LinkedIn profile URL

### Add More Social Links

In any HTML file, find the social links section:

```html
<div class="social-links">
  <a href="https://github.com" target="_blank" class="social-link" title="GitHub">
    <i class="fab fa-github"></i>
  </a>
  <!-- Add more like this: -->
  <a href="https://twitter.com/YOUR_HANDLE" target="_blank" class="social-link" title="Twitter">
    <i class="fab fa-twitter"></i>
  </a>
</div>
```

**Available Font Awesome Icons:**
- `fa-github` - GitHub
- `fa-linkedin` - LinkedIn
- `fa-twitter` - Twitter
- `fa-instagram` - Instagram
- `fa-youtube` - YouTube
- `fa-codepen` - CodePen
- `fa-envelope` - Email

### Project Links

For each project on the Projects page, update:

```html
<a href="https://github.com/YOUR_USERNAME/PROJECT_NAME" target="_blank">
  View Code
</a>
<a href="https://your-live-site.com">
  Live Demo
</a>
```

---

## Advanced Customization

### Add a Blog Section

1. Create `pages/blog.html`
2. Add to navigation:
   ```html
   <li><a href="pages/blog.html" class="nav-link">Blog</a></li>
   ```
3. Create blog post structure with cards

### Add Contact Form

Create a simple contact form in `pages/contact.html`:

```html
<form id="contact-form">
  <input type="text" placeholder="Your Name" required>
  <input type="email" placeholder="Your Email" required>
  <textarea placeholder="Your Message" required></textarea>
  <button type="submit" class="btn">Send Message</button>
</form>
```

Use a service like Formspree, Netlify Forms, or EmailJS for submissions.

### Add Dark Mode

Add to `css/styles.css`:

```css
/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1f2937;
    color: #f3f4f6;
  }
  
  nav {
    background-color: #111827;
  }
  
  /* Add more dark mode colors as needed */
}
```

### Add Animations

Enhance with CSS animations:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.6s ease;
}
```

### Add Analytics

Add Google Analytics to track visitors. Add this before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.

---

## Testing Your Changes

After making changes:

1. **Save the file** (Ctrl+S / Cmd+S)
2. **Refresh browser** (F5 or Cmd+R)
3. **Hard refresh** to clear cache (Ctrl+Shift+R / Cmd+Shift+R)
4. **Check mobile view** (F12 → Toggle device toolbar)
5. **Test all links** - Click every link to ensure it works
6. **Check images** - Verify all images load correctly

---

## Deployment After Changes

After customizing:

```bash
git add .
git commit -m "Update portfolio content and styling"
git push origin main
```

Changes will automatically update on:
- GitHub Pages
- Netlify
- Vercel

---

## Need More Help?

- **CSS Reference**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **HTML Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **Color Picker**: https://coolors.co/
- **Font Combinations**: https://fontpair.co/
- **Icon Library**: https://fontawesome.com/

Good luck with your customizations! 🚀

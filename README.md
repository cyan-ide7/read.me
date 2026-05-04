# Modern Portfolio Website

A highly performant, SEO-friendly, and modern personal portfolio website built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**.

## Features
- ⚡ **Next.js App Router**: Lightning fast, static site generation ready.
- 🎨 **Tailwind CSS v4**: Beautiful utility-first styling with pure dark mode support.
- ✨ **Framer Motion**: Smooth scroll animations and page transitions.
- 📝 **Markdown Blog CMS**: Write blogs in `.md` files; Next.js handles the rest statically.
- 📱 **Mobile-First Responsive Design**: Looks great on all devices.

## Getting Started Locally

1. Clone the repository and navigate to the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Content

### Adding a New Project
Edit the `projects` array in `src/components/ProjectsSection.tsx`.

### Adding a New Blog Post
Create a new `.md` file inside the `content/blogs/` directory. Use the following frontmatter at the top of the file:
```markdown
---
title: "Your Blog Title"
date: "YYYY-MM-DD"
preview: "A short snippet of what the blog is about..."
---
Your markdown content goes here!
```

## Deployment Instructions

### Option 1: Vercel (Recommended & Easiest)
Vercel is the creator of Next.js and provides zero-configuration deployments.
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **Add New Project** and import your GitHub repository.
4. Leave all settings as default and click **Deploy**. Vercel will handle everything!

### Option 2: GitHub Pages (Free Hosting)
Since this project is configured for `output: "export"`, it generates a purely static HTML/CSS/JS build out-of-the-box, making it perfect for GitHub Pages.

1. In your `next.config.ts`, ensure you have:
   ```ts
   const nextConfig: NextConfig = {
     output: "export",
     images: { unoptimized: true }
   };
   ```
   *(This is already set up for you!)*
2. In your `package.json`, add the `gh-pages` script (optional but helpful).
3. Create a `.github/workflows/deploy.yml` file with a standard Next.js GitHub Actions deployment script, OR simply run `npm run build` and upload the generated `out/` folder to your `gh-pages` branch.
4. Go to your GitHub repository Settings > Pages, and select your deployment branch.

*Note: For GitHub Pages, if you host it on a subpath (like `username.github.io/portfolio`), you may need to add `basePath: "/portfolio"` to your `next.config.ts`.*

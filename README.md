# 🌐 Ronand D. Almazar - Portfolio Website

A stunning, futuristic portfolio website showcasing my expertise in software engineering, cloud technologies, and cybersecurity. Built with React and optimized for Vercel deployment, featuring cyberpunk aesthetics and smooth animations.

![Cyberpunk Portfolio](https://img.shields.io/badge/Status-Production%20Ready-00fff9?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-00fff9?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-ff006e?style=for-the-badge&logo=vite)

## 👨‍💻 About This Portfolio

This portfolio represents my journey as a Software Engineer with expertise in:
- ☁️ **AWS Cloud Services** (Lambda, S3, DynamoDB, Step Functions)
- 🔒 **Cybersecurity** (TrendMicro, Wazuh, OpenSearch, Threat Intelligence)
- 💻 **Full Stack Development** (Python, Java, C#, VB.NET)
- 📊 **Data Analysis** (Power BI, MySQL, Google Sheets Automation)
- 🏗️ **Serverless Architecture** & Scalable Solutions

## ✨ Features

- 🎨 **Cyberpunk Design**: Neon colors, glitch effects, and futuristic UI
- 🔥 **Smooth Animations**: Powered by Framer Motion for fluid transitions
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ⚡ **Performance Optimized**: Built with Vite for lightning-fast load times
- 🎯 **Interactive Elements**: Custom cursor, scan lines, and hover effects
- 🌈 **Dynamic Grid Background**: Animated cyberpunk grid system
- 📊 **Skills Showcase**: Animated progress bars featuring AWS, Python, Security Tools
- 💼 **Project Portfolio**: Real projects including serverless architecture and security operations
- 📬 **Contact Integration**: Direct email and phone contact information
- 🔝 **Back to Top Button**: Smooth scroll navigation

## 🎓 Background

**Current Role**: Technical Staff at Department of Agriculture - Region V  
**Previous**: Software Engineer & Security Analyst at Cloud Ready Technologies Corporation  
**Education**: BS Computer Science, Naga College Foundation (2018-2022)  
**Certification**: PhilNITS IT Passport Certified

## 🚀 Tech Stack

### Frontend
- **React 18.2** - UI library
- **Vite 5.0** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Custom animations and effects

### Fonts
- **Orbitron** - Futuristic display font
- **Rajdhani** - Clean, modern body font

## 📦 Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Local Development

1. **Clone or download the project**
   ```bash
   cd cyberpunk-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `cyberpunk-portfolio` (or your choice)
   - Directory: `./` (current directory)
   - Override settings: `N`

5. **Production deployment**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

## 📝 Customization Guide

The portfolio is already customized with my information, but you can further modify:

### Update Projects

Edit `src/components/Projects.jsx`:
- Add new projects to the projects array
- Update descriptions and tech stacks
- Change color schemes (cyan, pink, purple)

### Update Skills

Edit `src/components/Skills.jsx`:
- Modify skill categories
- Adjust skill levels (0-100)
- Add new technologies

### Update Contact Information

Edit `src/components/Contact.jsx`:
- Email: ronand.almazar.official@gmail.com
- Phone: {Put your own number}
- Location: {Put your own address}
- Social links (GitHub, LinkedIn)

### Customize Colors

Edit `src/index.css`:
```css
:root {
  --neon-cyan: #00fff9;
  --neon-pink: #ff006e;
  --neon-purple: #b000ff;
  --dark-bg: #0a0e27;
  --darker-bg: #050714;
}
```

## 🎨 Components

- **GridBackground**: Animated cyberpunk grid overlay
- **ScanLine**: CRT monitor scan line effect
- **Navigation**: Fixed navigation with smooth scrolling & active section tracking
- **Hero**: Landing section with glitch text effects and CTA buttons
- **About**: Professional background with experience stats
- **Projects**: Real-world projects (AWS Serverless, Security Operations, BI Dashboard)
- **Skills**: Technical skills visualization (Programming, Cloud, Data, Security)
- **Contact**: Direct contact information and social links
- **BackToTop**: Floating button to scroll back to top (appears after scrolling)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## ⚡ Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized assets and lazy loading

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. **Clear node_modules**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node version**
   ```bash
   node --version  # Should be 16+
   ```

### Deployment Issues

1. **Vercel Build Fails**
   - Ensure `vercel.json` is in root directory
   - Check build logs for specific errors
   - Verify all dependencies are in `package.json`

2. **White Screen After Deploy**
   - Check browser console for errors
   - Verify all assets are loading correctly
   - Clear Vercel cache and redeploy

## 📧 Contact

For questions, opportunities, or collaboration:
- **Email**: ronand.almazar.official@gmail.com
- **Phone**: 0970-160-3282
- **Location**: Cadlan, Pili, Camarines Sur

---

**Built by Ronand D. Almazar**  
Software Engineer | Cloud & Security Specialist | Data Analyst

Enjoy the portfolio! 🚀✨

# Mert Biricik - Portfolio Website

A modern, responsive portfolio website built with [Eleventy (11ty)](https://www.11ty.dev/) and deployed on GitHub Pages.

## 🚀 Live Site

Visit the live portfolio at: [https://mertbiricik.github.io/](https://mertbiricik.github.io/)

## 🛠️ Technologies Used

- **Static Site Generator**: Eleventy (11ty)
- **Templating**: Nunjucks
- **Styling**: Modern CSS with CSS Variables
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Deployment**: GitHub Pages with GitHub Actions
- **Typography**: Inter font family
- **Icons**: Font Awesome

## 📁 Project Structure

```
mertbiricik.github.io/
├── src/
│   ├── _layouts/           # Page layouts
│   ├── _includes/          # Reusable components
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   ├── assets/            # Images and other assets
│   ├── index.njk          # Homepage
│   ├── about.njk          # About page
│   ├── projects.njk       # Projects page
│   ├── publications.njk   # Publications page
│   └── contact.njk        # Contact page
├── .eleventy.js           # Eleventy configuration
├── .nojekyll              # Prevents Jekyll processing
├── package.json           # Node.js dependencies
└── .github/workflows/     # GitHub Actions deployment
```

## 🔧 Development Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mertbiricik/mertbiricik.github.io.git
cd mertbiricik.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080`

### Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build the site for production
- `npm run serve` - Serve the built site locally
- `npm run debug` - Run with debug output

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

1. Build the site:
```bash
npm run build
```

2. The built site will be in the `_site` directory

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch as the source
5. The site will be available at `https://mertbiricik.github.io/`

## 🎨 Customization

### Updating Content

- **Personal Information**: Edit the frontmatter and content in `src/index.njk`
- **Projects**: Add new projects in `src/projects.njk`
- **Publications**: Update publications in `src/publications.njk`
- **Skills**: Modify skill categories in the homepage

### Styling

- **Colors**: Update CSS variables in `src/css/style.css`
- **Typography**: Change font families in the CSS file
- **Layout**: Modify grid layouts and spacing

### Configuration

- **Navigation**: Modify navigation links in `src/_layouts/base.njk`
- **Site Config**: Update settings in `.eleventy.js`

## 📱 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern CSS**: CSS Grid, Flexbox, and CSS Variables
- **Performance**: Optimized images and minified assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation
- **Progressive Enhancement**: Works without JavaScript

## 🔗 Key Sections

- **Hero Section**: Introduction and call-to-action
- **About**: Professional background and expertise
- **Skills**: Technical skills organized by category
- **Projects**: Featured projects with live demos and source code
- **Publications**: Academic research and papers
- **Contact**: Professional contact information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Mert Biricik
- Email: mert@biricik.de
- LinkedIn: [linkedin.com/in/mertbiricik](https://linkedin.com/in/mertbiricik)
- GitHub: [github.com/mertbiricik](https://github.com/mertbiricik)

---

Built with ❤️ using Eleventy and deployed on GitHub Pages 
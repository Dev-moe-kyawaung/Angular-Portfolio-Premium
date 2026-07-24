# Angular Portfolio Premium 🚀

A premium portfolio built with Angular 17, featuring Material Design, dark mode, and modern animations.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Angular+Premium+Portfolio)

## Features ✨

- 🌙 **Dark/Light Theme Toggle** - Seamless theme switching with local storage persistence
- 🎯 **Particle Animations** - Interactive particle background effects
- 💎 **Glassmorphism UI** - Modern glass-like design elements
- 📱 **Fully Responsive** - Perfect on all devices with Angular Flex Layout
- 🎬 **GSAP Animations** - Smooth page transitions and scroll animations
- 🔥 **GitHub API Integration** - Display your repos dynamically
- ⚡ **Angular 17** - Latest features and optimizations
- 🎨 **Material Design** - Professional UI components
- 🌐 **PWA Support** - Progressive Web App capabilities
- 🚀 **Lazy Loading** - Optimized module loading

## Tech Stack 🛠️

- **Angular 17** - Web framework
- **TypeScript** - Programming language
- **Angular Material** - UI components
- **Angular Flex Layout** - Responsive layout
- **GSAP** - Animations
- **Particles.js** - Background effects
- **AOS** - Scroll animations

## Getting Started 🚀

### Prerequisites

- Node.js 18+
- Angular CLI 17+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/angular_portfolio_premium.git
cd angular_portfolio_premium
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
ng serve
```

4. Open in browser:
```
http://localhost:4200
```

## Project Structure 📁

```
angular_portfolio_premium/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   ├── theme-toggle/
│   │   │   ├── particle-background/
│   │   │   ├── project-card/
│   │   │   ├── animated-section/
│   │   │   ├── stats-counter/
│   │   │   ├── skill-badge/
│   │   │   └── contact-form/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── projects/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── project-detail/
│   │   ├── services/
│   │   │   ├── theme.service.ts
│   │   │   ├── github.service.ts
│   │   │   └── aos.service.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── material.module.ts
│   │   └── shared.module.ts
│   ├── assets/
│   │   ├── images/
│   │   └── data/
│   ├── environments/
│   ├── styles.scss
│   ├── main.ts
│   └── index.html
├── angular.json
├── tsconfig.json
├── package.json
└── README.md
```

## Deployment 📦

### Build for Production

```bash
ng build --prod
```

### Deploy to GitHub Pages

1. Build with base href:
```bash
ng build --base-href="https://yourusername.github.io/angular_portfolio_premium/"
```

2. Deploy the `dist` folder to GitHub Pages

## Customization 🎨

### Colors
Edit CSS variables in `src/styles.scss` to change the color scheme.

### Projects
Update projects in `src/assets/data/projects.json` or through GitHub API.

### Theme
Modify theme service in `src/app/services/theme.service.ts` to change default theme behavior.

## Performance ⚡

- Lazy loading modules for faster initial load
- Service worker for offline capabilities
- Optimized assets and lazy-loaded images
- Angular's change detection optimization

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

Moe Kyaw Aung - [@dev_moekyawaung](https://github.com/Dev-moekyawaung)

Project Link: [https://github.com/yourusername/angular_portfolio_premium](https://github.com/yourusername/angular_portfolio_premium)
```

---

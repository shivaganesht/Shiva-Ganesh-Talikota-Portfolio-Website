# 🚀 Shiva Ganesh Talikota - Portfolio Website

A modern, interactive portfolio showcasing expertise in AI/ML, full-stack development, and entrepreneurship. Built with cutting-edge web technologies and featuring stunning glass morphism design.

## 🌟 Live Demo

**Portfolio URL**: [shivaganesht.in](https://shivaganesht.in)
**GitHub Profile**: [github.com/shivaganesht](https://github.com/shivaganesht)

## 👨‍💻 About

**Shiva Ganesh Talikota** - Passionate technologist and entrepreneur from Hyderabad, India  
🎓 **Computer Science Engineering** at KPRIT • Research in AI/ML  
🏢 **Founder & CEO** of **matriXO** - Building innovative solutions that bridge the gap between academic learning and industry requirements

## ✨ Key Features

### 🎨 **Modern Design**
- **Borderless Glass Morphism**: Elegant, transparent UI with no unwanted borders
- **Liquid Animations**: Smooth, fluid transitions and hover effects
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Perfect experience across all devices and screen sizes

### 🎯 **Interactive Elements**
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Easter Eggs**: Hidden Matrix mode, digital rain effects, and color storm animations
- **Scroll Animations**: Framer Motion powered smooth reveals and transitions
- **Social Media Integration**: Direct links to GitHub, LinkedIn, and email

### 🛠️ **Technical Excellence**
- **TypeScript**: Full type safety and better developer experience
- **Modern React**: Hooks, functional components, and latest React patterns
- **Performance Optimized**: Fast loading times with Vite build system
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🔧 Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern component-based UI library
- **TypeScript** - Type-safe JavaScript development
- **Vite 5.4.19** - Lightning-fast development server and build tool

### **Styling & Design**
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - Beautiful, accessible component library
- **Custom CSS** - Advanced glass morphism and liquid animation effects
- **Responsive Design** - Mobile-first approach with breakpoint optimization

### **Animation & Interactions**
- **Framer Motion** - Production-ready motion library for React
- **CSS Animations** - Custom keyframe animations for special effects
- **Intersection Observer** - Scroll-based animations and lazy loading

### **Development Tools**
- **ESLint** - Code quality and consistency enforcement
- **PostCSS** - CSS processing with modern features
- **Bun** - Fast package manager and JavaScript runtime

### **UI Components**
```
📦 Component Library
├── 🎯 Hero Section - Landing with animated text and social links
├── 👤 About Section - Profile, education, and tech stack
├── 🚀 Projects Section - Showcase of development work
├── 📚 Learning Section - Current learning path and certifications
├── 📞 Contact Section - Professional contact information
├── 🧩 Navigation - Responsive nav with easter eggs
└── 🎨 UI Components - Reusable shadcn/ui elements
```

## 🎨 Design System

### **Color Palette**
- **Primary**: `hsl(210 100% 60%)` - Vibrant blue for accents and CTAs
- **Background**: `hsl(220 13% 4%)` - Deep dark for elegant contrast
- **Surface**: Glass morphism with dynamic opacity levels
- **Accent**: `hsl(195 100% 50%)` - Complementary cyan for highlights

### **Typography**
- **Primary Font**: Inter - Clean, modern sans-serif
- **Mono Font**: JetBrains Mono - Developer-friendly monospace
- **Font Weights**: 300, 400, 500, 600, 700

### **Glass Morphism Effects**
- **Blur Levels**: 10px, 60px, 80px backdrop filters
- **Opacity Ranges**: 0.05-0.15 for subtle transparency
- **Shadow System**: Multi-layered shadows for depth
- **Border Removal**: Complete elimination of unwanted borders

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or bun package manager
- Git for version control

### **Installation**

```bash
# Clone the repository
git clone https://github.com/shivaganesht/shiva-portfolio-website-lovable.git

# Navigate to project directory
cd shiva-portfolio-website-lovable

# Install dependencies
npm install
# or with bun
bun install

# Start development server
npm run dev
# or with bun
bun dev

# Open browser and visit
http://localhost:8080
```

### **Available Scripts**

```json
{
  "dev": "vite --port 8080",           // Start development server
  "build": "tsc -b && vite build",      // Build for production  
  "lint": "eslint .",                   // Run code linting
  "preview": "vite preview"             // Preview production build
}
```

## 📁 Project Structure

```
shiva-portfolio-website-lovable/
├── 📄 index.html                 # Entry HTML file
├── 📦 package.json              # Dependencies and scripts
├── ⚙️ vite.config.ts           # Vite configuration
├── 🎨 tailwind.config.ts       # Tailwind CSS configuration
├── 📝 tsconfig.json            # TypeScript configuration
├── 🧹 eslint.config.js         # ESLint rules
├── 🎯 components.json          # shadcn/ui configuration
├── 📂 public/                   # Static assets
│   ├── favicon.ico
│   └── robots.txt
└── 📂 src/                      # Source code
    ├── 🎯 App.tsx              # Main application component
    ├── 🚀 main.tsx             # Application entry point
    ├── 🎨 index.css            # Global styles and design system
    ├── 📂 components/           # React components
    │   ├── Hero.tsx            # Landing section
    │   ├── About.tsx           # About section  
    │   ├── Projects.tsx        # Projects showcase
    │   ├── Learning.tsx        # Learning & skills
    │   ├── Contact.tsx         # Contact information
    │   ├── Navigation.tsx      # Navigation with easter eggs
    │   ├── LiquidBlob.tsx      # Animated background element
    │   └── 📂 ui/              # Reusable UI components
    ├── 📂 hooks/               # Custom React hooks
    ├── 📂 lib/                 # Utility functions
    ├── 📂 pages/               # Page components
    └── 📂 assets/              # Images and media
```

## 🎮 Easter Eggs

Discover hidden interactive features throughout the portfolio:

### **Matrix Mode** 🕶️
- **Trigger**: Click the mysterious button in navigation
- **Effect**: Transform entire site with green matrix aesthetic
- **Duration**: 10 seconds of digital rain and glitch effects

### **Digital Rain** 🌧️
- **Trigger**: Mobile menu easter egg button
- **Effect**: Full-screen matrix rain animation
- **Features**: Dynamic character generation with color variations

### **Color Storm** 🌈
- **Trigger**: Click brand name in navigation
- **Effect**: Explosive color animations across the entire viewport
- **Animation**: Particle system with rainbow color cycling

## 🔧 Development Features

### **Hot Module Replacement (HMR)**
- Instant updates during development
- Component state preservation
- Fast refresh for optimal developer experience

### **TypeScript Integration**
- Full type coverage across all components
- Strict type checking for better code quality
- IntelliSense support for enhanced development

### **Responsive Breakpoints**
```css
sm:  640px   /* Small devices */
md:  768px   /* Medium devices */ 
lg:  1024px  /* Large devices */
xl:  1280px  /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### **Performance Optimizations**
- Code splitting with dynamic imports
- Optimized asset loading
- Minimal bundle size with tree shaking
- Efficient re-renders with React optimizations

## 📱 Browser Support

- ✅ **Chrome** 90+ (recommended)
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact & Social

- **Email**: [shivaganesh@matrixo.com](mailto:shivaganesh@matrixo.com)
- **GitHub**: [github.com/shivaganesht](https://github.com/shivaganesht)
- **LinkedIn**: [linkedin.com/in/shivaganesht](https://linkedin.com/in/shivaganesht)
- **Company**: [matriXO](https://matrixo.com) - Transforming education through AI

---

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Framer Motion** for smooth animations
- **Tailwind CSS** for rapid styling
- **Vite** for lightning-fast development experience
- **Lovable.dev** for the initial project setup and development platform

---

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e87a6f18-377f-4cd7-a7cb-2f5eac669768

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e87a6f18-377f-4cd7-a7cb-2f5eac669768) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e87a6f18-377f-4cd7-a7cb-2f5eac669768) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

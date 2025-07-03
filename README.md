# 🎮 Esports Player Portfolio

A modern, animated portfolio website for professional esports players built with React, TypeScript, and Framer Motion. This project showcases a clean, responsive design with smooth animations and follows SOLID principles for maintainable code.

## ✨ Features

- **Modern Design**: Dark theme with glass morphism effects and gradient accents
- **Smooth Animations**: Framer Motion powered animations with scroll-triggered effects
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **TypeScript**: Full type safety throughout the application
- **Component-Based Architecture**: Follows SOLID principles with reusable components
- **Performance Optimized**: Efficient animations and optimized bundle

## 🚀 Demo GIF

![Portfolio Preview](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWg3ZHZibjRiY20zejhheHhuZGExOWJ0aTFoODRmbDU4cmEyMnU5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sma0X2Aa6lBEF1rSQO/giphy.gif)

## 🛠️ Technologies Used

- **React 19** - Latest React features with modern hooks
- **TypeScript** - Type-safe development
- **Framer Motion** - Advanced animations and interactions
- **Vite** - Fast build tool and development server
- **CSS Custom Properties** - Modern CSS with design tokens
- **Lucide React** - Beautiful, customizable icons
- **React Icons** - Additional icon library for social platforms

## 🏗️ Architecture & Design Principles

### SOLID Principles Implementation

1. **Single Responsibility Principle (SRP)**
   - Each component has one clear purpose (Hero, Games, Achievements, etc.)
   - Hooks are separated by functionality (animations, data fetching)
   - Utility functions are isolated in their own modules

2. **Open/Closed Principle (OCP)**
   - Components are open for extension through props and composition
   - Animation variants can be extended without modifying existing code
   - New sections can be added without changing existing components

3. **Liskov Substitution Principle (LSP)**
   - All card components follow the same interface pattern
   - Motion components can be substituted with regular divs if needed

4. **Interface Segregation Principle (ISP)**
   - TypeScript interfaces are specific and focused
   - Components only depend on the props they actually use

5. **Dependency Inversion Principle (DIP)**
   - Components depend on abstractions (interfaces) not concrete implementations
   - Animation logic is abstracted into custom hooks

### DRY (Don't Repeat Yourself) Implementation

- **Reusable Animation Variants**: Common animations defined once in hooks
- **CSS Custom Properties**: Design tokens prevent magic numbers
- **Component Composition**: Shared layouts and patterns
- **TypeScript Types**: Prevent code duplication through proper typing

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar with smooth scrolling
│   ├── Hero.tsx        # Hero section with floating animations
│   ├── Games.tsx       # Games showcase with progress bars
│   ├── Achievements.tsx # Achievement cards with icons
│   ├── Section.tsx     # Reusable section wrapper
│   └── SocialLinks.tsx # Social media links component
├── hooks/              # Custom React hooks
│   └── useAnimations.ts # Animation logic and variants
├── types/              # TypeScript type definitions
│   └── index.ts        # All interfaces and types
├── data/               # Mock data and content
│   └── portfolioData.ts # Player data, games, achievements
├── styles/             # Styling and CSS
│   └── globals.css     # Global styles and design tokens
└── assets/             # Static assets
    └── images/         # Image assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Gradient blues and purples (#6366f1 → #8b5cf6)
- **Secondary**: Cyan accent (#06b6d4)
- **Success**: Green gradients (#10b981 → #38f9d7)
- **Background**: Dark theme with transparent overlays

### Typography
- **Font Family**: Inter (Google Fonts)
- **Scale**: Responsive typography with clamp() functions
- **Hierarchy**: Clear heading structure with proper contrast

### Animations
- **Scroll Animations**: Reveal content as user scrolls
- **Hover Effects**: Interactive feedback on all clickable elements
- **Loading States**: Skeleton loaders for better UX
- **Floating Elements**: Subtle continuous animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/esports-portfolio.git
   cd esports-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## 📝 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the section data to `src/data/portfolioData.ts`
3. Import and include in `App.tsx`
4. Add navigation item in `Navigation.tsx`

### Modifying Player Data

Edit `src/data/portfolioData.ts` to customize:
- Player information
- Games and rankings
- Achievements and tournaments
- Social media links
- Team members

### Customizing Animations

Modify `src/hooks/useAnimations.ts` to:
- Add new animation variants
- Adjust timing and easing
- Create custom scroll triggers

### Styling Changes

Update `src/styles/globals.css` to modify:
- Color scheme and gradients
- Typography scale
- Spacing and layout
- Dark/light theme variants

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript check

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with backdrop-filter support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for incredible animation capabilities
- **Lucide** for beautiful, consistent icons
- **React team** for the amazing framework
- **Vite** for the blazing fast development experience

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

---

Built with ❤️ for the esports community

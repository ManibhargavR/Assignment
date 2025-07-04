# Altibbe Website - XDC.org Design Replica

A modern, responsive website built with React + Vite that replicates the design and functionality of XDC.org with Altibbe branding and content.

## 🚀 Project Overview

This project successfully recreates the visual design, layout, animations, and user experience of XDC.org while using placeholder content that can be easily replaced with actual Altibbe content. The website features:

- **Exact XDC.org Layout Structure**: Hero section, service cards, features grid, news section, and comprehensive footer
- **Matching Visual Design**: Color schemes, typography, spacing, and visual hierarchy
- **Identical Animations**: Smooth scroll effects, hover animations, fade-in transitions, and interactive elements
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern Performance**: Built with React + Vite for optimal loading and performance

## 🎨 Design Features Replicated from XDC.org

### Header & Navigation
- ✅ Sticky header with blur effect on scroll
- ✅ Responsive navigation with mobile hamburger menu
- ✅ Smooth hover effects and active states
- ✅ Brand logo with gradient styling

### Hero Section
- ✅ Full-screen hero with animated background
- ✅ Gradient overlays and floating animations
- ✅ Large typography with highlighted text
- ✅ Call-to-action buttons with hover effects
- ✅ Animated scroll indicator

### Content Sections
- ✅ Service cards with hover animations and icons
- ✅ Feature grid with consistent styling
- ✅ Statistics section with animated counters
- ✅ "Powered by" section with client showcase
- ✅ News/blog section with category tags

### Footer
- ✅ Multi-column layout with comprehensive links
- ✅ Brand identity and legal information
- ✅ Social media integration ready

## 🛠️ Tech Stack

- **React 18** - Component-based UI framework
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with animations and responsive design
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd altibbe-website
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
   - Navigate to `http://localhost:5173`
   - The website will automatically reload when you make changes

## 🎯 Content Replacement Guide

The website is built with placeholder content that can be easily replaced with actual Altibbe content:

### 1. Company Information
**File**: `src/AltibbeSite.jsx`

Replace placeholder content in these sections:
- Hero title and subtitle
- About section text and statistics
- Service descriptions and icons
- Feature descriptions
- News items and company updates

### 2. Navigation & Links
Update the navigation items array:
```javascript
const navigationItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  // Add actual Altibbe pages here
];
```

### 3. Services & Solutions
Replace the services array with actual Altibbe offerings:
```javascript
const services = [
  {
    title: 'Your Service Name',
    description: 'Your service description',
    icon: '🏢' // Replace with appropriate icons
  }
];
```

### 4. Visual Assets
- Replace placeholder icons with actual Altibbe assets
- Add company logos and images
- Update favicon and meta tags in `index.html`

### 5. Contact Information
Update footer contact details and social media links

## 🎨 Styling & Customization

### Color Scheme
The design uses a modern gradient color scheme. To update colors, modify these CSS custom properties in `src/AltibbeSite.css`:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Secondary colors */
color: #2d3748; /* Dark text */
color: #718096; /* Secondary text */
background: #f8fafc; /* Light background */
```

### Typography
The website uses the Inter font family. Update font styles in the CSS file as needed.

### Animations
All animations are CSS-based and can be customized by modifying the keyframe animations in the CSS file.

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use the `gh-pages` package (already installed)
- **Any static hosting**: Upload the `dist` folder contents

## 📋 Project Structure

```
altibbe-website/
├── src/
│   ├── AltibbeSite.jsx      # Main component with all sections
│   ├── AltibbeSite.css      # Comprehensive styling
│   ├── App.jsx              # Root app component
│   ├── App.css              # Minimal app styles
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── public/
│   └── vite.svg             # Favicon (replace with Altibbe logo)
├── index.html               # HTML template with meta tags
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🎯 Key Features Implemented

- [x] Sticky navigation with scroll effects
- [x] Animated hero section with gradients
- [x] Service cards with hover animations
- [x] Responsive grid layouts
- [x] News/blog section with categories
- [x] Smooth scroll behavior
- [x] Mobile hamburger menu
- [x] Loading and hover states
- [x] SEO-optimized meta tags
- [x] Accessibility considerations

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📈 Next Steps

1. **Replace Content**: Update all placeholder content with actual Altibbe information
2. **Add Assets**: Include company logos, images, and icons
3. **SEO Optimization**: Update meta tags with actual company information
4. **Analytics**: Add Google Analytics or other tracking
5. **Contact Forms**: Implement functional contact forms
6. **Backend Integration**: Connect to CMS or backend services if needed

## 🤝 Contributing

When updating content:
1. Keep the existing design structure
2. Maintain responsive behavior
3. Test on all device sizes
4. Ensure animations continue to work smoothly

## 📄 License

This project replicates the design of XDC.org for educational/business purposes. Ensure you have proper rights to use any content or assets you add.

---

**Development Server Running**: The website is currently running at `http://localhost:5173`

**Status**: ✅ Successfully replicates XDC.org design structure with Altibbe branding ready for content replacement

# GenAI Interview Prep - Homepage

A modern, responsive, and professionally designed landing page for the GenAI Interview Prep platform.

## 📁 Folder Structure

```
Homepage/
├── home.jsx                    # Main homepage component
├── components/                 # Individual section components
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── FeaturedIn.jsx
│   ├── HowItWorks.jsx
│   ├── KeyFeatures.jsx
│   ├── Testimonials.jsx
│   ├── Statistics.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   ├── CTASection.jsx
│   └── Footer.jsx
├── styles/                     # SCSS stylesheets
│   ├── home.scss              # Global styles & variables
│   ├── navbar.scss
│   ├── hero.scss
│   ├── featured-in.scss
│   ├── how-it-works.scss
│   ├── features.scss
│   ├── testimonials.scss
│   ├── statistics.scss
│   ├── pricing.scss
│   ├── faq.scss
│   ├── cta-section.scss
│   └── footer.scss
└── README.md                   # This file
```

## 🎨 Components Overview

### 1. **Navbar** (`components/Navbar.jsx`)
- Fixed sticky navigation bar
- Logo and brand name
- Responsive hamburger menu for mobile
- Navigation links
- Login and CTA buttons
- Mobile-friendly with smooth animations

### 2. **Hero Section** (`components/HeroSection.jsx`)
- Eye-catching headline with accent color
- Descriptive subtitle
- Dual CTA buttons (Primary + Secondary)
- Trust badges showing social proof
- Animated floating cards with illustrations
- Responsive background shapes

### 3. **Featured In** (`components/FeaturedIn.jsx`)
- Displays trusted companies/publications
- Grid layout with company logos
- Hover effects for interactivity
- Responsive to different screen sizes

### 4. **How It Works** (`components/HowItWorks.jsx`)
- 4-step process visualization
- Numbered cards with icons
- Step connectors on desktop (hidden on mobile)
- Smooth animations on hover
- Clear descriptions for each step

### 5. **Key Features** (`components/KeyFeatures.jsx`)
- 6 feature cards in grid layout
- Color-coded cards (blue, pink, purple, green, orange, cyan)
- Icons and descriptions
- Hover animations with shadow effects
- Responsive grid (auto-fit)

### 6. **Testimonials** (`components/Testimonials.jsx`)
- Carousel with 4 success stories
- Star ratings for each testimonial
- User avatars and company badges
- Navigation controls (prev/next buttons and dots)
- Smooth slide transitions
- Interactive carousel management with React state

### 7. **Statistics** (`components/Statistics.jsx`)
- 4 key metrics displayed
- Animated counter animations using React hooks
- Gradient background with floating elements
- Responsive grid layout
- Icons for each statistic

### 8. **Pricing** (`components/Pricing.jsx`)
- 3 pricing tiers (Free, Professional, Enterprise)
- Monthly/Annual billing toggle
- Highlighted "Best Value" card
- Feature lists with checkmarks/X marks
- Responsive pricing cards
- Call-to-action buttons for each tier

### 9. **FAQ** (`components/FAQ.jsx`)
- Expandable accordion-style questions
- 6 common questions pre-filled
- Smooth open/close animations
- State management for expanded items
- Responsive layout

### 10. **CTA Section** (`components/CTASection.jsx`)
- Large attention-grabbing gradient background
- Headline and subheadline
- Primary CTA button
- Supporting text
- Floating background animations

### 11. **Footer** (`components/Footer.jsx`)
- 4-column layout for desktop
- Brand info with social links
- Product links
- Resource links
- Company links
- Bottom copyright bar
- Fully responsive

## 🎯 Features

### Design Features
- ✅ Modern, professional dark theme
- ✅ Gradient accents (pink & blue)
- ✅ Smooth animations and transitions
- ✅ Glassmorphism effects
- ✅ Responsive design (mobile-first)
- ✅ Accessibility focused
- ✅ High contrast text
- ✅ Clean typography hierarchy

### Interactive Features
- ✅ Sticky navbar with active states
- ✅ Animated hero section
- ✅ Testimonial carousel
- ✅ FAQ accordion
- ✅ Billing cycle toggle
- ✅ Hover effects on all interactive elements
- ✅ Smooth scrolling navigation
- ✅ Counter animations on statistics

### Performance Features
- ✅ Modular component structure
- ✅ SCSS variables for consistent styling
- ✅ Optimized animations
- ✅ Lazy loading ready
- ✅ Mobile-optimized
- ✅ Fast load times

## 📱 Responsive Breakpoints

- **Desktop**: 1025px and above
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

Each component is fully responsive with optimized layouts for each breakpoint.

## 🎨 Color Palette

```scss
$dark-bg: #111922;
$darker-bg: #0a0f18;
$accent-pink: #ff4d7d;
$accent-blue: #4da3ff;
$text-light: #edf3f9;
$text-muted: #a9b0ba;
$border-light: rgba(255, 255, 255, 0.08);
```

## 🚀 How to Use

### Import Homepage
```jsx
import Homepage from './Homepage/home';

function App() {
    return <Homepage />;
}
```

### Customize Components
Each component is independent and can be customized:

```jsx
// Example: Update Hero Section CTA
// Edit HeroSection.jsx - modify button text, links, etc.
```

### Add Routes
To integrate with your router:

```jsx
import Homepage from './Homepage/home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    }
]);
```

## 🎬 Animations

- **Fade In Up**: Components fade in with upward movement
- **Slide In Right**: Hero section slides in from right
- **Float**: Cards hover with floating animation
- **Glow**: Hover effects with color glows
- **Slide Down**: FAQ answers slide down smoothly
- **Rotate**: Background shapes rotate slowly

## 📦 Dependencies

- React (hooks: useState, useEffect)
- SCSS/SASS (for styling)
- No additional UI libraries required

## 🔧 Customization Guide

### Update Colors
1. Edit `styles/home.scss` - Change SCSS variables
2. All components will inherit the new colors

### Modify Content
1. Each component file contains all content
2. Update text, images, links as needed
3. Content is separated from styling

### Add More Features
1. Create new component in `components/` folder
2. Create corresponding SCSS in `styles/` folder
3. Import and add to `home.jsx`

## ✨ Best Practices

1. **Component Modular**: Each section is a standalone component
2. **Style Isolation**: Each component has its own SCSS file
3. **Responsive First**: Mobile styles are priority
4. **Accessible**: Proper semantic HTML and contrast ratios
5. **Performance**: Optimized animations and animations
6. **Maintainable**: Clear naming and organization

## 📝 Notes

- All components follow React functional component patterns
- SCSS is organized with variables for consistency
- Animations are smooth and don't impact performance
- Mobile menu auto-closes on link click (can be enhanced)
- Testimonials carousel can be extended with more items
- Statistics counters auto-animate on scroll (can be enhanced with IntersectionObserver)

## 🚀 Future Enhancements

- [ ] Add IntersectionObserver for scroll-triggered animations
- [ ] Connect to actual API for testimonials and pricing
- [ ] Add newsletter subscription form
- [ ] Add contact form
- [ ] Add blog section
- [ ] Add dark/light theme toggle
- [ ] Add multilingual support
- [ ] Add SEO optimization

---

**Build Professional**: Follow the 4-layer React architecture pattern for maintaining scalability!

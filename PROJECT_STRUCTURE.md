# 📁 Complete Project Structure & Build Guide

## 🏗️ How This Project Was Built (Step by Step)

### Step 1: Project Initialization
The project started with a standard Vite + React + TypeScript template with:
- Tailwind CSS for styling
- shadcn/ui for UI components
- React Router for navigation

### Step 2: Dependencies Added
```bash
# 3D Graphics
npm install @react-three/fiber@^8.18.0
npm install @react-three/drei@^9.122.0
npm install three@^0.160.0
npm install @types/three@^0.160.0

# Animations
npm install framer-motion@^11.0.0

# Email Service
npm install @emailjs/browser@^4.0.0
```

### Step 3: Design System Setup
Created a cohesive design system in `src/index.css` and `tailwind.config.ts`:
- Neon cyan (#00f5ff) and green (#00ff88) color palette
- Custom fonts: Orbitron (display), Rajdhani (body)
- Glassmorphism effects
- Animation keyframes

### Step 4: Component Development Order
1. **ParticleBackground.tsx** - 3D scene with particles and floating geometry
2. **CustomCursor.tsx** - Magnetic cursor effects
3. **Navbar.tsx** - Navigation with theme toggle
4. **HeroSection.tsx** - Typing animation, CTA buttons
5. **AboutSection.tsx** - Personal info with flip animation
6. **SkillsSection.tsx** - Interactive skill cards
7. **ProjectsSection.tsx** - Expandable project cards
8. **CertificatesSection.tsx** - Certificates & achievements timeline
9. **EducationSection.tsx** - Education history cards
10. **ContactSection.tsx** - EmailJS integrated contact form
11. **Footer.tsx** - Footer with social links

### Step 5: Assembly
Combined all components in `src/pages/Index.tsx` with:
- Theme state management (dark/light mode)
- Proper component ordering
- Toaster for notifications

---

## 📂 Complete File Structure

```
akash-portfolio/
│
├── 📁 public/
│   ├── favicon.ico              # Website icon
│   ├── placeholder.svg          # Default placeholder image
│   ├── resume.pdf               # Your resume (replace this!)
│   └── robots.txt               # SEO robots configuration
│
├── 📁 src/
│   │
│   ├── 📁 assets/               # Images and media files
│   │   └── (add your images here)
│   │
│   ├── 📁 components/           # React Components
│   │   │
│   │   ├── 📁 ui/               # shadcn/ui components (pre-built)
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx       # ⭐ Customized with neon variants
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── sonner.tsx       # Toast notifications
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── use-toast.ts
│   │   │
│   │   ├── AboutSection.tsx     # ⭐ About Me section
│   │   │   └── Features: Flip animation, highlight cards
│   │   │
│   │   ├── CertificatesSection.tsx  # ⭐ Certificates & Achievements
│   │   │   └── Features: Badge icons, animated timeline
│   │   │
│   │   ├── ContactSection.tsx   # ⭐ Contact form with EmailJS
│   │   │   └── Features: Form validation, direct email sending
│   │   │
│   │   ├── CustomCursor.tsx     # ⭐ Magnetic cursor effect
│   │   │   └── Features: Hover detection, trailing effect
│   │   │
│   │   ├── EducationSection.tsx # ⭐ Education timeline
│   │   │   └── Features: Layered cards, current status indicator
│   │   │
│   │   ├── Footer.tsx           # ⭐ Footer with social links
│   │   │
│   │   ├── HeroSection.tsx      # ⭐ Hero/Landing section
│   │   │   └── Features: Typing animation, 3D avatar rings
│   │   │
│   │   ├── Navbar.tsx           # ⭐ Navigation bar
│   │   │   └── Features: Theme toggle, mobile menu
│   │   │
│   │   ├── NavLink.tsx          # React Router NavLink wrapper
│   │   │
│   │   ├── ParticleBackground.tsx  # ⭐ 3D Background
│   │   │   └── Features: Particles, floating geometry
│   │   │
│   │   ├── ProjectsSection.tsx  # ⭐ Projects showcase
│   │   │   └── Features: Expandable cards, tech badges
│   │   │
│   │   └── SkillsSection.tsx    # ⭐ Skills display
│   │       └── Features: Interactive cards, tooltips
│   │
│   ├── 📁 hooks/                # Custom React hooks
│   │   ├── use-mobile.tsx       # Mobile detection hook
│   │   └── use-toast.ts         # Toast notifications hook
│   │
│   ├── 📁 lib/                  # Utility functions
│   │   └── utils.ts             # cn() classname merger
│   │
│   ├── 📁 pages/                # Page components
│   │   ├── Index.tsx            # ⭐ Main portfolio page
│   │   └── NotFound.tsx         # 404 error page
│   │
│   ├── App.css                  # Global CSS overrides
│   ├── App.tsx                  # Root app component with routing
│   ├── index.css                # ⭐ Design system (colors, fonts)
│   ├── main.tsx                 # React entry point
│   └── vite-env.d.ts            # Vite type definitions
│
├── 📄 Configuration Files
│   ├── .gitignore               # Git ignore rules
│   ├── components.json          # shadcn/ui configuration
│   ├── eslint.config.js         # ESLint rules
│   ├── index.html               # HTML template with meta tags
│   ├── package.json             # Dependencies and scripts
│   ├── postcss.config.js        # PostCSS configuration
│   ├── tailwind.config.ts       # ⭐ Tailwind + custom theme
│   ├── tsconfig.json            # TypeScript configuration
│   ├── tsconfig.app.json        # App TypeScript config
│   ├── tsconfig.node.json       # Node TypeScript config
│   └── vite.config.ts           # Vite build configuration
│
├── 📄 Documentation
│   ├── README.md                # Project overview
│   └── PROJECT_STRUCTURE.md     # This file!
│
└── 📄 Generated Files (don't edit)
    ├── bun.lockb                # Bun lock file
    └── package-lock.json        # NPM lock file
```

---

## 🎨 Key Files Explained

### 1. `src/index.css` - Design System
```css
/* All colors, gradients, fonts defined here */
:root {
  --primary: 180 100% 50%;        /* Neon Cyan */
  --secondary: 150 100% 50%;      /* Neon Green */
  --background: 220 20% 4%;       /* Dark background */
  /* ... more tokens */
}
```

### 2. `tailwind.config.ts` - Extended Theme
```typescript
/* Custom fonts, animations, keyframes */
fontFamily: {
  display: ["Orbitron", "sans-serif"],
  body: ["Rajdhani", "sans-serif"],
}
```

### 3. `src/components/ParticleBackground.tsx` - 3D Scene
```typescript
/* Three.js scene with:
   - 800 floating particles
   - Rotating torus
   - Floating icosahedron
   - Rotating octahedron
*/
```

### 4. `src/components/ContactSection.tsx` - EmailJS Integration
```typescript
/* Configure these constants:
   - EMAILJS_SERVICE_ID
   - EMAILJS_TEMPLATE_ID  
   - EMAILJS_PUBLIC_KEY
*/
```

---

## 📧 EmailJS Setup Instructions

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account

### Step 2: Add Email Service
1. Go to "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" tab
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New Portfolio Message: {{subject}}
```

**Content:**
```html
<h2>New message from your portfolio!</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><small>Sent from your portfolio contact form</small></p>
```

4. Copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

### Step 5: Update Code
Open `src/components/ContactSection.tsx` and replace:
```typescript
const EMAILJS_SERVICE_ID = 'service_abc123';     // Your service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789';   // Your template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key';    // Your public key
```

---

## 🚀 How to Run the Project

### Development Mode
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:8080
```

### Production Build
```bash
# Create optimized build
npm run build

# Preview production build
npm run preview

# Output folder: dist/
```

### Deploy
```bash
# Option 1: Lovable (Recommended)
# Click "Publish" button in Lovable

# Option 2: Vercel
npx vercel

# Option 3: Netlify
# Drag dist/ folder to netlify.com

# Option 4: GitHub Pages
npm run build
# Push dist/ to gh-pages branch
```

---

## ✏️ How to Customize

### Change Personal Info
| What to Change | File Location |
|----------------|---------------|
| Name & Title | `src/components/HeroSection.tsx` |
| About Me Text | `src/components/AboutSection.tsx` |
| Skills List | `src/components/SkillsSection.tsx` |
| Projects | `src/components/ProjectsSection.tsx` |
| Certificates | `src/components/CertificatesSection.tsx` |
| Education | `src/components/EducationSection.tsx` |
| Contact Info | `src/components/ContactSection.tsx` |
| Social Links | `HeroSection.tsx` & `Footer.tsx` |

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary: 180 100% 50%;    /* Change to your color */
  --secondary: 150 100% 50%;  /* Change to your color */
}
```

### Change Fonts
Edit `src/index.css` (Google Fonts import) and `tailwind.config.ts`

### Add New Sections
1. Create component in `src/components/`
2. Import in `src/pages/Index.tsx`
3. Add to JSX and navigation

---

## 📊 Performance Tips

1. **Images**: Use WebP format, compress before adding
2. **3D Scene**: Reduce particle count if slow
3. **Animations**: Disable on mobile if needed
4. **Fonts**: Already optimized with Google Fonts display swap

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| 3D not loading | Check Three.js console errors |
| Animations laggy | Reduce particle count in ParticleBackground |
| EmailJS not working | Verify all 3 IDs are correct |
| Build fails | Check for TypeScript errors |
| Fonts not loading | Check internet connection |

---

**Built with using React, Three.js, and Framer Motion**

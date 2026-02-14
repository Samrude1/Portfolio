# 🎨 AI Engineer Portfolio - Frontend

> **Modern, immersive portfolio** showcasing AI engineering expertise through interactive 3D visuals, autonomous agent integration, and premium design aesthetics.

[![Live Demo](https://img.shields.io/badge/Live-samirautanen.fi-blue)](https://samirautanen.fi)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black)](https://threejs.org/)

---

## 📖 Overview

This is the **frontend** of my AI engineering portfolio—a Next.js 15 application featuring an interactive 3D neural network visualization, integrated autonomous AI agent, and premium design system. Built to showcase technical expertise while providing an engaging, professional user experience.

**Live at:** [samirautanen.fi](https://samirautanen.fi)

### What Makes This Special

- ✅ **3D Neural Network** - Animated Three.js/React Three Fiber visualization representing AI cognition
- ✅ **Autonomous AI Agent** - Live chatbot powered by backend Gemini 2.0 Flash agent with tool calling
- ✅ **Premium Design System** - Custom CSS token architecture with glassmorphism and smooth theme transitions
- ✅ **Production-Ready** - Deployed on Vercel with health checks, retry logic, and error handling
- ✅ **Fully Responsive** - Mobile-first design with adaptive layouts and touch interactions
- ✅ **Performance Optimized** - Next.js 15 app router, code splitting, optimized assets

---

## ✨ Key Features

### 🎭 Interactive 3D Background
- **Neural network visualization** using Three.js and React Three Fiber
- **Animated nodes** with individual pulsing, floating, and rotation
- **Dynamic connections** between network layers
- **Theme-aware colors** that adapt to light/dark mode
- **Seeded random generation** for consistent, deterministic layout
- **Performance optimized** with instanced meshes

### 🤖 Integrated AI Agent
- **Live chatbot** connected to FastAPI backend
- **Health check system** detects backend cold starts (Render free tier)
- **Automatic retry logic** with exponential backoff
- **User-friendly status messages** during backend wake-up
- **Markdown rendering** with syntax highlighting
- **Conversation history** maintained across messages
- **Rate limit awareness** (5 msg/min, 50 msg/day)

### 🎨 Premium Design System
- **Custom CSS token architecture** with HSL color system
- **Light/Dark theme** with smooth transitions
- **Glassmorphism effects** with backdrop blur
- **Professional blue palette** (#0066CC primary)
- **Three font families:**
  - Outfit (headings)
  - Inter (body)
  - Space Grotesk (mono/technical)
- **Responsive typography** with fluid scaling
- **Alternating section backgrounds** for visual hierarchy

### 📱 Responsive Components
- **Hero** - Dynamic landing with animated text
- **Projects** - 10 project cards with hover effects and live demos
- **Skills** - Technical expertise showcase
- **About** - Professional background and experience
- **Contact** - Email and social links
- **Navbar** - Smooth scroll navigation with theme toggle
- **Footer** - Social links and copyright

### ⚡ Performance Features
- **Next.js 15 App Router** - Server components, streaming
- **Code splitting** - Automatic route-based splitting
- **Image optimization** - Next.js Image component
- **Font optimization** - Google Fonts with display swap
- **CSS optimization** - Tailwind v4 with JIT compilation

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Vercel Edge Network                     │
│                  https://samirautanen.fi                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Next.js 15 Frontend (App Router)               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Layout (app/layout.tsx)                             │  │
│  │  ├─ ThemeProvider (dark/light mode)                  │  │
│  │  ├─ Navbar (smooth scroll navigation)                │  │
│  │  ├─ ThreeScene (3D background)                       │  │
│  │  └─ ChatWidget (AI agent interface)                  │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Page (app/page.tsx)                                 │  │
│  │  ├─ Hero                                             │  │
│  │  ├─ Projects (10 showcase cards)                     │  │
│  │  ├─ Skills                                           │  │
│  │  ├─ About                                            │  │
│  │  └─ Contact                                          │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ POST /chat
                         │ GET /health
                         ▼
┌─────────────────────────────────────────────────────────────┐
│           FastAPI Backend (Render.com)                      │
│           Gemini 2.0 Flash Agent                            │
│           (See: Digital-Twin-AI repository)                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4, Custom CSS tokens |
| **3D Graphics** | Three.js, React Three Fiber, @react-three/drei |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Markdown** | react-markdown, remark-gfm |
| **Deployment** | Vercel |
| **Backend** | FastAPI (separate repo: Digital-Twin-AI) |

---

## 📁 Project Structure

```
portfolio-2026/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx             # Root layout with providers
│   │   ├── page.tsx               # Home page (Hero, Projects, Skills, About, Contact)
│   │   ├── globals.css            # Global styles, theme tokens
│   │   ├── sitemap.ts             # SEO sitemap
│   │   └── robots.ts              # SEO robots.txt
│   │
│   └── components/                 # React components
│       ├── Hero.tsx               # Landing section with animated text
│       ├── Projects.tsx           # 10 project showcase cards
│       ├── Skills.tsx             # Technical skills grid
│       ├── About.tsx              # Professional background
│       ├── Contact.tsx            # Email and social links
│       ├── Navbar.tsx             # Navigation with theme toggle
│       ├── Footer.tsx             # Footer with social links
│       ├── Section.tsx            # Reusable section wrapper
│       ├── ThreeScene.tsx         # 3D neural network background
│       ├── ChatWidget.tsx         # AI agent chat interface
│       ├── ThemeProvider.tsx      # Dark/light mode context
│       ├── ThemeToggle.tsx        # Theme switcher button
│       └── AmbientBackground.tsx  # Gradient background effects
│
├── public/                         # Static assets
│   ├── projects/                  # Project screenshots
│   ├── cv-sami-rautanen.html      # Resume/CV
│   └── ...
│
├── .env.local                      # Environment variables
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.ts              # Tailwind config
├── next.config.ts                  # Next.js config
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Samrude1/portfolio-2026.git
cd portfolio-2026
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create `.env.local`:
```bash
# Backend API URL (optional, defaults to localhost:8000)
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

4. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design System

### Color Tokens

**Dark Mode (Default):**
```css
--background: #121212
--foreground: #ededed
--primary: #0066CC
--secondary: #005AA3
--accent: #0088FF
--surface: rgba(255, 255, 255, 0.03)
--surface-hover: rgba(255, 255, 255, 0.08)
--border: rgba(255, 255, 255, 0.1)
```

**Light Mode:**
```css
--background: #F8FAFB
--foreground: #1a1a1a
--primary: #0052A3
--secondary: #003D7A
--accent: #0066CC
--surface: rgba(0, 82, 163, 0.06)
--surface-hover: rgba(0, 82, 163, 0.12)
--border: rgba(0, 82, 163, 0.2)
```

### Typography

- **Headings:** Outfit (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Mono:** Space Grotesk (Google Fonts)

### Glassmorphism

```css
.glass {
  background: var(--surface);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border);
}
```

---

## 🤖 ChatWidget Integration

The ChatWidget component integrates with the backend AI agent:

### Features
- **Health Check** - Pings `/health` endpoint before first message
- **Retry Logic** - Exponential backoff (1s, 2s, 4s, 8s, 10s)
- **Status Messages** - Shows "Waking up backend..." during cold start
- **Error Handling** - User-friendly messages for timeouts/failures
- **Markdown Support** - Renders formatted responses
- **Conversation History** - Maintains context across messages

### Backend Cold Start Handling

Render free tier sleeps after 15 minutes. ChatWidget handles this gracefully:

```typescript
// Health check with retry
const checkBackendHealth = async (retries = 3): Promise<boolean> => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(`${apiUrl}/health`, { timeout: 5000 });
      if (res.ok) return true;
    } catch (error) {
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
  return false;
};
```

**User sees:**
- "😴 My backend is sleeping... Please wait 30-60 seconds"
- "⏳ Waking up backend from sleep... (~30-60s)"
- Automatic retry when backend is ready

---

## 🎭 3D Neural Network

The `ThreeScene` component creates an animated neural network visualization:

### Technical Details
- **5 layers** with varying node counts (6, 10, 12, 10, 6)
- **Seeded random** for deterministic generation
- **Instanced meshes** for performance (44 nodes in single draw call)
- **Individual node animations:**
  - Pulsing (size variation)
  - Floating (Y-axis movement)
  - Depth movement (Z-axis)
- **Network rotation** - Continuous slow rotation
- **Theme-aware colors** - Adapts to light/dark mode
- **Optimized rendering** - 60 FPS on most devices

### Customization

Edit `ThreeScene.tsx`:
```typescript
const layers = [6, 10, 12, 10, 6]; // Change layer structure
const layerSpacing = 3.5;           // Adjust layer distance
const nodeSpacing = 1.1;            // Adjust node distance
```

---

## 📊 Projects Showcase

10 featured projects with:
- **Live demos** (where applicable)
- **GitHub links**
- **Technology tags**
- **Hover effects** with scale and shadow
- **Responsive grid** (1 col mobile, 2 col tablet, 3 col desktop)

Projects include:
1. Agentic Business Intelligence (Multi-agent systems)
2. Autonomous Career Digital Twin (This portfolio's AI agent)
3. SkyGuide B737-800 Performance Computer
4. NordicCode Bootcamp Finder
5. Yes Man Chess Terminal
6. TreeniTrack Pro
7. Poker Analytics Engine
8. Activity Finder
9. Indie Game Portfolio (8 games)
10. Technical Art & 3D

---

## 🔧 Configuration

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

### Next.js Config

```typescript
// next.config.ts
const nextConfig = {
  // Add custom config here
};
```

### Tailwind Config

```typescript
// tailwind.config.ts
// Uses Tailwind v4 with CSS-first configuration
// See src/app/globals.css for theme tokens
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import repository
   - Add environment variables
   - Deploy

3. **Custom Domain:**
   - Add domain in Vercel dashboard
   - Update DNS records
   - SSL automatically configured

### Environment Variables in Vercel

Add in Vercel dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_API_URL = https://your-backend.onrender.com
```

---

## 🧪 Testing

### Run Development Server
```bash
npm run dev
```

### Build Test
```bash
npm run build
```

### Lint
```bash
npm run lint
```

### Manual Testing Checklist
- [ ] Theme toggle (light/dark)
- [ ] 3D scene renders and animates
- [ ] ChatWidget connects to backend
- [ ] ChatWidget handles cold start gracefully
- [ ] All project links work
- [ ] Responsive on mobile/tablet/desktop
- [ ] Smooth scroll navigation
- [ ] Contact form/links work

---

## 🎯 Performance

### Lighthouse Scores (Target)
- **Performance:** 90+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimizations
- ✅ Next.js Image optimization
- ✅ Font optimization (Google Fonts with display swap)
- ✅ Code splitting (automatic route-based)
- ✅ CSS optimization (Tailwind JIT)
- ✅ Three.js instanced meshes (performance)
- ✅ Lazy loading (React.lazy for heavy components)

---

## 📚 Related Repositories

- **Backend:** [Digital-Twin-AI](https://github.com/Samrude1/Digital-Twin-AI) - FastAPI backend with Gemini 2.0 Flash agent
- **Projects:**
  - [Agentic Business Intelligence](https://github.com/Samrude1/Agentsquad)
  - [SkyGuide B737-800](https://github.com/Samrude1/Boeing737Calculator)
  - [NordicCode Bootcamp Finder](https://bootcampfinder.onrender.com/)
  - [More on GitHub](https://github.com/Samrude1)

---

## 🎯 Future Enhancements

- [ ] Add blog section with MDX support
- [ ] Implement project filtering/search
- [ ] Add more 3D visualizations (agent architecture diagrams)
- [ ] Integrate analytics (Vercel Analytics)
- [ ] Add A/B testing for design variations
- [ ] Implement i18n (Finnish/English)
- [ ] Add accessibility improvements (ARIA labels, keyboard nav)
- [ ] Optimize 3D scene for mobile (reduce complexity)

---

## 📄 License

This repository is part of my portfolio to demonstrate technical capabilities. The code is public for transparency, but:
- ✅ Feel free to learn from the architecture and implementation
- ❌ Please don't deploy this as your own portfolio
- 💬 For collaboration or business inquiries: samrude1@outlook.com

---

## 🤝 Connect

- **Portfolio:** [samirautanen.fi](https://samirautanen.fi)
- **GitHub:** [@Samrude1](https://github.com/Samrude1)
- **LinkedIn:** [Sami Rautanen](https://linkedin.com/in/sami-rautanen)
- **Email:** samrude1@outlook.com

---

**Built with ❤️ and cutting-edge web technologies** | Live at [samirautanen.fi](https://samirautanen.fi)

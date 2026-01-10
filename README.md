# Portfolio 2026: Sami Rautanen

The technical portfolio of **Sami Rautanen**, an AI Developer & Technical Designer focusing on **Agentic AI** and **3D Orchestration Systems**.

* **Live Demo:** [portfolio-2026.vercel.app](https://portfolio-2026.vercel.app) (Replace with real link after deploy)
* **Tech Stack:** Next.js 16, Three.js (R3F), Tailwind CSS, Framer Motion.

## 🚀 Key Features

*   **Interactive 3D Background:** A neural-network inspired particle system using `react-three-fiber` that responds to scroll and mouse movement.
*   **Agentic AI Showcase:** Dedicated section for "Autonomous Agents" (Python/CrewAI) projects.
*   **Themed UI:** Custom "AI Dark Mode" aesthetics using specialized HSL color tokens.
*   **Performance:** Optimized animations and component-level code splitting.

## 🛠️ Tech Stack

*   **Core:** [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **3D / Visuals:** [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), [Drei](https://github.com/pmndrs/drei)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── ThreeScene.tsx    # The 3D Neural Network background
│   ├── Projects.tsx      # Portfolio grid (inc. AI Agents)
│   ├── Hero.tsx          # Landing section with scroll-driven animations
│   └── ...
└── lib/                  # Utilities (if any)
```

## 🏃‍♂️ Running Locally

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the dev server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## 🚢 Deployment

Ready for zero-config deployment on **Vercel**:

```bash
npx vercel
```

---
*Created by Sami Rautanen as part of the "AI Architect 2026" Career Plan.*

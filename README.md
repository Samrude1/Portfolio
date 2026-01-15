# Portfolio 2026: Sami Rautanen

The technical portfolio of **Sami Rautanen**, an AI Developer & Technical Designer focusing on **Agentic AI** and **3D Orchestration Systems**.

*   **Live Demo:** [portfolio-seven-rho-74yt50nw74.vercel.app](https://portfolio-seven-rho-74yt50nw74.vercel.app/)
*   **Tech Stack:** Next.js 15, Three.js (R3F), Tailwind CSS v4, Framer Motion.

## 🚀 Key Features

*   **Custom AI Clone (Full-Stack):** An integrated chat widget powered by a custom Python backend (FastAPI) and Google Gemini.
*   **Interactive 3D Background:** A neural-network inspired particle system using `react-three-fiber` that responds to scroll and mouse movement.
*   **Agentic AI Showcase:** Dedicated project cards highlighting autonomous agent development.
*   **Aesthetic UI:** Premium "AI Dark Mode" & "Cream Light Mode" using specialized HSL color tokens and glassmorphism.

## 🛠️ Tech Architecture

This project is built using a modern **Full-Stack AI** architecture:

### Frontend (User Interface)
*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **3D / Visuals:** [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)

### Backend (AI Logic)
*   **Server:** [FastAPI](https://fastapi.tiangolo.com/) (Python) hosted on Render.
*   **AI Model:** Google Gemini API (Flash 2.0).
*   **Security:** Rate-limiting via `slowapi` to prevent abuse.
*   **Automation:** UptimeRobot monitoring to keep the free-tier backend responsive.

## 📦 Project Structure

```
src/
├── app/                  # Next.js App Router (Layout, Page)
├── components/           # UI Components
│   ├── ChatWidget.tsx    # AI Chat interface
│   ├── ThreeScene.tsx    # 3D Neural Network background
│   ├── Projects.tsx      # Hover-enabled project cards
│   ├── Hero.tsx          # Dynamic landing section
│   └── ...
└── ...
```

## 🏃‍♂️ Running Locally

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/Samrude1/Portfolio.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    Create a `.env.local` for the frontend and a `.env` for the backend (see `ai-agent-backend`).

4.  **Run Development:**
    ```bash
    npm run dev
    ```

---
*Created by Sami Rautanen as part of the "AI Architect 2026" Career Plan.*

"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import ProjectCard, { ProjectItem } from "./ProjectCard";

// Project data — models verified from source repos June 2026
const projects: ProjectItem[] = [
    {
        title: "Sidekick AI",
        status: "Live",
        description: "Autonomous tool-using assistant powered by Claude Sonnet 4.5 and GPT-4o. Features a LangGraph worker-evaluator pattern for self-correction. Capable of web browsing with Playwright and dynamic code execution via Python REPL.",
        tags: ["LangGraph", "Claude Sonnet 4.5", "GPT-4o", "Playwright", "Gradio"],
        link: "https://huggingface.co/spaces/samrude1/Sidekick",
        cta: "Launch Sidekick",
        image: "/projects/sidekick-v3.jpg",
        linkDescription: "Live on Hugging Face",
        github: "https://github.com/Samrude1/sidekick-ai-agent"
    },
    {
        title: "EngineeringTeam Crew",
        status: "Live",
        description: "Full autonomous software team drafting, coding, and testing Python apps. Utilizing CrewAI orchestration with Claude Opus 4.5 for end-to-end development automation.",
        tags: ["CrewAI", "Claude Opus 4.5", "OpenRouter", "Gradio"],
        link: "https://huggingface.co/spaces/samrude1/EngineeringTeam",
        cta: "Launch Crew",
        image: "/projects/engineering-team-v2.jpg",
        linkDescription: "Live on Hugging Face",
        github: "https://github.com/Samrude1/ai-engineering-team"
    },
    {
        title: "Digital Twin (Prod)",
        status: "Live",
        description: "Autonomous production-grade AI representation of Sami Rautanen. Built on AWS Serverless architecture with FastAPI and Amazon Nova models. Features Terraform IaC, CI/CD automation, and S3-based conversation memory.",
        tags: ["AWS Lambda", "Terraform", "Amazon Nova", "FastAPI"],
        link: "https://d15k7n9dhqyy0d.cloudfront.net/",
        cta: "Talk to Digital Twin",
        image: "/projects/ai-assistant-v2.jpg",
        linkDescription: "Live AWS Deployment",
        github: "https://github.com/Samrude1/Digital-Twin-AWS"
    },
    {
        title: "Agentic Fullstack Template",
        status: "Open Source",
        description: "Studio-grade cognitive development environment and deterministic governance template for autonomous AI agents. Features 17 specialized skills, zero context-rot state persistence, and automated quality gates.",
        tags: ["Agentic Dev", "TypeScript", "Python", "CI/CD", "OWASP"],
        link: "https://github.com/Samrude1/agentic-fullstack-template",
        cta: "View Repository",
        image: "/projects/agentic-template-v1.jpg",
        linkDescription: "GitHub Template",
        github: "https://github.com/Samrude1/agentic-fullstack-template"
    },
    {
        title: "Agentic Architect",
        status: "Open Source",
        description: "AI-powered fullstack architecture visualizer and code generation engine. Transforms requirements into interactive 4-tier React Flow system diagrams, Prisma schemas, Next.js API handlers, and React 19 UI components.",
        tags: ["Next.js 16", "React Flow", "Vercel AI SDK", "Prisma", "TypeScript"],
        link: "https://github.com/Samrude1/Agentic-Architect",
        cta: "View Repository",
        image: "/projects/agentic-architect-v1.jpg",
        linkDescription: "GitHub Repository",
        github: "https://github.com/Samrude1/Agentic-Architect"
    },
    {
        title: "AgentSquad Platform",
        status: "Live",
        description: "Full-stack multi-agent platform: Sales team drafts and sends real emails via Resend, Deep Research team delivers cited executive reports, and Meeting Prep generates strategic briefings. React frontend on Vercel, FastAPI backend on Hugging Face.",
        tags: ["React", "OpenAI SDK", "Claude 3.5 Sonnet", "GPT-4o", "FastAPI"],
        link: "https://agent-squad-sigma.vercel.app/?access=portfolio_access",
        cta: "Launch Platform",
        image: "/projects/agentsquad-v2.jpg",
        linkDescription: "Live on Vercel",
        github: "https://github.com/Samrude1/Agentsquad"
    },
    {
        title: "Indie Game Portfolio",
        status: "Live",
        description: "10 published games on Itch.io showcasing game mechanics, AI, and level design. Built with Unity/C# and JavaScript.",
        tags: ["Unity", "C#", "JavaScript", "Game Design"],
        link: "https://sr3design.itch.io/",
        cta: "Play Games",
        image: "/projects/games-v2.jpg",
        linkDescription: "Play on Steam / Web",
        github: ""
    }
];

export default function Projects() {
    return (
        <Section id="work">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider md:tracking-widest mb-4"
                    style={{ color: 'var(--foreground)' }}
                >
                    SELECTED WORK
                </h2>
                <div className="w-12 h-1" style={{ backgroundColor: 'var(--primary)' }} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
}

"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Sidekick AI",
        description: "Autonomous tool-using assistant. Features a LangGraph worker-evaluator pattern for self-correction. Capable of web browsing with Playwright and dynamic code execution via Python REPL. Professional 'Electric Blue' Gradio interface.",
        tags: ["LangGraph", "Python", "Playwright", "Gradio", "AI Agent"],
        link: "https://huggingface.co/spaces/samrude1/Sidekick",
        cta: "Launch Sidekick",
        image: "/projects/sidekick.png",
        linkDescription: "Live on Hugging Face"
    },
    {
        title: "Agentic Business Intelligence",
        description: "Enterprise-grade multi-agent orchestration platform built with OpenAI Agents SDK (Gemini 2.0 Flash). Features a 6-agent Sales Intelligence Team with competitive email drafting and a 3-agent Deep Research Team with parallel web synthesis.",
        tags: ["Python", "OpenAI Agents SDK", "Gemini API", "Multi-Agent Systems", "FastAPI"],
        link: "https://github.com/Samrude1/Agentsquad",
        cta: "View Architecture",
        image: "/projects/agents.png",
        linkDescription: "Enterprise-ready agent framework"
    },
    {
        title: "Digital Twin (Prod)",
        description: "Autonomous production-grade AI representation of Sami Rautanen. Handles intelligent visitor inquiries, email workflows, and real-time interactions, demonstrating AWS Serverless delivery.",
        tags: ["AWS S3", "CloudFront", "AWS Lambda", "AI Agent"],
        link: "https://d6x3ucjiv33it.cloudfront.net/",
        cta: "Talk to Digital Twin",
        image: "/projects/ai-assistant.png",
        linkDescription: "Live AWS Deployment"
    },
    {
        title: "Yes Man Chess Terminal",
        description: "Retro chess game with personality-driven AI commentary powered by Gemini. Features Stockfish engine, dynamic mood system, and authentic CRT effects.",
        tags: ["TypeScript", "React", "Stockfish WASM", "Gemini API"],
        link: "https://github.com/Samrude1/ChessAI",
        cta: "View on GitHub",
        image: "/projects/chess-ai.png",
        linkDescription: "Interactive chess AI"
    },
    {
        title: "Poker Analytics Engine",
        description: "6-max No-Limit Hold'em training simulator with position-based AI opponents. Features realistic betting mechanics, live HUD, and session analytics.",
        tags: ["TypeScript", "React", "Game AI", "Data Visualization"],
        link: "https://github.com/Samrude1/PokerAnalyzzer",
        cta: "View Logic",
        image: "/projects/poker-analytics.png",
        linkDescription: "Algorithmic simulation"
    },
    {
        title: "Indie Game Portfolio",
        description: "8 published games on Itch.io showcasing game mechanics, AI, and level design. Built with Unity/C# and JavaScript.",
        tags: ["Unity", "C#", "JavaScript", "Game Design"],
        link: "https://sr3design.itch.io/",
        cta: "Play Games",
        image: "/projects/games.png",
        linkDescription: "8 playable games"
    },
    {
        title: "Technical Art & 3D",
        description: "3D art and environment portfolio featuring vehicle models and architectural designs. Explore detailed visualizations and artistic 3D work.",
        tags: ["3D Modeling", "Level Design", "CAD"],
        link: "https://www.artstation.com/samrude",
        cta: "View Gallery",
        image: "/projects/3d-art.png",
        linkDescription: "Visual portfolio"
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
                {projects.map((project, index) => {
                    const cardContent = (
                        <>
                            {/* Thumbnail */}
                            <div className="relative w-full aspect-video mb-4 rounded-xl overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Header */}
                            <h3
                                className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors"
                                style={{ color: 'var(--foreground)' }}
                            >
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-base mb-4 leading-relaxed opacity-70 flex-grow"
                                style={{ color: 'var(--foreground)' }}
                            >
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-sm px-2 py-1 rounded-full border opacity-60"
                                        style={{
                                            backgroundColor: 'var(--surface)',
                                            color: 'var(--foreground)',
                                            borderColor: 'var(--border)'
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Button with link description */}
                            <div className="mt-auto pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                                <div
                                    className={`flex items-center justify-between text-sm font-medium transition-all
                                        ${project.link
                                            ? 'opacity-80 group-hover:opacity-100'
                                            : 'opacity-40'}`}
                                >
                                    <div className="flex items-center gap-2" style={{ color: project.link ? 'var(--primary)' : 'var(--foreground)' }}>
                                        <span>{project.cta}</span>
                                        {project.link && (
                                            <ArrowRight
                                                size={16}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        )}
                                    </div>
                                    <span className="text-xs opacity-50" style={{ color: 'var(--foreground)' }}>
                                        {project.linkDescription}
                                    </span>
                                </div>
                            </div>
                        </>
                    );

                    const cardClasses = `group relative p-4 rounded-2xl border transition-all duration-300 flex flex-col h-full
                        hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:scale-105 hover:-translate-y-1
                        ${project.link ? 'cursor-pointer' : 'cursor-default opacity-80'}`;

                    const cardStyle = {
                        backgroundColor: 'var(--surface)',
                        borderColor: 'var(--border)'
                    };

                    return (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {project.link ? (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className={cardClasses}
                                    style={cardStyle}
                                >
                                    {cardContent}
                                </Link>
                            ) : (
                                <div className={cardClasses} style={cardStyle}>
                                    {cardContent}
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}

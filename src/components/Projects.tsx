"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Poker Analytics Engine",
        description: "A 6-max No-Limit Hold'em poker training simulator with intelligent AI opponents. Practice your game with real-time statistics and probability calculations.",
        tags: ["TypeScript", "React", "Data Viz", "Game Theory"],
        link: "https://github.com/Samrude1/PokerAnalyzzer",
        cta: "View Logic",
        image: "/projects/poker-analytics.png",
        linkDescription: "Algorithmic simulation"
    },
    {
        title: "AI Automation Platform",
        description: "A professional AI agent platform for building and orchestrating intelligent agents. Features teams for research and sales intelligence that work together autonomously. Built with Python.",
        tags: ["Python", "AI Agents", "LLM Orchestration"],
        link: "https://github.com/Samrude1/Agentsquad",
        cta: "View Architecture",
        image: "/projects/agents.png",
        linkDescription: "Autonomous Workflow Engine"
    },
    {
        title: "TreeniTrack Pro",
        description: "Intelligent workout tracking application with integrated AI coach. Features visual progress analytics, exercise logging, and personalized training recommendations.",
        tags: ["TypeScript", "Vite", "Tailwind", "Fitness Tech"],
        link: "https://github.com/Samrude1/TreeniTracker",
        cta: "View App",
        image: "/projects/workout-tracker.png",
        linkDescription: "Modern wellness platform"
    },
    {
        title: "737 Performance Computer",
        description: "High-precision flight performance calculator for B737-800. Handles complex aviation mathematics for takeoff, landing, and descent planning.",
        tags: ["TypeScript", "Mathematics", "Aviation"],
        link: "https://github.com/Samrude1/Boeing737Calculator",
        cta: "Check Maths",
        image: "/projects/flight-calc.png",
        linkDescription: "Specialized simulation tool"
    },
    {
        title: "AI Chess with Commentary",
        description: "A retro-futuristic chess game with AI-powered commentary. Features Stockfish chess engine, customizable themes, and authentic CRT monitor effects.",
        tags: ["TypeScript", "React", "Stockfish WASM", "Gemini API"],
        link: "https://github.com/Samrude1/ChessAI",
        cta: "View on GitHub",
        image: "/projects/chess-ai.png",
        linkDescription: "Source code & documentation"
    },
    {
        title: "AI Portfolio Assistant",
        description: "The AI chatbot on this website. Answers questions about my work, can send emails, and notifies me when someone wants to get in touch. Built with Python.",
        tags: ["Python", "FastAPI", "Gemini API", "AI Agents"],
        link: null, // No external link - it's live on this site
        cta: "Try it below ↘️",
        image: "/projects/ai-assistant.png",
        linkDescription: "Live on this site"
    },
    {
        title: "Bootcamp Finder",
        description: "Full-stack web application for discovering and filtering coding bootcamps. Features robust search and filtering.",
        tags: ["React", "Node.js", "API Integration"],
        link: "https://bootcampfinder.onrender.com/",
        cta: "Try Live Demo",
        image: "/projects/bootcamp.png",
        linkDescription: "Interactive web app"
    },
    {
        title: "Activity Finder",
        description: "Social activity discovery platform. Clean UI/UX focused on connecting users with local events.",
        tags: ["Next.js", "Tailwind", "Vercel"],
        link: "https://activity-finder-nu.vercel.app/",
        cta: "Try Live Demo",
        image: "/projects/activity.png",
        linkDescription: "Interactive web app"
    },
    {
        title: "Indie Game Portfolio",
        description: "Collection of published indie games on Itch.io. Showcase of C# Unity scripting and level design.",
        tags: ["Unity", "C#", "Game Design"],
        link: "https://sr3design.itch.io/",
        cta: "Play Games",
        image: "/projects/games.png",
        linkDescription: "5+ playable games"
    },
    {
        title: "Technical Art & 3D",
        description: "3D visualization and level design portfolio. Featuring technical CAD drawings, game environment modeling, and structural design implementations.",
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
                        hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 hover:scale-[1.02]
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


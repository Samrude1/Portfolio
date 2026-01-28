"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Agentic Business Intelligence",
        description: "Enterprise-grade multi-agent orchestration platform built with OpenAI Agents SDK (Gemini 2.0 Flash). Features a 6-agent Sales Intelligence Team with competitive email drafting and a 3-agent Deep Research Team with parallel web synthesis. Includes custom tool integration, memory management, and real-time process streaming.",
        tags: ["Python", "OpenAI Agents SDK", "Gemini API", "Multi-Agent Systems", "FastAPI"],
        link: "https://github.com/Samrude1/Agentsquad",
        cta: "View Architecture",
        image: "/projects/agents.png",
        linkDescription: "Enterprise-ready agent framework"
    },
    {
        title: "Autonomous Career Digital Twin",
        description: "Autonomous agent deployed on this portfolio. Handles visitor inquiries, provides intelligent responses about my work, manages email workflows, and sends real-time notifications. Production deployment with FastAPI backend on Render.",
        tags: ["Python", "FastAPI", "Gemini API", "Agent Deployment"],
        link: null, // No external link - it's live on this site
        cta: "Try it below ↘️",
        image: "/projects/ai-assistant.png",
        linkDescription: "Live production system"
    },
    {
        title: "SkyGuide B737-800 Performance Computer",
        description: "Professional flight performance calculator with live METAR integration, AI co-pilot, and SimBrief import. Computes V-speeds (V1/VR/V2), N1 thrust, VREF/VAPP with wind correction, and TOD using 3:1 glide path. Features AI safety briefings via Gemini and interactive checklists.",
        tags: ["TypeScript", "Aviation Math", "Gemini API", "SimBrief"],
        link: "https://github.com/Samrude1/Boeing737Calculator",
        cta: "View System",
        image: "/projects/flight-calc.png",
        linkDescription: "Professional dispatch tool"
    },
    {
        title: "NordicCode Bootcamp Finder",
        description: "Full-stack REST API platform for discovering coding bootcamps and courses. Features user authentication, live backend data fetching, bootcamp reviews, and comprehensive API documentation. Built with Node.js backend and responsive frontend.",
        tags: ["React", "Node.js", "REST API", "Authentication"],
        link: "https://bootcampfinder.onrender.com/",
        cta: "Try Live Demo",
        image: "/projects/bootcamp.png",
        linkDescription: "Full-stack web app"
    },
    {
        title: "Yes Man Chess Terminal",
        description: "Retro chess game with personality-driven AI commentary powered by Gemini. Features Stockfish engine with 4 difficulty levels, dynamic mood system (6 emotional states), authentic CRT effects (scanlines, curvature, glitches), and context-aware responses to checks and captures.",
        tags: ["TypeScript", "React", "Stockfish WASM", "Gemini API"],
        link: "https://github.com/Samrude1/ChessAI",
        cta: "View on GitHub",
        image: "/projects/chess-ai.png",
        linkDescription: "Interactive chess AI"
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
        title: "Poker Analytics Engine",
        description: "6-max No-Limit Hold'em training simulator with position-based AI opponents. Features realistic betting mechanics (min-raise, all-in, side pots), live HUD with VPIP/PFR/3-Bet stats, aggression factor tracking, and session profit/loss analytics.",
        tags: ["TypeScript", "React", "Game AI", "Data Visualization"],
        link: "https://github.com/Samrude1/PokerAnalyzzer",
        cta: "View Logic",
        image: "/projects/poker-analytics.png",
        linkDescription: "Algorithmic simulation"
    },
    {
        title: "Activity Finder",
        description: "Discover free local activities, cultural events, and hidden gems. Features interactive maps, smart filtering, and personalized favorites.",
        tags: ["Next.js", "Tailwind", "Vercel"],
        link: "https://activity-finder-nu.vercel.app/",
        cta: "Try Live Demo",
        image: "/projects/activity.png",
        linkDescription: "Interactive web app"
    },
    {
        title: "Indie Game Portfolio",
        description: "8 published games on Itch.io including Chess Terminal, Tanks, Snake, Vault of Shadows, Pong, CellWars (simulation), Brain Damage, and Heaven&Hell. Built with Unity/C# and JavaScript/HTML/CSS showcasing game mechanics, AI, and level design.",
        tags: ["Unity", "C#", "JavaScript", "Game Design"],
        link: "https://sr3design.itch.io/",
        cta: "Play Games",
        image: "/projects/games.png",
        linkDescription: "8 playable games"
    },
    {
        title: "Technical Art & 3D",
        description: "3D art and environment portfolio. Featuring vehicle models, architectural designs, and game environments. Explore detailed visualizations and artistic 3D work.",
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

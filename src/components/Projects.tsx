"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "AI-Integrated Chess",
        description: "Classic chess engine enhanced with custom Python AI agents. Demonstrates algorithmic thinking and game logic implementation.",
        tags: ["Python", "Game AI", "Algorithms"],
        link: "https://github.com/Samrude1/ChessAI",
        cta: "View on GitHub"
    },
    {
        title: "Autonomous Agents",
        description: "Suite of Python-based automation agents designed for complex decision-making tasks and workflow optimization.",
        tags: ["Python", "Automation", "LLMs"],
        cta: "Coming Soon"
    },
    {
        title: "Bootcamp Finder",
        description: "Full-stack web application for discovering and filtering coding bootcamps. Features robust search and filtering.",
        tags: ["React", "Node.js", "API Integration"],
        link: "https://bootcampfinder.onrender.com/",
        cta: "Try Live Demo"
    },
    {
        title: "Activity Finder",
        description: "Social activity discovery platform. Clean UI/UX focused on connecting users with local events.",
        tags: ["Next.js", "Tailwind", "Vercel"],
        link: "https://activity-finder-nu.vercel.app/",
        cta: "Try Live Demo"
    },
    {
        title: "Indie Game Portfolio",
        description: "Collection of published indie games on Itch.io. Showcase of C# Unity scripting and level design.",
        tags: ["Unity", "C#", "Game Design"],
        link: "https://sr3design.itch.io/",
        cta: "Play Games"
    },
    {
        title: "Technical Art & 3D",
        description: "3D visualization and level design portfolio. Featuring technical CAD drawings, game environment modeling, and structural design implementations.",
        tags: ["3D Modeling", "Level Design", "CAD"],
        link: "https://www.artstation.com/samrude",
        cta: "View Gallery"
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
                    className="text-3xl md:text-4xl font-light tracking-widest mb-4"
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
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <h3
                                    className="text-xl font-medium group-hover:text-primary transition-colors"
                                    style={{ color: 'var(--foreground)' }}
                                >
                                    {project.title}
                                </h3>
                                {project.link && (
                                    <ExternalLink
                                        size={18}
                                        className="opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                        style={{ color: 'var(--foreground)' }}
                                    />
                                )}
                            </div>

                            {/* Description */}
                            <p
                                className="text-base mb-6 leading-relaxed opacity-70 flex-grow"
                                style={{ color: 'var(--foreground)' }}
                            >
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-full border opacity-60"
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

                            {/* CTA Button */}
                            <div
                                className={`flex items-center gap-2 text-sm font-medium transition-all
                                    ${project.link
                                        ? 'group-hover:gap-3 opacity-70 group-hover:opacity-100'
                                        : 'opacity-40'}`}
                                style={{ color: project.link ? 'var(--primary)' : 'var(--foreground)' }}
                            >
                                <span>{project.cta}</span>
                                {project.link && (
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                )}
                            </div>
                        </>
                    );

                    const cardClasses = `group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col h-full
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

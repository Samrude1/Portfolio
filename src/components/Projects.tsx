"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "AI-Integrated Chess",
        description: "Classic chess engine enhanced with custom Python AI agents. Demonstrates algorithmic thinking and game logic implementation.",
        tags: ["Python", "Game AI", "Algorithms"],
        link: "https://github.com/Samrude1/ChessAI"
    },
    {
        title: "Autonomous Agents",
        description: "Suite of Python-based automation agents designed for complex decision-making tasks and workflow optimization.",
        tags: ["Python", "Automation", "LLMs"],
        link: "https://github.com/Samrude1"
    },
    {
        title: "Bootcamp Finder",
        description: "Full-stack web application for discovering and filtering coding bootcamps. Features robust search and filtering.",
        tags: ["React", "Node.js", "API Integration"],
        link: "https://bootcampfinder.onrender.com/"
    },
    {
        title: "Activity Finder",
        description: "Social activity discovery platform. Clean UI/UX focused on connecting users with local events.",
        tags: ["Next.js", "Tailwind", "Vercel"],
        link: "https://activity-finder-nu.vercel.app/"
    },
    {
        title: "Indie Game Portfolio",
        description: "Collection of published indie games on Itch.io. Showcase of C# Unity scripting and level design.",
        tags: ["Unity", "C#", "Game Design"],
        link: "https://sr3design.itch.io/"
    },
    {
        title: "Technical Art & 3D",
        description: "3D visualization and level design portfolio. Featuring technical CAD drawings, game environment modeling, and structural design implementations.",
        tags: ["3D Modeling", "Level Design", "CAD"],
        link: "https://www.artstation.com/samrude"
    }
];

export default function Projects() {
    return (
        <Section id="work">{/* Removed bg-black/50 for cleaner light mode */}
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
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                        style={{
                            backgroundColor: 'var(--surface)',
                            borderColor: 'var(--border)'
                        }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3
                                className="text-xl font-medium group-hover:text-primary transition-colors"
                                style={{ color: 'var(--foreground)' }}
                            >
                                {project.title}
                            </h3>
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="opacity-60 hover:opacity-100 transition-opacity"
                                    style={{ color: 'var(--foreground)' }}
                                >
                                    <ExternalLink size={20} />
                                </Link>
                            )}
                        </div>

                        <p
                            className="text-base mb-6 leading-relaxed opacity-80"
                            style={{ color: 'var(--foreground)' }}
                        >
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-sm px-3 py-1 rounded-full border opacity-70"
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
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

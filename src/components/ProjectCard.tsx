"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export type ProjectStatus = "Live" | "In Development" | string;

export interface ProjectItem {
    title: string;
    status: ProjectStatus;
    description: string;
    tags: string[];
    link: string;
    cta: string;
    image: string;
    linkDescription: string;
    github?: string;
}

interface ProjectCardProps {
    project: ProjectItem;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const isLive = project.status === "Live";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div
                className={`group relative p-4 rounded-2xl border transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:border-primary/50 ${
                    project.link ? "cursor-pointer" : "cursor-default opacity-80"
                }`}
                style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                }}
            >
                {project.link && (
                    <Link
                        href={project.link}
                        target="_blank"
                        className="absolute inset-0 z-0 rounded-2xl"
                        aria-label={`View ${project.title}`}
                    />
                )}

                <div className="relative z-10 flex flex-col h-full pointer-events-none">
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

                        {project.github && (
                            <div className="absolute top-3 left-3 z-20">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full border border-white/60 bg-black/60 backdrop-blur-md hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 group/repo shadow-lg"
                                    aria-label="View Source Code"
                                >
                                    <Github
                                        size={16}
                                        className="text-white/80 group-hover/repo:text-white group-hover/repo:scale-110 transition-all"
                                    />
                                </a>
                            </div>
                        )}

                        {/* Status Badge */}
                        <div className="absolute top-3 right-3 z-10">
                            <span
                                className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-md ${
                                    isLive
                                        ? "bg-primary border-primary text-white shadow-[0_0_12px_rgba(0,102,204,0.6)]"
                                        : "bg-amber-500/90 border-amber-400 text-white shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                                }`}
                            >
                                {project.status?.toUpperCase()}
                            </span>
                        </div>
                    </div>

                    {/* Header */}
                    <h3
                        className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors"
                        style={{ color: "var(--foreground)" }}
                    >
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p
                        className="text-lg mb-4 leading-relaxed opacity-90 flex-grow"
                        style={{ color: "var(--foreground)" }}
                    >
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2.5 py-1 rounded-md border font-medium opacity-80"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    backgroundColor: "var(--surface-hover)",
                                    color: "var(--foreground)",
                                    borderColor: "var(--border)",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA Button with link description */}
                    <div className="mt-auto pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                        <div
                            className={`flex items-center justify-between text-sm font-medium transition-all ${
                                project.link ? "opacity-80 group-hover:opacity-100" : "opacity-40"
                            }`}
                        >
                            <div
                                className="flex items-center gap-2"
                                style={{ color: project.link ? "var(--primary)" : "var(--foreground)" }}
                            >
                                <span>{project.cta}</span>
                                {project.link && (
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                )}
                            </div>
                            <span className="text-xs opacity-50" style={{ color: "var(--foreground)" }}>
                                {project.linkDescription}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

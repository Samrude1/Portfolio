"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Sidekick AI",
        status: "Live",
        description: "Autonomous tool-using assistant powered by Gemini 2.5 Flash. Features a LangGraph worker-evaluator pattern for self-correction. Capable of web browsing with Playwright and dynamic code execution via Python REPL.",
        tags: ["LangGraph", "Gemini 2.5", "Playwright", "Gradio", "AI Agent"],
        link: "https://huggingface.co/spaces/samrude1/Sidekick",
        cta: "Launch Sidekick",
        image: "/projects/sidekick.png",
        linkDescription: "Live on Hugging Face"
    },
    {
        title: "EngineeringTeam Crew",
        status: "Live",
        description: "Full autonomous software team drafting, coding, and testing Python apps. Utilizing CrewAI orchestration with Claude 3.7 and GPT-4o for end-to-end development automation.",
        tags: ["CrewAI", "Claude 3.7", "GPT-4o", "Gradio"],
        link: "https://huggingface.co/spaces/samrude1/EngineeringTeam",
        cta: "Launch Crew",
        image: "/projects/engineering-team.png",
        linkDescription: "Live on Hugging Face"
    },
    {
        title: "Digital Twin (Prod)",
        status: "Live",
        description: "Autonomous production-grade AI representation of Sami Rautanen. Built on AWS Serverless architecture with FastAPI and Amazon Nova models. Features Terraform IaC, CI/CD automation, and S3-based conversation memory.",
        tags: ["AWS Lambda", "Terraform", "Amazon Nova", "FastAPI"],
        link: "https://d6x3ucjiv33it.cloudfront.net/",
        cta: "Talk to Digital Twin",
        image: "/projects/ai-assistant.png",
        linkDescription: "Live AWS Deployment"
    },
    {
        title: "CareAssist AI",
        status: "In Development",
        description: "HealthTech solution for autonomous patient note structuring and triage. Built with AWS Event-driven architecture to transform unstructured sote-data into structured formats.",
        tags: ["AWS SQS", "Lambda", "Aurora v2", "PII-Anonymization"],
        link: "",
        cta: "Architecture Only",
        image: "/projects/agents.png",
        linkDescription: "Enterprise Sote-AI"
    },
    {
        title: "ContractSense AI",
        status: "In Development",
        description: "Legal-grade contract risk analysis platform. Features PII-masking, CoT-visualization of legal risks, and a zero-login demo philosophy for immediate business value.",
        tags: ["FastAPI", "Claude 3.7", "PDF-Parsing", "RegTech"],
        link: "",
        cta: "In Development",
        image: "/projects/agents.png",
        linkDescription: "SaaS AI Solution"
    },
    {
        title: "AgentSquad Platform",
        status: "Live",
        description: "Professional-grade multi-agent orchestration platform. Features a 6-agent Sales Intelligence pipeline and a parallel Deep Research team with rendering and HTML report generation.",
        tags: ["React", "FastAPI", "OpenAI SDK", "Gemini 2.5"],
        link: "https://agent-squad-psru8ot5b-sami-rautanens-projects.vercel.app/",
        cta: "Launch Platform",
        image: "/projects/agentsquad.png",
        linkDescription: "Live on Vercel"
    },
    {
        title: "Indie Game Portfolio",
        status: "Live",
        description: "8 published games on Itch.io showcasing game mechanics, AI, and level design. Built with Unity/C# and JavaScript.",
        tags: ["Unity", "C#", "JavaScript", "Game Design"],
        link: "https://sr3design.itch.io/",
        cta: "Play Games",
        image: "/projects/games.png",
        linkDescription: "8 playable games"
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
                                
                                {/* Status Badge */}
                                <div className="absolute top-3 right-3 z-10">
                                    <span 
                                        className={`text-[10px] font-bold tracking-widest px-2 py-1 rounded-full border backdrop-blur-md
                                            ${project.status === 'Live' 
                                                ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(0,102,204,0.3)]' 
                                                : 'bg-white/5 border-white/20 text-white/60'}`}
                                    >
                                        {project.status?.toUpperCase()}
                                    </span>
                                </div>
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

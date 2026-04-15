"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const skills = [
    {
        category: "AI Engineering",
        items: ["CrewAI & LangGraph", "AutoGen Frameworks", "MCP Server Integration", "Multi-Agent Orchestration"]
    },
    {
        category: "Game Development",
        items: ["Unity Engine", "C# Scripting", "JavaScript Games", "Itch.io Publishing"]
    },
    {
        category: "Full-Stack Web",
        items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
        category: "Cloud & Deployment",
        items: ["AWS Ecosystem", "Azure & Google Cloud", "Terraform (IaC)", "GitHub Actions / CI/CD"]
    }
];

export default function Skills() {
    return (
        <Section id="skills">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text / Context */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider md:tracking-widest mb-8"
                        style={{ color: 'var(--foreground)' }}
                    >
                        SKILLS & EXPERTISE
                    </h2>
                    <p
                        className="text-base leading-relaxed mb-6 opacity-80"
                        style={{ color: 'var(--foreground)' }}
                    >
                        I bring a systems engineering mindset to AI development. My focus on cloud infrastructure
                        and scalable architecture informs how I build robust agent systems — balancing technical 
                        performance with production-grade stability. I specialize in taking AI projects from prototype to deployment.
                    </p>
                    <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                        <p className="text-xs font-medium tracking-widest mb-2 opacity-60" style={{ color: 'var(--foreground)' }}>EDUCATION</p>
                        <h4 className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                            Vocational Qualification in Technical Design
                        </h4>
                        <p className="opacity-60" style={{ color: 'var(--foreground)' }}>
                            Hyria Ammattiopisto • Tekninen suunnittelija
                        </p>
                        <p className="text-sm mt-1 opacity-50" style={{ color: 'var(--foreground)' }}>
                            3D Visualization & Structural Design
                        </p>
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl border hover:border-primary/30 transition-colors"
                            style={{
                                backgroundColor: 'var(--surface)',
                                borderColor: 'var(--border)'
                            }}
                        >
                            <h3
                                className="text-lg font-medium mb-4 border-b pb-2"
                                style={{
                                    color: 'var(--foreground)',
                                    borderColor: 'var(--border)'
                                }}
                            >
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map(item => (
                                    <li
                                        key={item}
                                        className="text-base flex items-center gap-2 opacity-80"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        <span
                                            className="w-1 h-1 rounded-full"
                                            style={{ backgroundColor: 'var(--secondary)' }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section >
    );
}

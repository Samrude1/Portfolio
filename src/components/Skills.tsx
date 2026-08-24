"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const skills = [
    {
        category: "AI & Multi-Agent Systems",
        items: ["CrewAI & LangGraph", "Multi-Agent Orchestration", "MCP Server Integration", "LLM Tool Use & Automation"]
    },
    {
        category: "Cloud & DevSecOps",
        items: ["AWS Ecosystem (Lambda, S3, Aurora)", "Terraform (IaC)", "CI/CD & GitHub Actions", "Security Automation & DevSecOps"]
    },
    {
        category: "Full-Stack & Languages",
        items: ["Python", "TypeScript / React / Next.js", "C# & .NET", "FastAPI & RESTful APIs"]
    },
    {
        category: "Game Dev & 3D Design",
        items: ["Unity Engine & C#", "JavaScript Web Games", "8 Published itch.io Games", "3D Modeling & Visualization"]
    }
];

export default function Skills() {
    return (
        <Section id="skills">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

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
                        className="text-lg leading-relaxed mb-6 opacity-90"
                        style={{ color: 'var(--foreground)' }}
                    >
                        I bring a rigorous systems engineering mindset to software and AI development. With 25 years of high-tech precision experience combined with modern full-stack development, I architect reliable AI systems — taking intelligent agent workflows from experimental prototype to hardened cloud deployments (AWS, Terraform, CI/CD).
                    </p>
                    <p
                        className="text-base leading-relaxed mb-8 opacity-80"
                        style={{ color: 'var(--foreground)' }}
                    >
                        My focus covers the full development lifecycle in Python, TypeScript/React, and C#, with an active focus on DevSecOps and AI-driven security & penetration testing.
                    </p>

                    <div className="pt-6 border-t space-y-6" style={{ borderColor: 'var(--border)' }}>
                        <p className="text-xs font-semibold tracking-widest uppercase opacity-60" style={{ color: 'var(--foreground)' }}>
                            Education & Specialized Training
                        </p>
                        
                        <div>
                            <h4 className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                                C# Systems Development
                            </h4>
                            <p className="opacity-80 text-base" style={{ color: 'var(--foreground)' }}>
                                Taitotalo Helsinki • 2023
                            </p>
                            <p className="text-sm mt-0.5 opacity-70" style={{ color: 'var(--foreground)' }}>
                                Enterprise application architecture, C#, and object-oriented systems design
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                                Vocational Qualification in Technical Design
                            </h4>
                            <p className="opacity-80 text-base" style={{ color: 'var(--foreground)' }}>
                                Hyria Ammattiopisto • 2016–2018
                            </p>
                            <p className="text-sm mt-0.5 opacity-70" style={{ color: 'var(--foreground)' }}>
                                3D Modeling, structural design & technical visualization
                            </p>
                        </div>
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
                            <ul className="space-y-2.5">
                                {skillGroup.items.map(item => (
                                    <li
                                        key={item}
                                        className="text-base flex items-center gap-2 opacity-90"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: 'var(--primary)' }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    );
}

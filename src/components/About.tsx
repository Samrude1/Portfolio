"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
    return (
        <Section id="about">
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
                    ABOUT ME
                </h2>
                <div className="w-12 h-1" style={{ backgroundColor: 'var(--primary)' }} />
            </motion.div>

            <div className="max-w-4xl mx-auto">
                {/* Photo section removed - user will add later */}

                {/* Bio content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3
                        className="text-2xl md:text-3xl font-medium"
                        style={{ color: 'var(--foreground)' }}
                    >
                        Sami Rautanen
                    </h3>

                    <p
                        className="text-xl leading-relaxed"
                        style={{ color: 'var(--foreground)' }}
                    >
                        I am an <strong>AI Engineer</strong> specializing in the bridge between intelligent agents and production deployments. 
                        I architect autonomous multi-agent systems that don&apos;t just work in a lab, but thrive in the cloud — 
                        utilizing AWS, Terraform, and modern DevOps to deliver scalable, enterprise-ready solutions.
                    </p>
 
                    <p
                        className="text-lg leading-relaxed opacity-90"
                        style={{ color: 'var(--foreground)' }}
                    >
                        My background in industrial MEMS technology and systems engineering informs my disciplined approach 
                        to AI orchestration. I build AI platforms with custom tool integration, long-term memory, 
                        and robust error-handling, ensuring that agents are both capable and reliable.
                    </p>

                    <p
                        className="text-lg leading-relaxed opacity-90"
                        style={{ color: 'var(--foreground)' }}
                    >
                        I focus on the entire lifecycle of an AI product: from the first prompt to the final CI/CD pipeline. 
                        Whether it&apos;s Parallel Research or Autonomous Engineering Teams, my goal is to turn AI research into 
                        tangible, production-hardened business value.
                    </p>


                    {/* Quick facts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div
                            className="flex items-center gap-3 p-4 rounded-xl border"
                            style={{
                                backgroundColor: 'var(--surface)',
                                borderColor: 'var(--border)'
                            }}
                        >
                            <MapPin size={20} style={{ color: 'var(--primary)' }} />
                            <div>
                                <p className="text-sm opacity-60" style={{ color: 'var(--foreground)' }}>Location</p>
                                <p className="font-medium text-lg" style={{ color: 'var(--foreground)' }}>Finland</p>
                            </div>
                        </div>

                        <div
                            className="flex items-center gap-3 p-4 rounded-xl border"
                            style={{
                                backgroundColor: 'var(--surface)',
                                borderColor: 'var(--border)'
                            }}
                        >
                            <Briefcase size={20} style={{ color: 'var(--primary)' }} />
                            <div>
                                <p className="text-sm opacity-60" style={{ color: 'var(--foreground)' }}>Focus</p>
                                <p className="font-medium text-lg" style={{ color: 'var(--foreground)' }}>AI Agent Development</p>
                            </div>
                        </div>

                        <div
                            className="flex items-center gap-3 p-4 rounded-xl border"
                            style={{
                                backgroundColor: 'var(--surface)',
                                borderColor: 'var(--border)'
                            }}
                        >
                            <GraduationCap size={20} style={{ color: 'var(--primary)' }} />
                            <div>
                                <p className="text-sm opacity-60" style={{ color: 'var(--foreground)' }}>Education</p>
                                <p className="font-medium text-lg" style={{ color: 'var(--foreground)' }}>Technical Design (3D) - Hyria (2016-2018)</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center gap-3 p-4 rounded-xl border"
                            style={{
                                backgroundColor: 'var(--surface)',
                                borderColor: 'var(--border)'
                            }}
                        >
                            <GraduationCap size={20} style={{ color: 'var(--primary)' }} />
                            <div>
                                <p className="text-sm opacity-60" style={{ color: 'var(--foreground)' }}>Training</p>
                                <p className="font-medium text-lg" style={{ color: 'var(--foreground)' }}>C# Systems Development - Taitotalo (2023)</p>
                            </div>
                        </div>
                    </div>

                    {/* Evolution timeline */}
                    <div className="pt-6">
                        <h4
                            className="text-sm tracking-widest mb-4 opacity-60"
                            style={{ color: 'var(--foreground)' }}
                        >
                            MY EVOLUTION
                        </h4>
                        <div className="space-y-3">
                            {[
                                { year: "1999-2024", role: "Operator", desc: "Industrial precision & process discipline at Murata Finland (MEMS Tech)" },
                                { year: "2016-Present", role: "3D Designer & Modeler", desc: "Technical design, spatial reasoning & 3D visualization" },
                                { year: "2018-Present", role: "Software Developer", desc: "C# systems, game dev (8 titles on itch.io) & full-stack apps" },
                                { year: "2024-Present", role: "AI Engineer", desc: "Multi-agent orchestration, autonomous systems & cloud deployments" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 items-start p-3 rounded-lg border-l-2"
                                    style={{ borderColor: 'var(--primary)' }}
                                >
                                    <span
                                        className="text-sm sm:text-base font-mono font-medium opacity-85 whitespace-nowrap w-28 sm:w-32 shrink-0 pt-0.5"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        {item.year}
                                    </span>
                                    <div>
                                        <p className="font-medium text-lg" style={{ color: 'var(--foreground)' }}>
                                            {item.role}
                                        </p>
                                        <p className="text-base opacity-80" style={{ color: 'var(--foreground)' }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

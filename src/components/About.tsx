"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

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
                        className="text-lg leading-relaxed opacity-80"
                        style={{ color: 'var(--foreground)' }}
                    >
                        I'm an <strong>AI Engineer</strong> specializing in autonomous multi-agent systems. I architect and deploy
                        production-ready agentic platforms using CrewAI, LangGraph, AutoGen, and MCP servers — solving real
                        business problems from intelligent research automation to autonomous trading systems and browser-based AI assistants.
                    </p>

                    <p
                        className="text-base leading-relaxed opacity-70"
                        style={{ color: 'var(--foreground)' }}
                    >
                        My approach combines systems engineering thinking with cutting-edge AI orchestration frameworks.
                        I build scalable, production-grade solutions with custom tool integration, memory management, and
                        cross-agent collaboration patterns.
                    </p>

                    <p
                        className="text-base leading-relaxed opacity-70"
                        style={{ color: 'var(--foreground)' }}
                    >
                        I focus on bridging the gap between complex logic and user-centric design. Whether it's architecting parallel research agents or developing autonomous trading workflows, I ensure that every system is robust, scalable, and built with a focus on technical excellence.
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
                                <p className="text-xs opacity-50" style={{ color: 'var(--foreground)' }}>Location</p>
                                <p className="font-medium" style={{ color: 'var(--foreground)' }}>Finland</p>
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
                                <p className="text-xs opacity-50" style={{ color: 'var(--foreground)' }}>Focus</p>
                                <p className="font-medium" style={{ color: 'var(--foreground)' }}>AI Agent Development</p>
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
                                <p className="text-xs opacity-50" style={{ color: 'var(--foreground)' }}>Education</p>
                                <p className="font-medium" style={{ color: 'var(--foreground)' }}>Technical Design - Hyria Ammattiopisto</p>
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
                                <p className="text-xs opacity-50" style={{ color: 'var(--foreground)' }}>Training</p>
                                <p className="font-medium" style={{ color: 'var(--foreground)' }}>C# Systems Development - Taitotalo Helsinki 2023</p>
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
                                { year: "1999-2024", role: "Specialist", desc: "Digital/Industrial Precision at Murata Finland (MEMS Tech)" },
                                { year: "2023-2024", role: "Programmer", desc: "C# Systems Development & Full-Stack Apps" },
                                { year: "2024-2026", role: "AI Engineer", desc: "Multi-agent orchestration, Gemini 2.0, production agentic systems" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 items-start p-3 rounded-lg border-l-2"
                                    style={{ borderColor: 'var(--primary)' }}
                                >
                                    <span
                                        className="text-xs font-mono opacity-50 whitespace-nowrap"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        {item.year}
                                    </span>
                                    <div>
                                        <p className="font-medium" style={{ color: 'var(--foreground)' }}>
                                            {item.role}
                                        </p>
                                        <p className="text-sm opacity-60" style={{ color: 'var(--foreground)' }}>
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

"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

interface FactItem {
    icon: typeof MapPin;
    label: string;
    value: string;
}

const quickFacts: FactItem[] = [
    { icon: MapPin, label: "Location", value: "Finland" },
    { icon: Briefcase, label: "Focus", value: "AI Agent Development" },
    { icon: GraduationCap, label: "Education", value: "Technical Design - Hyria Ammattiopisto" },
    { icon: GraduationCap, label: "Training", value: "C# Systems Development - Taitotalo Helsinki 2023" },
];

const timeline = [
    { year: "1999-2024", role: "Specialist", desc: "Digital/Industrial Precision at Murata Finland (MEMS Tech)" },
    { year: "2023-2024", role: "Programmer", desc: "C# Systems Development & Full-Stack Apps" },
    { year: "2024-2026", role: "AI Engineer", desc: "Multi-agent orchestration, Gemini 2.0, production agentic systems" },
];

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
                    style={{ color: "var(--foreground)" }}
                >
                    ABOUT ME
                </h2>
                <div className="w-12 h-1" style={{ backgroundColor: "var(--primary)" }} />
            </motion.div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3
                        className="text-2xl md:text-3xl font-medium"
                        style={{ color: "var(--foreground)" }}
                    >
                        Sami Rautanen
                    </h3>

                    <p
                        className="text-xl leading-relaxed"
                        style={{ color: "var(--foreground)" }}
                    >
                        I am an <strong>AI Engineer</strong> specializing in the bridge between intelligent agents and production deployments. 
                        I architect autonomous multi-agent systems that don&apos;t just work in a lab, but thrive in the cloud — 
                        utilizing AWS, Terraform, and modern DevOps to deliver scalable, enterprise-ready solutions.
                    </p>

                    <p
                        className="text-lg leading-relaxed opacity-90"
                        style={{ color: "var(--foreground)" }}
                    >
                        My background in industrial MEMS technology and systems engineering informs my disciplined approach 
                        to AI orchestration. I build AI platforms with custom tool integration, long-term memory, 
                        and robust error-handling, ensuring that agents are both capable and reliable.
                    </p>

                    <p
                        className="text-lg leading-relaxed opacity-90"
                        style={{ color: "var(--foreground)" }}
                    >
                        I focus on the entire lifecycle of an AI product: from the first prompt to the final CI/CD pipeline. 
                        Whether it&apos;s Parallel Research or Autonomous Engineering Teams, my goal is to turn AI research into 
                        tangible, production-hardened business value.
                    </p>

                    {/* Quick facts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {quickFacts.map((fact, i) => {
                            const Icon = fact.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 rounded-xl border"
                                    style={{
                                        backgroundColor: "var(--surface)",
                                        borderColor: "var(--border)",
                                    }}
                                >
                                    <Icon size={20} style={{ color: "var(--primary)" }} />
                                    <div>
                                        <p className="text-sm opacity-60" style={{ color: "var(--foreground)" }}>{fact.label}</p>
                                        <p className="font-medium text-lg" style={{ color: "var(--foreground)" }}>{fact.value}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Evolution timeline */}
                    <div className="pt-6">
                        <h4
                            className="text-sm tracking-widest mb-4 opacity-60"
                            style={{ color: "var(--foreground)" }}
                        >
                            MY EVOLUTION
                        </h4>
                        <div className="space-y-3">
                            {timeline.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 items-start p-3 rounded-lg border-l-2"
                                    style={{ borderColor: "var(--primary)" }}
                                >
                                    <span
                                        className="text-xs font-mono opacity-50 whitespace-nowrap"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {item.year}
                                    </span>
                                    <div>
                                        <p className="font-medium text-lg" style={{ color: "var(--foreground)" }}>
                                            {item.role}
                                        </p>
                                        <p className="text-base opacity-80" style={{ color: "var(--foreground)" }}>
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

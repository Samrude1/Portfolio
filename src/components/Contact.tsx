"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Gamepad2, Palette, FileDown } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <Section id="contact" className="py-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <span
                    className="tracking-widest text-sm font-medium mb-4 block"
                    style={{ color: 'var(--primary)' }}
                >
                    SEEKING AI ENGINEER ROLES • 2026
                </span>
                <h2
                    className="text-4xl md:text-6xl font-light mb-8"
                    style={{ color: 'var(--foreground)' }}
                >
                    Ready to build the future?
                </h2>
                <p
                    className="text-xl mb-12 max-w-2xl mx-auto opacity-80"
                    style={{ color: 'var(--foreground)' }}
                >
                    I am currently open to discussing roles in Technical Architecture, AI Integration, and Full-Stack Development.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
                    <Link
                        href="https://www.linkedin.com/in/sami-rautanen-022095325"
                        target="_blank"
                        className="px-8 py-4 font-medium rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl"
                        style={{
                            backgroundColor: 'var(--primary)',
                            color: '#ffffff'
                        }}
                    >
                        <Linkedin size={20} />
                        Connect on LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/Samrude1"
                        target="_blank"
                        className="px-8 py-4 border font-medium rounded-full transition-all hover:scale-105 active:scale-95 hover:bg-white/5 flex items-center gap-2"
                        style={{
                            backgroundColor: 'var(--surface)',
                            color: 'var(--foreground)',
                            borderColor: 'var(--border)'
                        }}
                    >
                        <Github size={20} />
                        View GitHub
                    </Link>
                    <Link
                        href="mailto:samrude1@outlook.com"
                        className="px-8 py-4 border font-medium rounded-full transition-all hover:scale-105 active:scale-95 hover:bg-white/5 flex items-center gap-2"
                        style={{
                            backgroundColor: 'var(--surface)',
                            color: 'var(--foreground)',
                            borderColor: 'var(--border)'
                        }}
                    >
                        <Mail size={20} />
                        Send an Email
                    </Link>
                    <Link
                        href="/cv-sami-rautanen.html"
                        target="_blank"
                        className="px-8 py-4 border font-medium rounded-full transition-all hover:scale-105 active:scale-95 hover:bg-white/5 flex items-center gap-2"
                        style={{
                            backgroundColor: 'var(--surface)',
                            color: 'var(--foreground)',
                            borderColor: 'var(--border)'
                        }}
                    >
                        <FileDown size={20} />
                        View CV
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 pt-16 border-t max-w-lg mx-auto flex flex-col items-center gap-6"
                    style={{ borderColor: 'var(--border)' }}
                >
                    <p className="text-xs tracking-[0.2em] font-medium opacity-50" style={{ color: 'var(--foreground)' }}>
                        ALSO EXPLORE
                    </p>
                    <div className="flex gap-8">
                        <Link
                            href="https://sr3design.itch.io/"
                            target="_blank"
                            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 hover:text-primary transition-all group"
                            style={{ color: 'var(--foreground)' }}
                        >
                            <div className="p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform shadow-inner">
                                <Gamepad2 size={24} />
                            </div>
                            <span className="text-xs font-medium tracking-wide">ITCH.IO</span>
                        </Link>
                        <Link
                            href="https://www.artstation.com/samrude"
                            target="_blank"
                            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 hover:text-primary transition-all group"
                            style={{ color: 'var(--foreground)' }}
                        >
                            <div className="p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform shadow-inner">
                                <Palette size={24} />
                            </div>
                            <span className="text-xs font-medium tracking-wide">ARTSTATION</span>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
}

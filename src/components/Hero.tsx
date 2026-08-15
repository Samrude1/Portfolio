"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-background">
            {/* Subtle Technical Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.08] dark:opacity-[0.05]" 
                 style={{ 
                     backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)', 
                     backgroundSize: '40px 40px' 
                 }}>
            </div>

            {/* Content Overlay */}
            <motion.div
                style={{ opacity, y }}
                className="relative z-10 w-full h-full flex flex-col justify-center items-center pointer-events-none"
            >
                <div className="text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--foreground)'
                        }}
                    >
                        SAMI RAUTANEN
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="w-32 h-[2px] mx-auto"
                        style={{ backgroundColor: 'var(--primary)' }}
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-xs sm:text-sm md:text-base lg:text-lg tracking-widest md:tracking-[0.15em] font-medium opacity-80 px-4"
                        style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--foreground)'
                        }}
                    >
                        AI ENGINEER & AGENTIC SYSTEMS ARCHITECT
                    </motion.p>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}

"use client";

import ThreeScene from './ThreeScene';
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
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <ThreeScene />
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
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.05em]"
                        style={{
                            fontFamily: 'var(--font-syne)',
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
                        className="text-[10px] sm:text-xs md:text-base lg:text-lg tracking-[0.15em] md:tracking-[0.3em] font-light opacity-70 px-4"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--foreground)'
                        }}
                    >
                        AI-FORWARD DEVELOPER & TECHNICAL DESIGNER
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

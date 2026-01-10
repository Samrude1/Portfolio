"use client";

import { useTheme, ColorTheme } from './ThemeProvider';
import { Sun, Moon, Palette } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
    const { mode, toggleMode } = useTheme();

    return (
        <button
            onClick={toggleMode}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full glass backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 shadow-lg"
            aria-label="Toggle light/dark mode"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={mode}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {mode === 'dark' ? (
                        <Sun size={24} className="text-yellow-400" />
                    ) : (
                        <Moon size={24} className="text-slate-700" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}

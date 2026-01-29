"use client";

import Link from 'next/link';
import { Sun, Moon, ArrowDownRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
    const { mode, toggleMode } = useTheme();

    const navLinks = [
        { name: 'WORK', href: '#work' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'ABOUT', href: '#about' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 md:py-6 pointer-events-none">
                <ul className="flex gap-2 sm:gap-4 md:gap-8 px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full glass pointer-events-auto items-center antialiased">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-[10px] sm:text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity duration-300 font-medium whitespace-nowrap"
                                style={{ color: 'var(--foreground)' }}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={toggleMode}
                            className="p-1.5 md:p-2.5 rounded-full opacity-70 hover:opacity-100 transition-all duration-300 hover:bg-white/10"
                            style={{ color: 'var(--foreground)' }}
                            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {mode === 'dark' ? <Sun size={16} className="md:w-5 md:h-5" /> : <Moon size={16} className="md:w-5 md:h-5" />}
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Subtle AI Banner */}
            <div className="fixed top-24 left-0 right-0 z-40 flex justify-center pointer-events-none">
                <div
                    className="px-5 py-2.5 rounded-full text-sm tracking-wide opacity-60 hover:opacity-90 transition-opacity pointer-events-auto flex items-center gap-2"
                    style={{
                        backgroundColor: 'var(--surface)',
                        borderWidth: '1px',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                    }}
                >
                    <span>Live AI Agent</span>
                    <ArrowDownRight size={16} className="text-primary" />
                </div>
            </div>
        </>
    );
}

"use client";

import { Github, Linkedin, Gamepad2, Palette } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-8 pb-24 mt-20 border-t backdrop-blur-sm" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 0.20; }
                    50% { opacity: 0.35; }
                }
                @keyframes glitch {
                    0%   { transform: translate(0); }
                    15%  { transform: translate(-2px, 1px) skewX(-2deg); }
                    30%  { transform: translate(2px, -1px) skewX(2deg); }
                    45%  { transform: translate(-1px, 2px); }
                    60%  { transform: translate(1px, -2px) skewX(-1deg); }
                    75%  { transform: translate(-2px, 1px); }
                    90%  { transform: translate(2px, 0px); }
                    100% { transform: translate(0); }
                }
                .easter-egg {
                    animation: blink 2.8s ease-in-out infinite;
                    cursor: pointer;
                    display: inline-block;
                }
                .easter-egg:hover {
                    animation: glitch 0.3s linear infinite;
                    opacity: 1 !important;
                    text-shadow: 0 0 8px #00ff41, 0 0 16px #00ff41;
                    color: #00ff41 !important;
                }
            `}</style>
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-sm opacity-60 flex items-center gap-1" style={{ color: 'var(--foreground)' }}>
                    &copy; {new Date().getFullYear()} Sami Rautanen.
                <Link
                        href="https://mr-house-umber.vercel.app/"
                        target="_blank"
                        className="easter-egg ml-2 inline-block"
                        aria-hidden="true"
                        tabIndex={-1}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/robco.png" alt="" width={16} height={16} style={{ imageRendering: 'pixelated' }} />
                    </Link>
                </div>

                <div className="flex gap-6 items-center">
                    <Link
                        href="https://github.com/Samrude1"
                        target="_blank"
                        className="opacity-60 hover:opacity-100 hover:text-primary transition-all hover:scale-110"
                        style={{ color: 'var(--foreground)' }}
                        title="GitHub"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/sami-rautanen-022095325"
                        target="_blank"
                        className="opacity-60 hover:opacity-100 hover:text-primary transition-all hover:scale-110"
                        style={{ color: 'var(--foreground)' }}
                        title="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="https://sr3design.itch.io/"
                        target="_blank"
                        className="opacity-60 hover:opacity-100 hover:text-primary transition-all hover:scale-110"
                        style={{ color: 'var(--foreground)' }}
                        title="Itch.io"
                    >
                        <Gamepad2 size={20} />
                    </Link>
                    <Link
                        href="https://www.artstation.com/samrude"
                        target="_blank"
                        className="opacity-60 hover:opacity-100 hover:text-primary transition-all hover:scale-110"
                        style={{ color: 'var(--foreground)' }}
                        title="ArtStation"
                    >
                        <Palette size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

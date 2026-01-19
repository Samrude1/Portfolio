import { Github, Linkedin, Mail, Gamepad2, Palette } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-8 pb-24 mt-20 border-t backdrop-blur-sm" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-sm opacity-60" style={{ color: 'var(--foreground)' }}>
                    &copy; {new Date().getFullYear()} Sami Rautanen.
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

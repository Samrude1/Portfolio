"use client";

import Link from 'next/link';

export default function Navbar() {
    const navLinks = [
        { name: 'WORK', href: '#work' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'ABOUT', href: '#about' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
            <ul className="flex gap-8 px-8 py-3 rounded-full glass pointer-events-auto">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className="text-sm tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity duration-300 font-medium"
                            style={{ color: 'var(--foreground)' }}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

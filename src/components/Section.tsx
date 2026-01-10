"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
    id: string;
    className?: string;
    children: ReactNode;
    containerClassName?: string;
}

export default function Section({ id, className, children, containerClassName }: SectionProps) {
    return (
        <section id={id} className={clsx("relative w-full py-24 px-6 md:px-12", className)}>
            <div className={clsx("max-w-7xl mx-auto", containerClassName)}>
                {children}
            </div>
        </section>
    );
}

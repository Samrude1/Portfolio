"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
    id: string;
    className?: string;
    children: ReactNode;
    containerClassName?: string;
    alternating?: boolean; // For light gray background in light mode
}

export default function Section({ id, className, children, containerClassName, alternating = false }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                "relative w-full pt-32 pb-24 md:pt-40 px-6 md:px-12 scroll-mt-32",
                alternating && "bg-gray-50 dark:bg-gray-900/30",
                className
            )}
        >
            <div className={clsx("max-w-7xl mx-auto", containerClassName)}>
                {children}
            </div>
        </section>
    );
}

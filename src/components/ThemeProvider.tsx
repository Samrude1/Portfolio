"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ColorTheme = 'monochrome' | 'ai-purple' | 'ocean-blue' | 'forest-green';
export type Mode = 'dark' | 'light';

interface ThemeContextType {
    theme: ColorTheme;
    mode: Mode;
    setTheme: (theme: ColorTheme) => void;
    setMode: (mode: Mode) => void;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<ColorTheme>('ai-purple');
    const [mode, setModeState] = useState<Mode>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load from localStorage
        const savedMode = localStorage.getItem('mode') as Mode;

        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (savedMode) setModeState(savedMode);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Update document clasess
        document.documentElement.setAttribute('data-mode', mode);

        // Save to localStorage
        localStorage.setItem('mode', mode);
    }, [mode, mounted]);

    const setTheme = (newTheme: ColorTheme) => {
        setThemeState(newTheme);
    };

    const setMode = (newMode: Mode) => {
        setModeState(newMode);
    };

    const toggleMode = () => {
        setModeState(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}

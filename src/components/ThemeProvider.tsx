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
    const [mode, setModeState] = useState<Mode>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        // Load from localStorage but default to light
        const savedMode = localStorage.getItem('portfolio-mode') as Mode;
        if (savedMode === 'dark' || savedMode === 'light') {
            setModeState(savedMode);
        } else {
            setModeState('light'); // Default to light
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Update document clasess
        document.documentElement.setAttribute('data-mode', mode);

        // Save to localStorage
        localStorage.setItem('portfolio-mode', mode);
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

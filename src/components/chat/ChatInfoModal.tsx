"use client";

import { motion } from "framer-motion";
import { Bot, X } from "lucide-react";

interface ChatInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const features = [
    { icon: "✨", text: "Built by Sami Rautanen" },
    { icon: "🛡️", text: "Guardrails: Stays on-topic" },
    { icon: "📧", text: "Email integration for leads" },
    { icon: "💾", text: "Lead capture system" },
    { icon: "🔔", text: "Push notifications (Pushover)" },
    { icon: "⚡", text: "Python, FastAPI, Gemini" },
];

export default function ChatInfoModal({ isOpen, onClose }: ChatInfoModalProps) {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[60] flex items-center justify-center p-4"
        >
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative w-full max-w-[300px] p-6 border rounded-2xl shadow-2xl z-10"
                style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                    backgroundImage: "linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)",
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1 rounded-full opacity-60 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--foreground)" }}
                    aria-label="Close modal"
                >
                    <X size={16} />
                </button>

                <h4 className="font-bold mb-4 text-base flex items-center gap-2" style={{ color: "var(--foreground)" }}>
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                        <Bot size={14} className="text-primary" />
                    </div>
                    About This AI Agent
                </h4>

                <ul className="space-y-3 mb-6">
                    {features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                            <span className="text-primary mt-0.5">{item.icon}</span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-4 border-t text-xs flex justify-between items-center" style={{ borderColor: "var(--border)" }}>
                    <span className="opacity-60">Status: <span className="text-green-500 font-medium">Online</span></span>
                    <span className="opacity-60">Limit: <span style={{ color: "var(--primary)" }}>5 msg/min</span></span>
                </div>
            </motion.div>
        </motion.div>
    );
}

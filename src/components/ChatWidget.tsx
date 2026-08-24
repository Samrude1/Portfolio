"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Info } from "lucide-react";
import ChatMessageItem, { Message } from "./chat/ChatMessageItem";
import ChatInfoModal from "./chat/ChatInfoModal";

type BackendStatus = "unknown" | "awake" | "sleeping" | "waking";

const INITIAL_MESSAGES: Message[] = [
    {
        role: "assistant",
        content: "Hi! I'm Sami. Ask me anything about my skills, projects, or experience with AI agents.",
    },
];

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFirstRequest, setIsFirstRequest] = useState(true);
    const [backendStatus, setBackendStatus] = useState<BackendStatus>("unknown");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, scrollToBottom]);

    // Health check to detect if backend is sleeping
    const checkBackendHealth = async (retries = 3): Promise<boolean> => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

        for (let i = 0; i < retries; i++) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);

                const res = await fetch(`${apiUrl}/health`, {
                    signal: controller.signal,
                });
                clearTimeout(timeoutId);

                if (res.ok) {
                    setBackendStatus("awake");
                    return true;
                }
            } catch {
                if (i === 0) {
                    setBackendStatus("waking");
                }
                await new Promise((resolve) =>
                    setTimeout(resolve, Math.min(1000 * Math.pow(2, i), 10000))
                );
            }
        }

        setBackendStatus("sleeping");
        return false;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = inputValue.trim();
        if (!trimmed || isLoading) return;

        const userMsg: Message = { role: "user", content: trimmed };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsLoading(true);

        try {
            if (isFirstRequest && backendStatus !== "awake") {
                const isHealthy = await checkBackendHealth(5);
                if (!isHealthy) {
                    throw new Error("Backend is not responding. It might be sleeping.");
                }
            }

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
            const res = await fetch(`${apiUrl}/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userMsg.content,
                    history: messages,
                }),
            });

            if (!res.ok) throw new Error("Failed to fetch");

            const data = await res.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
            setIsFirstRequest(false);
        } catch (error) {
            console.error(error);
            let errorMessage =
                "I'm having trouble connecting to my brain right now. Please try again later!";

            if (backendStatus === "waking") {
                errorMessage =
                    "⏳ My backend is waking up from sleep (Render free tier). This takes ~30-60 seconds. Please try again in a moment!";
            } else if (backendStatus === "sleeping") {
                errorMessage =
                    "😴 My backend is sleeping (Render free tier). I'm trying to wake it up... Please wait 30-60 seconds and try again!";
            }

            setMessages((prev) => [...prev, { role: "assistant", content: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-[350px] sm:w-[400px] h-[500px] backdrop-blur-xl border rounded-2xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden mb-4 antialiased"
                        style={{
                            backgroundColor: "var(--surface)",
                            borderColor: "var(--border)",
                        }}
                    >
                        {/* Header */}
                        <div
                            className="p-4 border-b flex items-center justify-between relative"
                            style={{
                                borderColor: "var(--border)",
                                backgroundColor: "var(--surface-hover)",
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                                    <Bot size={18} className="text-primary" />
                                </div>
                                <div>
                                    <h3
                                        className="text-sm font-medium"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        Sami AI Clone
                                    </h3>
                                    <p
                                        className="text-xs opacity-60"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        Built by me • Python + Gemini
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setShowInfo(!showInfo)}
                                    className="p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100"
                                    style={{ color: "var(--foreground)" }}
                                    aria-label="Bot Info"
                                >
                                    <Info size={20} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 rounded-full transition-colors opacity-70 hover:opacity-100"
                                    style={{ color: "var(--foreground)" }}
                                    aria-label="Close chat"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages List */}
                        <div
                            className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-thin"
                            style={{ color: "var(--foreground)" }}
                        >
                            {messages.map((msg, i) => (
                                <ChatMessageItem key={i} message={msg} />
                            ))}

                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                                        <Bot size={14} className="text-primary animate-pulse" />
                                    </div>
                                    <div
                                        className="border p-3 rounded-lg"
                                        style={{
                                            backgroundColor: "var(--surface-hover)",
                                            borderColor: "var(--border)",
                                        }}
                                    >
                                        {backendStatus === "waking" ? (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-1 items-center">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                                                </div>
                                                <span
                                                    className="text-xs opacity-60 italic"
                                                    style={{ color: "var(--foreground)" }}
                                                >
                                                    Waking up backend from sleep... (~30-60s)
                                                </span>
                                            </div>
                                        ) : isFirstRequest ? (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-1 items-center">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                                                </div>
                                                <span
                                                    className="text-xs opacity-60 italic"
                                                    style={{ color: "var(--foreground)" }}
                                                >
                                                    Waking up my neural networks...
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex gap-1 items-center">
                                                <span
                                                    className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.3s]"
                                                    style={{
                                                        backgroundColor: "var(--primary)",
                                                        opacity: 0.6,
                                                    }}
                                                ></span>
                                                <span
                                                    className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.15s]"
                                                    style={{
                                                        backgroundColor: "var(--primary)",
                                                        opacity: 0.6,
                                                    }}
                                                ></span>
                                                <span
                                                    className="w-1.5 h-1.5 rounded-full animate-bounce"
                                                    style={{
                                                        backgroundColor: "var(--primary)",
                                                        opacity: 0.6,
                                                    }}
                                                ></span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="p-4 border-t"
                            style={{
                                borderColor: "var(--border)",
                                backgroundColor: "var(--surface-hover)",
                            }}
                        >
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about my projects..."
                                    className="w-full border rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 transition-all"
                                    style={{
                                        backgroundColor: "var(--surface)",
                                        borderColor: "var(--border)",
                                        color: "var(--foreground)",
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>

                        {/* Info Modal Overlay */}
                        <AnimatePresence>
                            {showInfo && (
                                <ChatInfoModal
                                    isOpen={showInfo}
                                    onClose={() => setShowInfo(false)}
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto flex items-center gap-3 px-5 py-4 bg-primary text-white font-bold rounded-full shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
                <Bot size={24} />
                <span className="hidden sm:inline">Ask AI Clone</span>
            </motion.button>
        </div>
    );
}

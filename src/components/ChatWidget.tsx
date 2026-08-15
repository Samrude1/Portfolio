"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Info } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm Sami. Ask me anything about my skills, projects, or experience with AI agents." }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFirstRequest, setIsFirstRequest] = useState(true);
    const [backendStatus, setBackendStatus] = useState<'unknown' | 'awake' | 'sleeping' | 'waking'>('unknown');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Health check to detect if backend is sleeping
    const checkBackendHealth = async (retries = 3): Promise<boolean> => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

        for (let i = 0; i < retries; i++) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

                const res = await fetch(`${apiUrl}/health`, {
                    signal: controller.signal,
                });
                clearTimeout(timeoutId);

                if (res.ok) {
                    setBackendStatus('awake');
                    return true;
                }
            } catch {
                console.log(`Health check attempt ${i + 1}/${retries} failed`);
                if (i === 0) {
                    setBackendStatus('waking');
                }
                // Wait before retry (exponential backoff)
                await new Promise(resolve => setTimeout(resolve, Math.min(1000 * Math.pow(2, i), 10000)));
            }
        }


        setBackendStatus('sleeping');
        return false;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMsg: Message = { role: "user", content: inputValue };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsLoading(true);

        try {
            // Check backend health on first request
            if (isFirstRequest && backendStatus !== 'awake') {
                const isHealthy = await checkBackendHealth(5); // More retries for first request
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
                    history: messages // Send context
                }),
            });

            if (!res.ok) throw new Error("Failed to fetch");

            const data = await res.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
            setIsFirstRequest(false);
        } catch (error) {
            console.error(error);
            let errorMessage = "I'm having trouble connecting to my brain right now. Please try again later!";

            if (backendStatus === 'waking') {
                errorMessage = "⏳ My backend is waking up from sleep (Render free tier). This takes ~30-60 seconds. Please try again in a moment!";
            } else if (backendStatus === 'sleeping') {
                errorMessage = "😴 My backend is sleeping (Render free tier). I'm trying to wake it up... Please wait 30-60 seconds and try again!";
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
                            backgroundColor: 'var(--surface)',
                            borderColor: 'var(--border)'
                        }}
                    >
                        {/* Header */}
                        <div className="p-4 border-b flex items-center justify-between relative" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-hover)' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                                    <Bot size={18} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>Sami AI Clone</h3>
                                    <p className="text-xs opacity-60" style={{ color: 'var(--foreground)' }}>Built by me • Python + Gemini</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <button
                                        onClick={() => setShowInfo(!showInfo)}
                                        className="p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100"
                                        style={{ color: 'var(--foreground)' }}
                                        aria-label="Bot Info"
                                    >
                                        <Info size={20} />
                                    </button>
                                    {/* Info Panel will be rendered as an overlay for better readability */}
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 rounded-full transition-colors opacity-70 hover:opacity-100"
                                    style={{ color: 'var(--foreground)' }}
                                    aria-label="Close chat"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-thin" style={{ color: 'var(--foreground)' }}>
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${msg.role === "assistant"
                                            ? "bg-primary/20 border-primary/50 text-primary"
                                            : "bg-white/10 border-white/20 text-white"
                                            }`}
                                    >
                                        {msg.role === "assistant" ? <Bot size={14} /> : <User size={14} />}
                                    </div>
                                    <div
                                        className={`p-3 rounded-lg max-w-[80%] leading-relaxed ${msg.role === "user" ? "font-medium" : "border"}`}
                                        style={msg.role === "user"
                                            ? { backgroundColor: 'var(--primary)', color: '#ffffff' }
                                            : { backgroundColor: 'var(--surface-hover)', color: 'var(--foreground)', borderColor: 'var(--border)' }
                                        }
                                    >
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                a: (props) => (
                                                    <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline" />
                                                ),
                                                ul: (props) => <ul {...props} className="list-disc list-inside my-1" />,
                                                ol: (props) => <ol {...props} className="list-decimal list-inside my-1" />,
                                                p: (props) => <p {...props} className="mb-1 last:mb-0" />,
                                            }}
                                        >
                                            {msg.content}
                                        </ReactMarkdown>


                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                                        <Bot size={14} className="text-primary animate-pulse" />
                                    </div>
                                    <div className="border p-3 rounded-lg" style={{ backgroundColor: 'var(--surface-hover)', borderColor: 'var(--border)' }}>
                                        {backendStatus === 'waking' ? (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-1 items-center">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                                                </div>
                                                <span className="text-xs opacity-60 italic" style={{ color: 'var(--foreground)' }}>Waking up backend from sleep... (~30-60s)</span>
                                            </div>
                                        ) : isFirstRequest ? (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-1 items-center">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                                                </div>
                                                <span className="text-xs opacity-60 italic" style={{ color: 'var(--foreground)' }}>Waking up my neural networks...</span>
                                            </div>
                                        ) : (
                                            <div className="flex gap-1 items-center">
                                                <span className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.3s]" style={{ backgroundColor: 'var(--primary)', opacity: 0.6 }}></span>
                                                <span className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.15s]" style={{ backgroundColor: 'var(--primary)', opacity: 0.6 }}></span>
                                                <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: 'var(--primary)', opacity: 0.6 }}></span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-hover)' }}>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about my projects..."
                                    className="w-full border rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 transition-all"
                                    style={{
                                        backgroundColor: 'var(--surface)',
                                        borderColor: 'var(--border)',
                                        color: 'var(--foreground)'
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
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-[60] flex items-center justify-center p-4"
                                >
                                    <div
                                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                        onClick={() => setShowInfo(false)}
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                        className="relative w-full max-w-[300px] p-6 border rounded-2xl shadow-2xl z-10"
                                        style={{
                                            backgroundColor: 'var(--background)',
                                            borderColor: 'var(--border)',
                                            color: 'var(--foreground)',
                                            backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)'
                                        }}
                                    >
                                        <button
                                            onClick={() => setShowInfo(false)}
                                            className="absolute top-4 right-4 p-1 rounded-full opacity-60 hover:opacity-100 transition-opacity"
                                            style={{ color: 'var(--foreground)' }}
                                        >
                                            <X size={16} />
                                        </button>

                                        <h4 className="font-bold mb-4 text-base flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                                                <Bot size={14} className="text-primary" />
                                            </div>
                                            About This AI Agent
                                        </h4>

                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start gap-3 text-sm">
                                                <span className="text-primary mt-0.5">✨</span>
                                                <span>Built by Sami Rautanen</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm">
                                                <span className="text-primary mt-0.5">🛡️</span>
                                                <span>Guardrails: Stays on-topic</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm">
                                                <span className="text-primary mt-0.5">📧</span>
                                                <span>Email integration for leads</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm">
                                                <span className="text-primary mt-0.5">💾</span>
                                                <span>Lead capture system</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm">
                                                <span className="text-primary mt-0.5">🔔</span>
                                                <span>Push notifications (Pushover)</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm">
                                                <span className="text-primary mt-0.5">⚡</span>
                                                <span>Python, FastAPI, Gemini</span>
                                            </li>
                                        </ul>

                                        <div className="pt-4 border-t text-xs flex justify-between items-center" style={{ borderColor: 'var(--border)' }}>
                                            <span className="opacity-60">Status: <span className="text-green-500 font-medium">Online</span></span>
                                            <span className="opacity-60">Limit: <span style={{ color: 'var(--primary)' }}>5 msg/min</span></span>
                                        </div>
                                    </motion.div>
                                </motion.div>
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

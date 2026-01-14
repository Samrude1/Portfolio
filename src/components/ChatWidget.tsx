"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Info } from "lucide-react";
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
        { role: "assistant", content: "Hi! I'm Sami's AI Clone. Ask me anything about his skills, background, or AI Agents." }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFirstRequest, setIsFirstRequest] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMsg: Message = { role: "user", content: inputValue };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsLoading(true);

        try {
            // In production, replace with your Render backend URL
            // For local dev, use localhost:8000
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
            setMessages((prev) => [...prev, { role: "assistant", content: "I'm having trouble connecting to my brain right now. Please try again later!" }]);
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
                        className="w-[350px] sm:w-[400px] h-[500px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between relative">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                                    <Bot size={18} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-white">Sami AI Clone</h3>
                                    <p className="text-xs text-white/50">Powered by Agentic Logic</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <button
                                        onClick={() => setShowInfo(!showInfo)}
                                        className="p-1.5 hover:bg-white/20 rounded-full transition-colors text-white/70 hover:text-white"
                                        aria-label="Bot Info"
                                    >
                                        <Info size={20} />
                                    </button>
                                    <AnimatePresence>
                                        {showInfo && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute right-0 top-8 w-64 p-3 bg-black/90 border border-white/20 rounded-xl text-xs text-white/80 shadow-xl z-50 backdrop-blur-md"
                                            >
                                                <h4 className="font-bold text-white mb-1">Bot Usage Limits</h4>
                                                <ul className="list-disc list-inside space-y-1">
                                                    <li>Rate Limit: <span className="text-primary">5 msg/min</span></li>
                                                    <li>Powered by Gemini Flash</li>
                                                    <li>May pause if limits exceeded.</li>
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                    aria-label="Close chat"
                                >
                                    <X size={18} className="text-white/70" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-white/10">
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
                                        className={`p-3 rounded-lg max-w-[80%] leading-relaxed ${msg.role === "user"
                                            ? "bg-primary text-black font-medium"
                                            : "bg-white/5 text-white/90 border border-white/10"
                                            }`}
                                    >
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                a: ({ node, ...props }) => (
                                                    <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline" />
                                                ),
                                                ul: ({ node, ...props }) => <ul {...props} className="list-disc list-inside my-1" />,
                                                ol: ({ node, ...props }) => <ol {...props} className="list-decimal list-inside my-1" />,
                                                p: ({ node, ...props }) => <p {...props} className="mb-1 last:mb-0" />,
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
                                    <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                                        {isFirstRequest ? (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-1 items-center">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                                                </div>
                                                <span className="text-xs text-white/50 italic">Waking up my neural networks...</span>
                                            </div>
                                        ) : (
                                            <div className="flex gap-1 items-center">
                                                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about my projects..."
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20"
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

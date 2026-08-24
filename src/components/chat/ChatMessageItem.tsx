"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, User } from "lucide-react";

export interface Message {
    role: "user" | "assistant";
    content: string;
}

interface ChatMessageItemProps {
    message: Message;
}

export default function ChatMessageItem({ message }: ChatMessageItemProps) {
    const isUser = message.role === "user";

    return (
        <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
            <div
                className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${
                    isUser
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-primary/20 border-primary/50 text-primary"
                }`}
            >
                {isUser ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div
                className={`p-3 rounded-lg max-w-[80%] leading-relaxed ${isUser ? "font-medium" : "border"}`}
                style={
                    isUser
                        ? { backgroundColor: "var(--primary)", color: "#ffffff" }
                        : {
                              backgroundColor: "var(--surface-hover)",
                              color: "var(--foreground)",
                              borderColor: "var(--border)",
                          }
                }
            >
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        a: (props) => (
                            <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline"
                            />
                        ),
                        ul: (props) => <ul {...props} className="list-disc list-inside my-1" />,
                        ol: (props) => <ol {...props} className="list-decimal list-inside my-1" />,
                        p: (props) => <p {...props} className="mb-1 last:mb-0" />,
                    }}
                >
                    {message.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}

"use client";

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AmbientBackground() {
    const [isMuted, setIsMuted] = useState(true);
    const audioContextRef = useRef<AudioContext | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);
    const oscillatorsRef = useRef<OscillatorNode[]>([]);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Initialize Audio Context on first interaction
        const initAudio = () => {
            if (!audioContextRef.current) {
                const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
                if (!AudioContextClass) return;
                const ctx = new AudioContextClass();
                audioContextRef.current = ctx;

                // Master Gain (Volume Control)
                const masterGain = ctx.createGain();
                masterGain.gain.value = 0; // Start muted
                masterGain.connect(ctx.destination);
                gainNodeRef.current = masterGain;

                // Create nice ethereal drone
                // Base Frequencies for a suspended chord (Futuristic/Ethereal)
                // Using frequencies around 100-300Hz for subtle background pad
                const freqs = [110.00, 164.81, 196.00, 220.00]; // Am9 chordish (A2, E3, G3, A3)

                freqs.forEach((f) => {
                    const osc = ctx.createOscillator();
                    const oscGain = ctx.createGain();


                    osc.type = 'sine';
                    osc.frequency.value = f;

                    // Detune slightly for chorus effect
                    osc.detune.value = (Math.random() * 10) - 5;

                    // LFO for movement (Amplitude Modulation)
                    const lfo = ctx.createOscillator();
                    lfo.frequency.value = 0.1 + (Math.random() * 0.1); // Very slow

                    const lfoGain = ctx.createGain();
                    lfoGain.gain.value = 0.3; // Modulation depth

                    lfo.connect(lfoGain);
                    lfoGain.connect(oscGain.gain);

                    osc.connect(oscGain);
                    oscGain.connect(masterGain);
                    oscGain.gain.value = 0.15; // Low individual volume

                    osc.start();
                    lfo.start();

                    oscillatorsRef.current.push(osc);
                    oscillatorsRef.current.push(lfo);
                });
            }
        };

        if (hasInteracted && !isMuted) {
            initAudio();
            // Fade in
            if (audioContextRef.current?.state === 'suspended') {
                audioContextRef.current.resume();
            }
            if (gainNodeRef.current) {
                gainNodeRef.current.gain.setTargetAtTime(0.3, audioContextRef.current!.currentTime, 2);
            }
        } else {
            // Fade out
            if (gainNodeRef.current && audioContextRef.current) {
                gainNodeRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.5);
            }
        }

        return () => {
            if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                audioContextRef.current.close().catch(() => {});
            }
        };

    }, [hasInteracted, isMuted]);

    const toggleSound = () => {
        if (!hasInteracted) setHasInteracted(true);
        setIsMuted(!isMuted);
    };

    return (
        <button
            onClick={toggleSound}
            className="fixed bottom-8 left-8 z-50 p-4 rounded-full glass backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 shadow-lg group"
            aria-label="Toggle ambient sound"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={isMuted ? 'muted' : 'playing'}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isMuted ? (
                        <VolumeX size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                    ) : (
                        <Volume2 size={24} className="text-primary animate-pulse" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}

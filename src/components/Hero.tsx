'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeroProps {
    title: string
    subtitle: string
    ctaText: string
    ctaLink: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
}

export default function Hero({
    title,
    subtitle,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
}: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                            <Sparkles size={16} className="text-cyan-400" />
                            <span className="text-sm text-cyan-400">DATA INTELLIGENCE AGENCY</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="gradient-text">{title}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                            {subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={ctaLink}
                                className="group px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 hover:gap-3 glow"
                            >
                                {ctaText}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            {secondaryCtaText && secondaryCtaLink && (
                                <a
                                    href={secondaryCtaLink}
                                    className="px-8 py-4 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center"
                                >
                                    {secondaryCtaText}
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Right content - Retention Rate Circle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center"
                    >
                        <div className="relative w-80 h-80">
                            {/* Outer glow circle */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl" />

                            {/* Main circle */}
                            <div className="relative w-full h-full rounded-full glass border-2 border-cyan-500/20 flex flex-col items-center justify-center">
                                <div className="text-7xl font-bold gradient-text">99%</div>
                                <div className="text-gray-400 mt-2">Retention Rate</div>
                            </div>

                            {/* Decorative rings */}
                            <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-pulse" style={{ animationDuration: '3s' }} />
                            <div className="absolute inset-4 rounded-full border border-cyan-500/5 animate-pulse" style={{ animationDuration: '2s' }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

'use client'

import { motion } from 'framer-motion'
import { Search, TrendingUp, BarChart, Zap, ArrowRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface ExpertiseItem {
    title: string
    description: string
    icon: string
    link: string
}

interface ExpertiseProps {
    items: ExpertiseItem[]
}

const iconMap: Record<string, LucideIcon> = {
    Search,
    TrendingUp,
    BarChart,
    Zap,
}

export default function Expertise({ items }: ExpertiseProps) {
    return (
        <section id="expertise" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
                    <p className="text-xl text-gray-400">
                        Comprehensive growth solutions for modern brands.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Zap
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group glass rounded-2xl p-8 hover:border-cyan-500/30 transition-all cursor-pointer"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                                        <Icon size={24} className="text-cyan-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                        <p className="text-gray-400 mb-4">{item.description}</p>
                                        <a
                                            href={item.link}
                                            className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all"
                                        >
                                            Learn more
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

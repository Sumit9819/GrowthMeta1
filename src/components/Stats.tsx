'use client'

import { motion } from 'framer-motion'

interface Stat {
    number: string
    label: string
}

interface StatsProps {
    stats: Stat[]
}

export default function Stats({ stats }: StatsProps) {
    return (
        <section className="py-24 md:py-32 border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center space-y-3"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
                                {stat.number}
                            </div>
                            <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

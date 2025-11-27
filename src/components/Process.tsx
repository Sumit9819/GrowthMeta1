'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
    stepNumber: string
    title: string
    description: string
}

interface ProcessProps {
    steps: ProcessStep[]
}

export default function Process({ steps }: ProcessProps) {
    return (
        <section id="process" className="py-20 md:py-32 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        The GrowthMeta Process
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass rounded-2xl p-6 h-full">
                                <div className="text-5xl font-bold text-cyan-500/20 mb-4">
                                    {step.stepNumber}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

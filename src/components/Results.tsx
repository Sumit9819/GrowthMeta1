'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CaseStudy {
    metric: string
    title: string
    description: string
    tags: string[]
    link: string
}

interface ResultsProps {
    caseStudies: CaseStudy[]
}

export default function Results({ caseStudies }: ResultsProps) {
    return (
        <section id="results" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Results</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group glass rounded-2xl p-8 hover:border-cyan-500/30 transition-all"
                        >
                            <div className={`text-5xl font-bold mb-4 ${study.metric.startsWith('+') ? 'text-green-400' :
                                    study.metric.startsWith('-') ? 'text-red-400' :
                                        'text-cyan-400'
                                }`}>
                                {study.metric}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                            <p className="text-gray-400 mb-6">{study.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {study.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={study.link}
                                className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all"
                            >
                                Read Case Study
                                <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

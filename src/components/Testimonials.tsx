'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface Testimonial {
    quote: string
    author: string
    role: string
}

interface TestimonialsProps {
    testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-black to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Feedback</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8"
                        >
                            <Quote size={32} className="text-cyan-500/30 mb-4" />
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <div className="font-semibold">{testimonial.author}</div>
                                <div className="text-sm text-gray-400">{testimonial.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

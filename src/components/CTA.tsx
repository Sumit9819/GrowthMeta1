'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />

                    <div className="relative space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Ready to Scale Your Revenue?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Stop guessing. Start growing. Get a comprehensive audit of your current
                            digital presence and a roadmap to market dominance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <a
                                href="#"
                                className="group px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 hover:gap-3 glow"
                            >
                                Book Free Strategy Call
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#"
                                className="px-8 py-4 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import { client } from '@/../sanity/lib/client'

async function getContactData() {
    if (!client) {
        return [
            {
                question: 'What industries do you serve?',
                answer: 'We specialize in e-commerce, SaaS, D2C brands, and service-based businesses looking to scale through data-driven digital marketing.',
            },
            {
                question: 'How long until we see results?',
                answer: 'Most clients see initial improvements within 30-60 days, with significant growth typically occurring in months 3-6 as strategies mature.',
            },
            {
                question: 'What is your pricing structure?',
                answer: 'We offer customized packages based on your specific needs and growth goals. Contact us for a free consultation and proposal.',
            },
            {
                question: 'Do you work with small businesses?',
                answer: 'Yes! We work with businesses of all sizes. Our strategies scale to fit your budget while delivering maximum ROI.',
            },
        ]
    }

    try {
        const faqs = await client.fetch(
            '*[_type == "faq"] | order(_createdAt asc)',
            {},
            { next: { tags: ['content'] } }
        )
        return faqs
    } catch (error) {
        console.error('Error fetching FAQs:', error)
        return []
    }
}

export default async function ContactPage() {
    const faqs = await getContactData()

    return (
        <div className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32 md:py-40 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                        <span className="gradient-text">Get In Touch</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Ready to scale your revenue? Let's discuss how we can help you grow.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="glass rounded-xl p-8">
                            <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
                            <p className="text-gray-400 mb-4">Get in touch via email</p>
                            <a href="mailto:hello@growthmeta.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                hello@growthmeta.com
                            </a>
                        </div>
                        <div className="glass rounded-xl p-8">
                            <h3 className="text-2xl font-semibold mb-4">Schedule a Call</h3>
                            <p className="text-gray-400 mb-4">Book a free strategy session</p>
                            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                Book Now →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ faqs={faqs} />

            <Footer />
        </div>
    )
}

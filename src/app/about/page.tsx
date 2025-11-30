import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
    return (
        <div className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32 md:py-40 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                        <span className="gradient-text">About Us</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        We're a data intelligence agency obsessed with turning complexity into clarity and insights into growth.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            We exist to help modern brands navigate the complexity of digital marketing through advanced analytics and data-driven strategies. Our mission is to transform raw data into measurable growth, enabling businesses to scale with confidence.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            We don't believe in one-size-fits-all solutions. Every business is unique, and so is our approach. We combine deep market analysis, competitive intelligence, and behavioral data to engineer precision marketing strategies that deliver results.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">Data-Driven</h3>
                                <p className="text-gray-400">Every decision backed by analytics and real-world performance data.</p>
                            </div>
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">Results-Focused</h3>
                                <p className="text-gray-400">We measure success by your growth, not vanity metrics.</p>
                            </div>
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">Transparent</h3>
                                <p className="text-gray-400">Full visibility into strategies, performance, and ROI.</p>
                            </div>
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">Scalable</h3>
                                <p className="text-gray-400">Strategies that grow with your business, from startup to enterprise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

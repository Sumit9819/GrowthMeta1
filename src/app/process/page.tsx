import { client } from '@/../sanity/lib/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Process from '@/components/Process'

async function getProcessData() {
    if (!client) {
        return [
            {
                stepNumber: '01',
                title: 'Audit & Strategy',
                description: 'Deep-dive analysis of your current state and competitive landscape to identify opportunities.',
            },
            {
                stepNumber: '02',
                title: 'Execution',
                description: 'Implementation of data-driven campaigns across all channels with precision and focus.',
            },
            {
                stepNumber: '03',
                title: 'Optimization',
                description: 'Continuous testing and refinement for maximum performance and ROI.',
            },
            {
                stepNumber: '04',
                title: 'Scale',
                description: 'Accelerate growth while maintaining efficiency and profitability at every stage.',
            },
        ]
    }

    try {
        const process = await client.fetch(
            '*[_type == "process"] | order(stepNumber asc)',
            {},
            { next: { tags: ['content'] } }
        )
        return process
    } catch (error) {
        console.error('Error fetching process:', error)
        return []
    }
}

export default async function ProcessPage() {
    const processSteps = await getProcessData()

    return (
        <div className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32 md:py-40 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                        <span className="gradient-text">Our Process</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        A proven methodology that transforms data into measurable growth.
                    </p>
                </div>
            </section>

            {/* Process Steps */}
            <Process steps={processSteps} />

            <Footer />
        </div>
    )
}

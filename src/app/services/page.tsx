import { client } from '@/../sanity/lib/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Expertise from '@/components/Expertise'

async function getServicesData() {
    if (!client) {
        return [
            {
                title: 'SEO & Content',
                description: 'Dominate search rankings with data-backed content strategies that drive organic traffic and conversions.',
                icon: 'Search',
                link: '#',
            },
            {
                title: 'Paid Media (PPC)',
                description: 'High-intent traffic acquisition with maximized ROAS through strategic campaign management.',
                icon: 'TrendingUp',
                link: '#',
            },
            {
                title: 'Data Analytics',
                description: 'Turn raw data into actionable growth insights with advanced analytics and reporting.',
                icon: 'BarChart',
                link: '#',
            },
            {
                title: 'Conversion (CRO)',
                description: 'Optimize user journeys to turn visitors into revenue through systematic testing and optimization.',
                icon: 'Zap',
                link: '#',
            },
        ]
    }

    try {
        const expertise = await client.fetch(
            '*[_type == "expertise"] | order(_createdAt asc)',
            {},
            { next: { tags: ['content'] } }
        )
        return expertise
    } catch (error) {
        console.error('Error fetching services:', error)
        return []
    }
}

export default async function ServicesPage() {
    const services = await getServicesData()

    return (
        <div className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32 md:py-40 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                        <span className="gradient-text">Our Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Comprehensive growth solutions designed to scale your business through data-driven strategies.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <Expertise items={services} />

            <Footer />
        </div>
    )
}

import { client } from '@/../sanity/lib/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Results from '@/components/Results'
import Testimonials from '@/components/Testimonials'

async function getResultsData() {
    if (!client) {
        return {
            caseStudies: [
                {
                    metric: '+97%',
                    title: 'Lifestyle E-Commerce',
                    description: 'Scaled monthly revenue from $45k to $88k in 90 days through strategic PPC and CRO.',
                    tags: ['E-Commerce', 'PPC', 'CRO'],
                    link: '#',
                },
                {
                    metric: '3x',
                    title: 'SaaS Platform',
                    description: 'Tripled organic traffic and doubled demo requests with content-driven SEO strategy.',
                    tags: ['SaaS', 'SEO', 'Content'],
                    link: '#',
                },
                {
                    metric: '-24%',
                    title: 'D2C Brand',
                    description: 'Reduced cost per acquisition while increasing volume by 150% through optimization.',
                    tags: ['D2C', 'Paid Media'],
                    link: '#',
                },
            ],
            testimonials: [
                {
                    quote: 'GrowthMeta transformed our approach to marketing. Their data-driven strategies delivered results beyond our expectations.',
                    author: 'Sarah Chen',
                    role: 'CEO, LUXE BRAND',
                },
                {
                    quote: 'Working with GrowthMeta felt like having an elite in-house team. Their expertise and execution are unmatched.',
                    author: 'Michael Torres',
                    role: 'FOUNDER, TECHSTART',
                },
            ],
        }
    }

    try {
        const [caseStudies, testimonials] = await Promise.all([
            client.fetch('*[_type == "caseStudy"] | order(_createdAt asc)', {}, { next: { tags: ['content'] } }),
            client.fetch('*[_type == "testimonial"] | order(_createdAt asc)', {}, { next: { tags: ['content'] } }),
        ])
        return { caseStudies, testimonials }
    } catch (error) {
        console.error('Error fetching results:', error)
        return { caseStudies: [], testimonials: [] }
    }
}

export default async function ResultsPage() {
    const { caseStudies, testimonials } = await getResultsData()

    return (
        <div className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32 md:py-40 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                        <span className="gradient-text">Proven Results</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Real outcomes from real clients. See how we've helped businesses scale.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <Results caseStudies={caseStudies} />

            {/* Testimonials */}
            <Testimonials testimonials={testimonials} />

            <Footer />
        </div>
    )
}

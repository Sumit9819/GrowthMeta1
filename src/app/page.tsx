import { client } from '@/../sanity/lib/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Expertise from '@/components/Expertise'
import Process from '@/components/Process'
import Results from '@/components/Results'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

function getMockData() {
  return {
    hero: {
      title: 'Turn Data Into Measurable Growth.',
      subtitle: 'We decode market complexities using advanced analytics to engineer precision marketing strategies that scale revenue.',
      ctaText: 'Book Free Audit',
      ctaLink: '#contact',
      secondaryCtaText: 'View Our Work',
      secondaryCtaLink: '#results',
    },
    stats: [
      { number: '$264k+', label: 'Ad Spend Managed' },
      { number: '633+', label: 'Creative Launches' },
      { number: '238%', label: 'Avg ROAS Increase' },
      { number: '99%', label: 'Client Retention' },
    ],
    expertise: [
      {
        title: 'SEO & Content',
        description: 'Dominate search rankings with data-backed content strategies.',
        icon: 'Search',
        link: '#',
      },
      {
        title: 'Paid Media (PPC)',
        description: 'High-intent traffic acquisition with maximized ROAS.',
        icon: 'TrendingUp',
        link: '#',
      },
      {
        title: 'Data Analytics',
        description: 'Turn raw data into actionable growth insights.',
        icon: 'BarChart',
        link: '#',
      },
      {
        title: 'Conversion (CRO)',
        description: 'Optimize user journeys to turn visitors into revenue.',
        icon: 'Zap',
        link: '#',
      },
    ],
    process: [
      {
        stepNumber: '01',
        title: 'Audit & Strategy',
        description: 'Deep-dive analysis of your current state and competitive landscape.',
      },
      {
        stepNumber: '02',
        title: 'Execution',
        description: 'Implementation of data-driven campaigns across all channels.',
      },
      {
        stepNumber: '03',
        title: 'Optimization',
        description: 'Continuous testing and refinement for maximum performance.',
      },
      {
        stepNumber: '04',
        title: 'Scale',
        description: 'Accelerate growth while maintaining efficiency and profitability.',
      },
    ],
    caseStudies: [
      {
        metric: '+97%',
        title: 'Lifestyle E-Commerce',
        description: 'Scaled monthly revenue from $45k to $88k in 90 days.',
        tags: ['E-Commerce', 'PPC', 'CRO'],
        link: '#',
      },
      {
        metric: '3x',
        title: 'SaaS Platform',
        description: 'Tripled organic traffic and doubled demo requests.',
        tags: ['SaaS', 'SEO', 'Content'],
        link: '#',
      },
      {
        metric: '-24%',
        title: 'D2C Brand',
        description: 'Reduced cost per acquisition while increasing volume by 150%.',
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
    faqs: [
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
    ],
  }
}

async function getPageData() {
  // If Sanity client is not configured, return mock data directly
  if (!client) {
    return getMockData()
  }

  try {
    const [hero, stats, expertise, process, caseStudies, testimonials, faqs] = await Promise.all([
      client.fetch('*[_type == "hero"][0]', {}, { next: { tags: ['content'] } }),
      client.fetch('*[_type == "stats"] | order(_createdAt asc)', {}, { next: { tags: ['content'] } }),
      client.fetch('*[_type == "expertise"] | order(_createdAt asc)', {}, { next: { tags: ['content'] } }),
      client.fetch('*[_type == "process"] | order(stepNumber asc)', {}, { next: { tags: ['content'] } }),
      client.fetch('*[_type == "caseStudy"] | order(_createdAt asc)', {}, { next: { tags: ['content'] } }),
      client.fetch('*[_type == "testimonial"] | order(_createdAt asc)', {}, { next: { tags: ['content'] } }),
      client.fetch('*[_type == "faq"] | order(_createdAt asc)', {}, { next: { tags: ['content'] } }),
    ])

    return { hero, stats, expertise, process, caseStudies, testimonials, faqs }
  } catch (error) {
    console.error('Error fetching data:', error)
    return getMockData()
  }
}

export default async function Home() {
  const data = await getPageData()

  return (
    <div className="relative">
      <Navbar />
      <Hero {...data.hero} />
      <Stats stats={data.stats} />
      <Expertise items={data.expertise} />
      <Process steps={data.process} />
      <Results caseStudies={data.caseStudies} />
      <Testimonials testimonials={data.testimonials} />
      <FAQ faqs={data.faqs} />
      <CTA />
      <Footer />
    </div>
  )
}

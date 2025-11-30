import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        Services: [
            { name: 'SEO & Content', href: '/services' },
            { name: 'Paid Media (PPC)', href: '/services' },
            { name: 'Data Analytics', href: '/services' },
            { name: 'Conversion (CRO)', href: '/services' },
        ],
        Company: [
            { name: 'About Us', href: '/about' },
            { name: 'Process', href: '/process' },
            { name: 'Results', href: '/results' },
            { name: 'Contact', href: '/contact' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
        ],
    }

    return (
        <footer className="bg-black border-t border-white/10 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">GROWTHMETA</h3>
                        <p className="text-gray-400 text-sm">
                            Data-driven growth strategies for modern brands.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold mb-4">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} GrowthMeta. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Twitter
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            LinkedIn
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

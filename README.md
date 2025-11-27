# GrowthMeta - Next.js Website with Sanity CMS

A modern, high-performance marketing website built with Next.js 15, Sanity CMS, and Tailwind CSS. Features On-demand ISR for optimal performance and SEO.

## 🚀 Features

- **Next.js 15** with App Router
- **Sanity CMS** for content management
- **On-demand ISR** for fast updates
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **TypeScript** for type safety
- **Responsive Design** optimized for all devices

## 📦 Installation

```bash
# Install dependencies
npm install

# Create environment variables file
cp env.example .env.local
```

## 🔧 Environment Setup

Edit `.env.local` and add your Sanity project credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
REVALIDATION_SECRET=your_secret_here
```

## 🏃 Development

```bash
# Run development server
npm run dev

# Open browser at http://localhost:3000
```

## 📝 Sanity Setup

1. Create a new Sanity project at [sanity.io](https://www.sanity.io/)
2. Add your project ID to `.env.local`
3. Deploy the schemas from `sanity/schemaTypes/` to your Sanity Studio
4. Add content through Sanity Studio

### Sanity Schemas

- `hero` - Hero section content
- `stats` - Homepage statistics
- `expertise` - Service offerings
- `process` - Process steps
- `caseStudy` - Case studies/results
- `testimonial` - Client testimonials
- `faq` - Frequently asked questions

## 🔄 ISR Revalidation

The website uses On-demand ISR for instant content updates. To trigger revalidation:

```bash
POST https://your-domain.com/api/revalidate?secret=your_secret_here
```

Configure this as a webhook in your Sanity project settings.

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Components**: Modify components in `src/components/`
- **Content**: Update via Sanity Studio or fallback data in `src/app/page.tsx`

## 📄 License

MIT

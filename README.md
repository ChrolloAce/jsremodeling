# J&S Contractor Painters Corporation Website

A high-converting, professional painting company website built with Next.js, Tailwind CSS, and Framer Motion. Features a modern dark theme with orange accents, optimized for local SEO and lead generation in Miami.

## 🚀 Features

- **Modern Design**: Dark theme with orange accent colors matching construction industry aesthetics
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized images
- **SEO Optimized**: Local business schema, meta tags, and semantic HTML
- **Interactive Elements**: Smooth animations with Framer Motion
- **Conversion Focused**: Multiple lead capture forms and clear CTAs
- **Accessibility**: WCAG compliant with proper focus management

## 🏗️ Sections

1. **Hero Section** - Full-screen hero with parallax background and lead form
2. **Services** - Interactive service selector with detailed descriptions
3. **Why Choose Us** - Trust-building section with numbered benefits
4. **Process** - 6-step timeline showing the construction process
5. **Statistics Bar** - Key metrics and achievements
6. **Projects Portfolio** - Featured project showcase
7. **Testimonials** - Auto-playing carousel with client reviews
8. **Team** - Meet the expert team members
9. **Blog** - Latest insights and industry articles
10. **Contact** - Comprehensive contact form with validation
11. **Footer** - Complete site navigation and company information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom theme tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image optimization with Unsplash
- **Forms**: Custom validation with error handling
- **TypeScript**: Full type safety

## 🎨 Theme System

The project uses a centralized theme system with design tokens:

- **Colors**: Dark background with orange primary accent
- **Typography**: Inter font with consistent scale
- **Spacing**: 4px grid system for consistent layout
- **Components**: Reusable button, card, and form styles
- **Animations**: Consistent motion design throughout

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📱 Local SEO Optimization

The website includes comprehensive local SEO features:

- **Schema Markup**: LocalBusiness structured data
- **Meta Tags**: Complete OpenGraph and Twitter cards
- **Contact Information**: Consistent NAP (Name, Address, Phone)
- **Service Pages**: Dedicated service descriptions
- **Local Keywords**: Construction-focused keyword optimization

## 🎯 Conversion Optimization

Multiple conversion points throughout the site:

- **Hero Lead Form**: Above-the-fold quick estimate form
- **Contact Form**: Detailed project inquiry form
- **Phone CTAs**: Click-to-call buttons in header and footer
- **Service CTAs**: Action buttons in each section
- **Trust Signals**: Testimonials, stats, and team showcase

## 📁 Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with SEO
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Navbar.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── Contact.tsx     # Contact form
│   └── ...            # Other sections
├── lib/               # Utilities
│   └── utils.ts       # Helper functions
├── styles/            # Styling
│   └── theme.css      # Theme tokens and CSS variables
└── src/               # Source files
    └── theme.ts       # TypeScript theme tokens
```

## 🔧 Customization

### Colors
Update colors in both `src/theme.ts` and `styles/theme.css` to maintain consistency.

### Content
- Update company information in `app/layout.tsx` for SEO
- Modify service offerings in `components/Services.tsx`
- Replace team member information in `components/Team.tsx`
- Update contact details throughout the site

### Images
Replace Unsplash URLs with your own images:
- Hero background image
- Service images
- Team member photos
- Project portfolio images

## 📊 Performance

The website is optimized for Core Web Vitals:

- **LCP**: Optimized with priority loading for hero image
- **CLS**: Consistent layout with proper image sizing
- **FID**: Minimal JavaScript with efficient animations
- **SEO**: Semantic HTML and proper meta tags

## 🌐 Deployment

Deploy to Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
```

The static files will be generated in the `.next` directory.

## 📞 Contact Information

Update the following contact details throughout the site:

- Phone: (123) 556-8824
- Email: info@construx.com
- Address: 123 Construction Ave, Your City, State 12345

## 📝 License

This project is for demonstration purposes. Update with your own license as needed.

---

Built with ❤️ for the construction industry. Ready to build your online presence!
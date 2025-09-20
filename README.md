# Holter Cleaning - Professional Window Cleaning NYC

A modern, responsive website for Holter Cleaning, Manhattan's premier window cleaning service. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional design inspired by top-performing window cleaning websites
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Structured data, meta tags, and semantic HTML for better search visibility
- **Performance Focused**: Optimized images, lazy loading, and efficient code splitting
- **Contact Forms**: Interactive contact form with form validation
- **Customer Reviews**: Dynamic testimonials carousel with Google Reviews integration
- **Service Sections**: Detailed service offerings for residential and commercial clients

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd holtercleaning
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with server-side rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework  
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library

## 📱 Pages & Sections

### Home Page
- **Hero Section**: Compelling headline with clear call-to-action
- **Value Propositions**: Time, Peace of Mind, and Satisfaction guarantees
- **Services**: Residential, commercial, and post-construction cleaning
- **Testimonials**: Customer reviews with 5-star ratings
- **Contact Form**: Lead capture with service type selection

## 🎨 Design Inspiration

The design draws inspiration from high-converting window cleaning websites with:
- Professional color scheme (greens, blues, with red accents)
- Clear typography hierarchy
- Prominent call-to-action buttons
- Trust indicators (reviews, years of experience)
- Social proof integration

## 📞 Business Information

- **Company**: Holter Cleaning
- **Service Area**: Manhattan & NYC (All 5 Boroughs)
- **Phone**: (212) 555-CLEAN
- **Email**: info@holtercleaning.com
- **Established**: 2008
- **Rating**: 5.0/5 (575+ Google Reviews)

## 🔧 Customization

### Colors
Main brand colors are defined in `tailwind.config.js`:
- Primary Green: `#22c55e` (hover: `#16a34a`)
- Accent Blue: `#3b82f6`
- Alert Red: `#ef4444`

### Content
Update business information in:
- `src/components/Header.tsx` - Navigation and phone number
- `src/components/Contact.tsx` - Contact details and form
- `src/components/Footer.tsx` - Footer information
- `src/components/Layout.tsx` - SEO metadata

### Styling
- Global styles: `src/styles/globals.css`
- Component-level styling uses Tailwind utility classes
- Custom components defined in CSS using `@layer components`

## 📈 Performance Features

- Image optimization with Next.js `Image` component
- Code splitting for optimal loading
- CSS purging to minimize bundle size
- Font optimization with Google Fonts
- SEO-friendly URLs and meta tags

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)
```bash
npx vercel --prod
```

### Deploy to Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway

## 📝 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

## 🤝 Support

For questions or support regarding this website, please contact:
- Email: info@holtercleaning.com
- Phone: (212) 555-CLEAN

---

Built with ❤️ for Holter Cleaning - Manhattan's most trusted window cleaning service since 2008.
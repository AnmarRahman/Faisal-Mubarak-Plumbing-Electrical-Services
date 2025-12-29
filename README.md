# Faisal Mubarak Plumbing & Electrical Services
# مؤسسة فيصل مبارك للسباكة والكهرباء

A professional, bilingual (Arabic/English) one-page website for a Saudi Arabian plumbing and electrical services company.

## Features

✅ **Next.js 15** with App Router  
✅ **Tailwind CSS** for styling  
✅ **Bilingual Support** - Arabic (RTL) & English (LTR)  
✅ **Language Switcher** in navbar  
✅ **Responsive Design** - Mobile, Tablet, Desktop  
✅ **Saudi-Friendly Design** - Blue & Green color palette  
✅ **All Required Sections**:
- Hero Section with CTA
- Popular Services (3 core services)
- All Services Grid
- Why Choose Us
- Contact Form
- Google Maps Integration
- WhatsApp Integration
- Social Media Icons
- Footer

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
faisal-mubarak-plumbing-electrical/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Arabic font
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   └── components/
│       └── HomePage.tsx        # Main homepage component (TO BE CREATED)
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── .gitignore
```

## Missing Components (To Complete)

You need to create `src/components/HomePage.tsx` with all sections. See the implementation guide below.

## Technologies Used

- **Next.js 15.1.3** - React framework
- **React 19** - UI library
- **Tailwind CSS 3.4** - Utility-first CSS
- **TypeScript** - Type safety
- **Tajawal Font** - Arabic-friendly Google Font
- **Heroicons** - Icon library

## Implementation Notes

### Language System
The site supports Arabic (default, RTL) and English (LTR). The layout automatically switches direction based on language selection.

### WhatsApp Integration
Use `wa.me` link format: `https://wa.me/966XXXXXXXXX`

### Google Maps
Embed using iframe or Google Maps JavaScript API with a placeholder location in Saudi Arabia.

### Color Palette
- Primary: Blue tones (#0073e6)
- Secondary: Green tones (#009c5b)
- Neutral: Grays for text and backgrounds

## License

Private project for Faisal Mubarak Plumbing & Electrical Services.

## Contact

For inquiries about this project, please contact the repository owner.

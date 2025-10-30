# JewelCo E-commerce Replica

A premium jewelry e-commerce website built with React, TypeScript, and Tailwind CSS, inspired by modern luxury jewelry retailers.

## Features

- **Responsive Design** - Mobile-first approach with full desktop support
- **Product Showcase** - Grid layout with product cards, prices, and availability
- **Expert's Choice Badges** - Highlight premium or featured items
- **Wishlist Functionality** - Save favorite items with heart icon toggle
- **Interactive Carousel** - Browse dailywear categories with smooth navigation
- **Premium Typography** - Elegant serif fonts (Playfair Display) for headings
- **Warm Color Scheme** - Gold accents (#d4a574) with sophisticated dark brown backgrounds (#3d2817)
- **Comprehensive Footer** - App download, links, social media, and payment methods

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif), Lato (sans-serif)
- **Build Tool**: Vite

## Project Structure

```
client/
  ├── public/           # Static assets
  ├── src/
  │   ├── components/   # Reusable React components
  │   │   ├── Header.tsx
  │   │   ├── Hero.tsx
  │   │   ├── ProductGrid.tsx
  │   │   ├── DailywearSection.tsx
  │   │   └── Footer.tsx
  │   ├── pages/        # Page components
  │   │   └── Home.tsx
  │   ├── App.tsx       # Main app component
  │   ├── main.tsx      # React entry point
  │   └── index.css     # Global styles
  └── index.html        # HTML template
```

## Getting Started

### Prerequisites
- Node.js 18+ or higher
- pnpm (recommended) or npm

### Installation

1. Extract the project archive:
```bash
tar -xzf jewelco_replica.tar.gz
cd jewelco_replica
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Customization

### Colors
Edit the color variables in `client/src/index.css`:
- Primary gold: `#d4a574`
- Dark brown: `#3d2817`
- Background: `#faf8f6`

### Typography
Fonts are imported from Google Fonts in `client/index.html`:
- Headings: Playfair Display (serif)
- Body: Lato (sans-serif)

### Products
Update product data in `client/src/components/ProductGrid.tsx` to add or modify jewelry items.

## Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
The built files in `dist/` can be deployed to any static hosting service (Netlify, GitHub Pages, AWS S3, etc.).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please refer to the user guide or contact support.

---

Built with ❤️ using React and Tailwind CSS

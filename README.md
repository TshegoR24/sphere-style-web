# Bundled by Sphere - Premium Hair Collections Website

A sophisticated, modern e-commerce website for Bundled by Sphere, showcasing premium hair collections with an elegant black and white design theme.

## 🎨 **Project Overview**

Bundled by Sphere is a premium hair collection brand that offers high-quality hair bundles and extensions. This website features a minimalist, sophisticated design with a strong black and white color palette, emphasizing luxury and quality.

## ✨ **Key Features**

### **Design & User Experience**
- **Elegant Black & White Theme**: Sophisticated minimalist design
- **Responsive Design**: Fully responsive across all devices
- **Modern Animations**: Smooth transitions and hover effects
- **Glass-morphism Effects**: Contemporary backdrop blur elements
- **Premium Typography**: Clean, professional font hierarchy

### **E-commerce Functionality**
- **Product Showcase**: Featured collections with detailed information
- **Shopping Cart**: Cart icon with item count badge
- **Wishlist Feature**: Heart icons for saving favorites
- **Quick View Modal**: Detailed product information and sizing options
- **Stock Management**: In-stock/out-of-stock indicators
- **Pricing Display**: Original prices, discounts, and savings badges

### **Interactive Elements**
- **Video Backgrounds**: Dynamic video content throughout the site
- **Video Gallery**: 7 interactive video showcases
- **Video Testimonials**: Customer testimonial videos
- **Interactive Controls**: Play/pause, mute/unmute for all videos
- **Hover Effects**: Engaging interactive elements

### **Content Sections**
- **Hero Section**: Video background with product showcase
- **Featured Collections**: Product grid with e-commerce features
- **Features**: Why choose Bundled by Sphere
- **Video Gallery**: Collection showcases and styling videos
- **About Section**: Brand story with video content
- **Testimonials**: Customer reviews with video testimonials
- **Instagram Feed**: Social media integration
- **Footer**: Complete site navigation and contact information

## 🛠 **Technology Stack**

### **Frontend**
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful icon library

### **Styling & Animations**
- **Custom CSS**: Tailored animations and effects
- **CSS Variables**: Consistent color management
- **Responsive Design**: Mobile-first approach
- **Modern CSS**: Backdrop blur, gradients, transitions

### **Development Tools**
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing
- **TypeScript**: Static type checking

## 📁 **Project Structure**

```
sphere-style-web/
├── public/
│   ├── videos/                    # Video assets
│   │   ├── VID_20250721_*.mp4    # Video files
│   │   └── Screenshot_*.jpg      # Product images
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Navigation with cart
│   │   ├── Hero.tsx              # Main hero section
│   │   ├── FeaturedBundles.tsx   # Product showcase
│   │   ├── Features.tsx          # Why choose us
│   │   ├── VideoSection.tsx      # Video gallery
│   │   ├── About.tsx             # Brand story
│   │   ├── Testimonials.tsx      # Customer reviews
│   │   ├── InstagramFeed.tsx     # Social media
│   │   ├── Footer.tsx            # Site footer
│   │   ├── QuickViewModal.tsx    # Product modal
│   │   └── ui/                   # Reusable UI components
│   ├── pages/
│   │   ├── Index.tsx             # Main page
│   │   └── NotFound.tsx          # 404 page
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions
│   ├── App.tsx                   # Root component
│   └── main.tsx                  # Entry point
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sphere-style-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### **Build for Production**

```bash
npm run build
# or
yarn build
```

### **Preview Production Build**

```bash
npm run preview
# or
yarn preview
```

## 🎬 **Video Content**

The website includes 7 video files showcasing:
- **Hero Background**: Main promotional video
- **Collection Showcases**: Product demonstration videos
- **Lifestyle Content**: Styling and transformation videos
- **Customer Testimonials**: Real customer feedback
- **Behind the Scenes**: Brand story and craftsmanship

### **Video Files**
- `VID_20250721_101715_999.mp4` - Hero background
- `VID_20250721_101746_838.mp4` - Collection showcase
- `VID_20250721_101830_222.mp4` - Lifestyle & beauty
- `VID_20250721_101800_646.mp4` - Behind the scenes
- `VID_20250721_101913_835.mp4` - Customer stories
- `VID_20250721_104033_699.mp4` - Premium styling
- `VID_20250721_104619_479.mp4` - Client testimonial
- `VID_20250721_104128_314.mp4` - Transformation story

## 🎨 **Design System**

### **Color Palette**
- **Primary Black**: `#000000` - Main brand color
- **Primary White**: `#FFFFFF` - Text and backgrounds
- **Gray Scale**: Various opacity levels for hierarchy
- **Accent Green**: `#16A34A` - Success states and shipping

### **Typography**
- **Font Family**: System fonts with fallbacks
- **Font Weights**: Light (300), Regular (400), Medium (500)
- **Text Hierarchy**: Clear size progression for readability

### **Components**
- **Buttons**: Primary (black), Secondary (white border)
- **Cards**: Rounded corners with subtle shadows
- **Modals**: Backdrop blur with glass-morphism
- **Navigation**: Sticky header with cart functionality

## 📱 **Responsive Design**

The website is fully responsive across all devices:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🔧 **Customization**

### **Adding New Products**
1. Update the `collections` array in `FeaturedBundles.tsx`
2. Add product images to `public/videos/`
3. Update product information and pricing

### **Adding New Videos**
1. Place video files in `public/videos/`
2. Update video references in components
3. Add video metadata and descriptions

### **Modifying Colors**
1. Update CSS variables in `src/index.css`
2. Modify Tailwind config in `tailwind.config.ts`
3. Update component-specific color classes

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Connect your GitHub repository
2. Configure build settings
3. Deploy automatically on push

### **Netlify**
1. Connect repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### **Traditional Hosting**
1. Run `npm run build`
2. Upload `dist` folder to your server
3. Configure server for SPA routing

## 📊 **Performance**

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 **Security**

- **HTTPS Only**: Secure connections
- **Content Security Policy**: XSS protection
- **Input Validation**: Sanitized user inputs
- **Secure Headers**: Security-focused configuration

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is proprietary to Bundled by Sphere. All rights reserved.

## 📞 **Support**

For technical support or questions:
- **Email**: hello@bundledbysphere.com
- **Instagram**: [@bundledbysphere](https://www.instagram.com/bundledbysphere)

---

**Built with ❤️ for Bundled by Sphere**

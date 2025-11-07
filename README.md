# Global Translation Group - Landing Page

A modern, responsive landing page built with **Vue 3** and **Tailwind CSS** for lead generation and consultation bookings.

## 🚀 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with custom color scheme
- **Lead Capture Form**: Complete form with validation and API integration structure
- **Component-Based Architecture**: Reusable Vue 3 components using Composition API
- **Smooth Navigation**: Vue Router with smooth scroll behavior
- **Thank You Page**: Post-submission confirmation page with social media integration

## 🎨 Design System

### Colors
- **Primary (Blue)**: `#37a8af`
- **Support (Light Blue)**: `#DCF0FA`
- **Accent (Orange)**: `#F1742F`
- **Background**: `#FFFFFF`
- **Text**: `#000000`

### Typography
- **Headings**: Lato (Bold, Black)
- **Body Text**: Figtree (Regular, Medium, Semibold)

## 📁 Project Structure

```
global-translation-group-lp/
├── src/
│   ├── components/
│   │   ├── HeroSection.vue           # Hero with headline and form
│   │   ├── ConsultationDetails.vue   # Value proposition highlights
│   │   ├── Testimonials.vue          # Client testimonials
│   │   ├── LeadForm.vue              # Lead capture form component
│   │   └── Footer.vue                # Footer with contact info
│   ├── pages/
│   │   ├── LandingPage.vue           # Main landing page
│   │   └── ThankYou.vue              # Post-submission page
│   ├── App.vue                       # Root component
│   ├── main.js                       # Application entry point
│   └── style.css                     # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vue Router** - Official routing library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend build tool

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📝 Form Integration

The lead capture form is structured to send data to `/api/lead` via POST request. 

### Form Fields:
- Name (required)
- Email (required)
- Phone Number
- Business Name
- Industry
- Translation Service Usage (Yes/No)

### Backend Integration

To connect the form to your backend:

1. Update the API endpoint in `src/components/LeadForm.vue`:
```javascript
const response = await fetch('/api/lead', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
})
```

2. Replace `/api/lead` with your actual API endpoint
3. Add any additional headers (authentication tokens, etc.) as needed
4. Handle the response according to your API structure

## 🎯 Landing Page Sections

1. **Hero Section**: Eye-catching headline with embedded lead form
2. **Consultation Details**: Three key value propositions with icons
3. **Testimonials**: Social proof with placeholder client testimonials
4. **Final CTA**: Compelling call-to-action linking back to form
5. **Footer**: Contact information and LinkedIn link

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#37a8af',
      support: '#DCF0FA',
      accent: '#F1742F',
    }
  }
}
```

### Content
All content can be modified in the respective Vue component files:
- `HeroSection.vue` - Main headline and intro
- `ConsultationDetails.vue` - Value propositions
- `Testimonials.vue` - Client testimonials
- `Footer.vue` - Footer content and links

### Fonts
Google Fonts are loaded in `index.html`. To change fonts:
1. Update the Google Fonts link in `index.html`
2. Modify font families in `tailwind.config.js`

## 🌐 Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder
```

### Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure server to redirect all routes to `index.html` for SPA routing

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact

For questions or support regarding Global Translation Group, contact:
- Email: info@globaltranslationgroup.com
- LinkedIn: [Global Translation Group](https://www.linkedin.com/company/global-translation-group)

## 📄 License

Copyright © 2025 Global Translation Group. All rights reserved.

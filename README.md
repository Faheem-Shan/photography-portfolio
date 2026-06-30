# WildLens 📷

A nature and travel photography portfolio built with React, showcasing work by Faheem Shan — capturing quiet moments, landscapes, and everyday scenes from Kerala, India, and beyond.

🔗 **Live Site:** [Add your Vercel URL here]

---

## Features

- **Responsive Gallery** — A curated grid of photography with a full-screen lightbox view
- **Dark / Light Mode** — Toggle between themes with a custom aperture-icon switch, preference saved across visits
- **Contact Form** — Direct messaging powered by EmailJS, no backend required
- **Smooth Animations** — Fade-in and scroll-triggered transitions throughout
- **Fully Responsive** — Optimized for mobile, tablet, and desktop

---

## Tech Stack

- **React** (Vite)
- **React Router** — client-side routing
- **Tailwind CSS** — styling and theming
- **EmailJS** — contact form email delivery
- **Lucide React** — icon set
- **React Icons** — additional icons (Instagram, etc.)

---

## Project Structure

```
src/
├── assets/
│   └── images/          # Photography and site images
├── components/
│   ├── Footer.jsx
│   ├── GalleryGrid.jsx
│   ├── Hero.jsx
│   └── Navbar.jsx
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Gallery.jsx
│   └── Home.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/wildlens.git
   cd wildlens
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## Build for Production

```bash
npm run build
```

The output will be generated in the `dist/` folder, ready for deployment.

---

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com).

1. Push the repository to GitHub
2. Import the project into Vercel
3. Add the EmailJS environment variables in your Vercel project settings
4. Ensure a `vercel.json` file exists in the root to handle client-side routing:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```
5. Deploy

---

## Contact

**Faheem Shan**
📍 Kerala, India
📷 [Instagram](https://instagram.com/__by.faheem)
✉️ faheem.devop@gmail.com

---

## License

© 2026 WildLens by Faheem Shan. All rights reserved.

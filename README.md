# Tech-Wheels Mobile Software Lab

<div align="center">
  <h2>Software Services on Wheels for Chhindwara Campuses</h2>
  <p>Bringing professional software development, project guidance, and high-quality printing services directly to college gates across Chhindwara.</p>
</div>

## 🚀 Features

### ✨ Core Functionality
- **Interactive Service Showcase**: Toggle between Student and Business services
- **Smooth Scrolling Navigation**: Seamless navigation between sections
- **Mobile-Responsive Design**: Optimized for all devices with collapsible mobile menu
- **Modal Forms**: Functional authentication and booking systems
- **Campus Route Tracker**: Interactive map of daily college stops

### 🎯 Services Offered
- **For Students**: Software development guidance, legal document assistance, agricultural data analysis
- **For Businesses**: SME digitization, law firm cloud solutions, performance tuning

### 🔧 Technical Features
- **Modern React + TypeScript**: Built with React 19 and TypeScript
- **Tailwind CSS v4**: Production-ready styling with PostCSS
- **Vite Build System**: Fast development and optimized production builds
- **Form Validation**: Client-side validation for all forms
- **Responsive Design**: Mobile-first approach with glass morphism effects

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tech-wheels-mobile-software-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (Optional - for AI features)
   ```bash
   # Create .env.local file
   echo "GEMINI_API_KEY=your_api_key_here" > .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 📱 Usage

### Navigation
- **Desktop**: Click navigation links in the header
- **Mobile**: Tap the hamburger menu for navigation options
- **Smooth Scrolling**: All internal links use smooth scrolling

### Interactive Features
- **Service Toggle**: Switch between Student and Business services
- **Campus Selection**: Click on any campus in the route section
- **Form Submissions**: Fill out authentication or booking forms
- **External Links**: Portfolio and map navigation links

### Forms
- **Account Creation**: Sign up with name, email, password, and college
- **Sign In**: Authenticate existing users
- **Booking**: Schedule consultations with service selection and date picker

## 🏗️ Project Structure

```
src/
├── App.tsx           # Main application component
├── constants.tsx     # Icon definitions and constants
├── types.ts          # TypeScript type definitions
└── index.css         # Tailwind CSS imports

public/
└── index.html        # Main HTML template

Configuration files:
├── vite.config.ts    # Vite configuration
├── tailwind.config.js # Tailwind CSS config
├── postcss.config.js # PostCSS configuration
└── tsconfig.json     # TypeScript configuration
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb, #3b82f6)
- **Background**: Slate grays (#f8fafc, #f1f5f9)
- **Text**: Dark slate (#0f172a, #334155)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 600, 700, 800

### Components
- **Glass Effect**: Backdrop blur with transparency
- **Gradient Text**: Linear gradient for headings
- **Rounded Corners**: Consistent 0.75rem border radius
- **Shadows**: Subtle box shadows for depth

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Hosting Platforms
The built files in `dist/` can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Built for Chhindwara by Rupendra Tandekar

## 📞 Contact

- **Email**: rupendratandekar@gmail.com
- **Phone**: +91-7389237589
- **Portfolio**: [rupendra-portfolio.lovable.app](https://rupendra-portfolio.lovable.app)

---

*Empowering Chhindwara's next generation of engineers, lawyers, and innovators through accessible technology services.*

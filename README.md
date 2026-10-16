# 🧁 Parmeshwar Shinde — Developer Portfolio ("Code & Cupcakes")

A modern, interactive, single-page developer portfolio website designed for **Parmeshwar Shinde**, BE Computer Engineering student at **Trinity Academy of Engineering, Pune**.

The portfolio features the **"Code & Cupcakes"** theme — merging a high-performance backend developer identity with a subtle, tasteful dessert-inspired aesthetic (pastel pink, lavender, soft cyan, floating cupcakes, 3D interactive elements, and sprinkles particles against a sleek dark background).

---

## 🚀 Key Highlights & Features

- **Personal Brand & Identity**:
  - Focuses on backend engineering (Java, Spring Boot, Golang, Apache Kafka, Git, GitHub).
  - Highlights interests in AI/ML, Cloud Computing, DevOps, and Kubernetes.
  - Showcases hobbies: Building software and playing games.
  - Zero fake proficiency bars or percentages — strictly authentic architecture and skills.

- **Interactive 3D Cupcake & Animations**:
  - **Three.js 3D Cupcake** (`src/components/ThreeCupcake.jsx`): Lightweight, procedural 3D cupcake with corrugated pastel liner, golden sponge, pink frosting swirl, cherry on top, and sprinkles. Interacts with mouse tilt, click bounce physics, and pauses when offscreen to preserve battery and performance.
  - **Dynamic Sprinkles Background** (`src/components/SprinklesBackground.jsx`): Subtle drifting pastel sprinkles, stars, and nonpareils. Automatically respects `prefers-reduced-motion`.
  - **Interactive 3D Card Tilt** (`src/components/TiltCard.jsx`): Smooth 3D perspective rotation and glowing pastel glare as cursor moves across cards.

- **Personal Photo Area**:
  - Reserved prominent photo frame in the Hero section with a glowing gradient halo and floating satellites (Java/Spring, Go/Kafka, Code brackets, 3D Cupcake, Macaron, Gaming).
  - Pre-configured with a placeholder `YOUR-PHOTO.jpg`.
  - Easily replaceable by dropping your photo into `public/YOUR-PHOTO.jpg` or changing `photoUrl` in `src/data/portfolio.js`.

- **Single-Page Navigation**:
  - Sticky glassmorphic navbar with active section highlighting on scroll.
  - Smooth scrolling navigation to: **Home**, **About**, **Skills**, **Projects**, **Beyond Code**, and **Contact**.
  - Mobile responsive drawer menu with hamburger toggle.

- **Featured Projects**:
  - Reusable cards with code preview terminal banners, architecture highlights, tech tags, and GitHub/Demo links.
  - View toggle to preview either the project showcases or the authentic fallback message: *"Currently building, experimenting, and turning ideas into code."*

- **Direct Contact Section**:
  - One-click copy email button with real-time toast feedback.
  - Quick email dispatch helper connecting via standard `mailto:` (also ready for Formspree/EmailJS).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **3D Graphics**: Three.js (procedural, lightweight, low-overhead)
- **Styling**: Vanilla CSS (CSS tokens, custom glassmorphism, responsive grid, micro-interactions)
- **Icons**: Lucide React + custom SVG technology logos (Java, Spring Boot, Golang, Apache Kafka, Git, GitHub)

---

## 📁 Project Structure

```text
├── public/
│   ├── favicon.svg             # Custom Code & Cupcakes SVG favicon
│   └── YOUR-PHOTO.jpg          # Reserved placeholder personal photo
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── YOUR-PHOTO.jpg  # Asset placeholder mirror
│   ├── components/
│   │   ├── About.jsx           # Bio, education at Trinity Academy of Engineering, and 3 pillar cards
│   │   ├── Contact.jsx         # Direct channels, one-click copy email, and email dispatch form
│   │   ├── DessertIcons.jsx    # SVG illustrations (cupcake, macaron, donut, frosting swirl)
│   │   ├── Footer.jsx          # Dynamic copyright year, social links, cupcake accent, back-to-top
│   │   ├── Hero.jsx            # Striking hero, photo frame, 3D cupcake, floating badges, terminal
│   │   ├── Interests.jsx       # "Beyond the Code" (Backend, Gaming, AI/Cloud/DevOps)
│   │   ├── Navbar.jsx          # Sticky frosted navbar with active tracker & mobile menu
│   │   ├── Projects.jsx        # Project showcases, code previews, and "Building in Progress" toggle
│   │   ├── SocialIcons.jsx     # Crisp vector SVG icons for GitHub and LinkedIn
│   │   ├── SprinklesBackground.jsx # Floating pastel sprinkles & nonpareils particle canvas
│   │   ├── TechIcons.jsx       # Official SVG logos for Java, Spring, Go, Kafka, Git, Docker, K8s
│   │   ├── TechStack.jsx       # "Tools I Build With" with interactive filters & authentic details
│   │   ├── ThreeCupcake.jsx    # Pure Three.js 3D interactive cupcake with mouse tilt & bounce
│   │   └── TiltCard.jsx        # Reusable 3D mouse tilt wrapper with dessert glare
│   ├── data/
│   │   └── portfolio.js        # Centralized configuration (Update all your details here!)
│   ├── styles/
│   │   └── index.css           # Complete design system tokens, typography, glassmorphism, animations
│   ├── App.jsx                 # Main layout assembler
│   └── main.jsx                # Application root
├── index.html                  # SEO meta tags, Google Fonts (Outfit, Plus Jakarta Sans, JetBrains Mono)
├── package.json
└── vite.config.js
```

---

## 💻 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to: `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## ✏️ How to Customize Your Portfolio

All your data is neatly centralized in [`src/data/portfolio.js`](file:///c:/Users/parme/OneDrive/Desktop/ANITGRIVITY/src/data/portfolio.js):

### 1. Update Your Photo
1. Place your photo image file in the `public/` directory (e.g., `public/my-photo.jpg`).
2. Open [`src/data/portfolio.js`](file:///c:/Users/parme/OneDrive/Desktop/ANITGRIVITY/src/data/portfolio.js) and update:
   ```javascript
   photoUrl: "/my-photo.jpg",
   ```

### 2. Update Social Links & Email
In `personalInfo.socials`:
```javascript
socials: {
  github: "https://github.com/your-actual-github-username",
  linkedin: "https://linkedin.com/in/your-actual-linkedin-username",
  email: "your.real.email@example.com",
  location: "Pune, Maharashtra, India",
}
```

### 3. Add or Edit Projects
Inside `projectsData`, update the title, description, tags, and URLs of your projects:
```javascript
{
  id: "project-1",
  title: "Your Project Title",
  subtitle: "Architecture Type",
  description: "Description of your backend service...",
  tech: ["Java", "Spring Boot", "Kafka"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://..."
}
```
If you haven't uploaded your projects yet, you can empty the `projectsData` array `projectsData = []` or toggle the view on the website to display:
> *"Currently building, experimenting, and turning ideas into code."*

---

## 🎨 Theme: "Code & Cupcakes"
- **Background**: Deep Charcoal (`#0b0d13`, `#11141f`)
- **Primary Accent**: Pastel Pink (`#ff8fab`, `#ffb3c6`)
- **Secondary Accent**: Lavender (`#c4b5fd`, `#a78bfa`)
- **Highlights**: Soft Cyan (`#67e8f9`), Candy Yellow (`#fde047`), Mint (`#4ade80`)
- **Glassmorphism**: Translucent card surfaces with frosted backdrops and pastel glowing edges.

---

© Parmeshwar Shinde • Trinity Academy of Engineering, Pune.

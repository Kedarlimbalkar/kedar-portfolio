Role & Context:
You are an elite Frontend Architect and Senior UI/UX Designer. Build a production-grade, ultra-modern, high-end personal portfolio website for an ML Engineer, Data Scientist, and Tech Leader (Kedar Limbalkar). The design must look custom-crafted, bespoke, and professional—completely avoiding generic AI aesthetics, boring templates, or plain card layouts. It should feel like a top-tier design agency or tech startup landing page, featuring smooth micro-interactions.

Tech Stack & Setup Requirements:
- Framework: Next.js (App Router) / React
- Styling: Tailwind CSS
- Animation: Framer Motion (smooth spring physics, scroll-triggered fade-ups, subtle hover scales)
- Icons: Lucide React
- Fonts: Inter or Plus Jakarta Sans for clean body text, Instrument Serif or Newsreader for high-end editorial headings to give an authentic, sophisticated feel.

Design System & Aesthetic Guidelines (LIGHT THEME ONLY):
- DO NOT USE DARK MODE. The aesthetic must be bright, clean, premium, and authentic.
- Background: Soft off-white, paper-like colors (#fafafa or #f8f9fa).
- Cards/Containers: Crisp white (#ffffff) with ultra-subtle drop shadows (shadow-sm to shadow-md on hover) and delicate borders (border-gray-200).
- Text Colors: Deep charcoal/slate (text-gray-900 or text-slate-800) for high readability.
- Accent Colors: Professional royal blue / muted slate navy.
- Layout Strategy: Asymmetric Bento Grid layout. No monotonous grid cards. Use varying card sizes.
- Micro-Interactions: Smooth accordion dropdowns, pill-shaped tags that slightly expand on hover, and gentle spring-physics translation on card hovers.

---

SECTION-BY-SECTION ARCHITECTURE & CONTENT SPECIFICATION:

1. Navigation Bar (Header):
- Minimalist sticky header with a translucent white blur (bg-white/80 backdrop-blur-md).
- Logo: "Kedar Limbalkar" in crisp serif font.
- Links: About, ML Projects, Leadership, Playground, Experience.

2. Hero Section:
- Headline: Bold editorial typography: "Building production-grade AI systems and crafting complete digital identities."
- Sub-headline / Role: ML Engineer, Data Scientist, & Technical Leader.
- Interactive Element: Clean, minimal typing animation of core skills: Python, MLOps, Business Analysis, Web Architecture.
- Call-to-Action Buttons: "Explore Selected Work" (Solid accent) and "View Resume" (Minimalist outline).

3. Featured Projects (Bento Grid — ML & Data Science):
- Project 1 (Flagship): Wind Mill Detection System (Production Grade & Azure Deployed)
  * Description: End-to-end computer vision and MLOps pipeline deployed live on Microsoft Azure to automatically detect and classify wind turbines from aerial imagery.
  * Tech Stack: Azure, Docker, PyTorch/TensorFlow, CI/CD, FastAPI.
- Project 2: Tata Steel Machine Failure Prediction
  * Description: Optimized 10K+ records with XGBoost and LightGBM, increasing dataset reliability by 30%.
- Project 3: Bengaluru House Price Prediction
  * Description: Ridge Regression pipeline with 82% accuracy across 240+ urban locations.
- Project 4: Retail Conversational AI Agent
  * Description: Production-grade AI system for e-commerce support (LangGraph, LangChain, Groq API) with 92% resolution accuracy.
- Project 5: Facial Emotion Recognition
  * Description: CNN-based real-time deep learning application with a Streamlit interface.

4. Leadership & Full-Stack Architecture:
- Role 1: Adheesh Overseas (adheeshoverseas.in)
  * Title: CTO, Technical Advisor & Business Analyst.
  * Description: Engineered the entire digital identity from scratch—from initial logo and brand design to full-scale web architecture and business analysis.
  * Tech Stack: TypeScript, JavaScript, CSS.
- Role 2: Opportunity Career Academy (opportunitycareeracademy.in)
  * Title: Lead Developer.
  * Description: Designed and developed a fully functional, localized educational platform in the Marathi language.
  * Tech Stack: TypeScript, JavaScript, CSS.

5. "The Playground" (Hobbies & Personality Section):
- Photography: Local masonry image grid component for displaying high-quality personal photography assets.
- Bike Riding: Subtle animated icon/trail card showcasing motorcycle touring.
- Mobile Gaming: Playful interactive controller icon/card with micro-interactions.

6. Experience Timeline & Footer:
- Vertical timeline: Intucate, AtliQ Technologies, Unified Mentor, NullClass.
- Minimalistic footer with links: LinkedIn, GitHub, Email, Phone.
# 🚀 Modern Developer Portfolio

A high-performance, dark-themed portfolio website built with **Next.js 14**, **TypeScript**, and **GSAP**. Designed to be visually stunning, fully responsive, and packed with "Agentic" design aesthetics.

## ✨ Key Features

*   **⚡ Next.js 14 (App Router)** - Built on the latest React framework for speed and SEO.
*   **🎨 Agentic Design** - Focused on bold typography, high contrast, and "premium" dark UI.
*   **🎭 GSAP Animations** - Smooth scroll animations using `gsap` and `ScrollTrigger` for a buttery feel.
*   **📱 Fully Responsive** - Optimized layouts for Mobile, Tablet, and Desktop.
    *   *Mobile*: Stacked layout, static top profile.
    *   *Desktop*: Fixed sidebar profile, centered content.
*   **📧 Functional Contact Form** - Built-in backend using **Server Actions** and **Nodemailer**. No third-party services required; sends emails directly via SMTP (Gmail).
*   **🛠️ Premium Tools Section** - Custom grid showcasing tech stack with authentic icons.
*   **📝 Blog & Projects** - Dynamic sections for "Design Thoughts" and "Recent Projects".

## 🛠️ Technology Stack

*   **Framework**: [Next.js 14](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [GSAP (GreenSock)](https://gsap.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Email**: [Nodemailer](https://nodemailer.com/)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
To make the **Contact Form** work, you need to create a `.env.local` file in the root directory.

**Create `.env.local`:**
```env
# SMTP Configuration (Example for Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```
> **Note:** For Gmail, you **MUST** use an [App Password](https://myaccount.google.com/apppasswords), not your regular login password.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 5. Build for Production
```bash
npm run build
npm start
```

### 6. Deploying to Vercel (Production)

Since `.env.local` is ignored by Git (for security), you must set up your environment variables manually on Vercel:

1.  Push your code to GitHub.
2.  Import the project in [Vercel](https://vercel.com/new).
3.  **CRITICAL STEP**: Before deploying (or in **Settings** > **Environment Variables**), add the following:
    *   `SMTP_HOST`: `smtp.gmail.com`
    *   `SMTP_PORT`: `587`
    *   `SMTP_USER`: `your-email@gmail.com`
    *   `SMTP_PASS`: `your-app-password`
4.  Deploy!

If the variables are missing, the contact form **will not send emails**.

## 📂 Project Structure

*   `/app` - Main application routes (`page.tsx`, `globals.css`).
*   `/app/actions` - Server Actions (Backend logic for Email).
*   `/components` - Reusable UI components (`Navbar`, `HeroSection`, `FeatureCards`, etc.).
*   `/data` - Static data files (`projects.ts`, `tools.ts`, `blogs.ts`) -> **Edit these to update content**.
*   `/public` - Static assets (images, icons).

## 🎨 Customizing Content

You can easily update the portfolio content by editing the files in the `/data` folder:
*   **`projects.ts`**: Update your project links and images.
*   **`tools.ts`**: Change the tools/technologies you use.
*   **`experience.ts`**: Update your work history.

---
**Made with ❤️ by Onkar**

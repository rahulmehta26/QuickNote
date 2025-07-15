# 🚀 QuickNote

A modern, responsive **AI-powered note-taking interface** built with **React**, **TypeScript**, and **Tailwind CSS**. QuickNote focuses on **minimal design, smooth animations**, and clean component architecture to deliver a polished user experience.

## 🌐 Live Demo  
👉 [QuickNote Live Link](https://quick-note-m7v4.vercel.app/)

---

## ✨ Features

✅ Clean and modern UI & UX.
✅ Fully responsive for Desktop / Tablet / Mobile.
✅ Smooth animations powered by Framer Motion.
✅ Modal management using React Context API.
✅ Accessible, keyboard-friendly components.
✅ Custom SVG icons and illustrations.
✅ Structured with scalable atomic components  


## 🎨 Visual Enhancements:

Added colorful badges for all technologies
Used emojis throughout for better visual appeal
Centered important sections like demo link and badges
Added table formatting for better readability

📋 Structure Improvements:

Clear section dividers with horizontal lines
Organized content with proper headings hierarchy
Added expandable ESLint configuration section
Included a comprehensive project structure with emojis

🎯 Professional Features:

Deployment badges
Live demo button
Clean typography and spacing
Responsive design considerations
Developer-friendly documentation

---

## 🛠️ Tech Stack

| Technology   | Purpose                 |
|--------------|--------------------------|
| React        | UI Library (Core)         |
| TypeScript   | Static Typing             |
| Tailwind CSS | Styling Framework         |
| Framer Motion| Animations & Transitions  |
| Vercel       | Deployment                |

---

## 📂 Project Structure

src/
├─ components/
│ ├─ icons/
│ ├─ sections/
│ └─ ui/
├─ contexts/
├─ utils/
├─ types/
└─ assets/


---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/rahulmehta26/QuickNote.git

 Install dependencies
npm install

Run the development server
npm run dev

🤝 Acknowledgements

Vercel for deployment.
Framer Motion for animation.


---

Let me know if you'd like me to include badges like `Deployed on Vercel`, `MIT License`, etc.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# 🚀 GitHub Repo Analyzer

A sleek and intelligent web app that helps you understand any GitHub repository in seconds. Paste a repo URL, visualize its structure, and get AI-powered explanations for each file — all in a beautifully dark-themed interface powered by Tailwind CSS and OpenAI.

---

## ✨ Features

- 🗂️ Visualize full GitHub repository structure
- 📊 View repository metadata (stars, forks, descriptions)
- 🤖 AI-generated explanations for each file using OpenAI API
- 🌘 Dark mode-first UI with Tailwind CSS + ShadCN UI
- 🎞️ Smooth animations with framer-motion

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite + TypeScript  
- **Styling**: Tailwind CSS, ShadCN/UI  
- **API Integration**: GitHub REST API, OpenAI API (GPT-3.5/GPT-4)

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js ≥ 16.x  
- An OpenAI API Key → [Get it here](https://platform.openai.com/account/api-keys)
- A Github Token
---

### 📁 Clone & Setup

```bash
git clone https://github.com/jonofficial/Github_Repo_Analyzer.git
cd Github_Repo_Analyzer
npm install
```

### 🔐 Configure Environment

You can optionally add a GitHub token to avoid rate limits and OpenAI API key:

```env
VITE_GITHUB_TOKEN=your-github-token-here
VITE_OPENAI_API_KEY=your-openai-key
```
### Run Locally

Install dependencies: 

```bash
npm install
```

Start the server:

```bash
npm run dev
```

Open your browser and navigate to: http://localhost:5173/

### License

This project is licensed under the [MIT License](LICENSE)

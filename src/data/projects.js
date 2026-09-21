import folderlens from "../assets/images/projects/FolderLens.png";
import gamevault from "../assets/images/projects/GameVault.png";
import appvault from "../assets/images/projects/AppVault.png";
import auraTrack from "../assets/images/projects/auratrack.png";
import toolspace from "../assets/images/projects/tOOLsPACE.png";
import stylo from "../assets/images/projects/stylo.png";
import Monster from "../assets/images/projects/monster.png";
import studyflow from "../assets/images/projects/StudyFlowAI.png";
import devdash from "../assets/images/projects/DevDash.png";
import animehub from "../assets/images/projects/AnimehUB.png";
import githubuniverse from "../assets/images/projects/GitHubUniverse.png";
import playverse from "../assets/images/projects/Playverse.png";
import sudocafe from "../assets/images/projects/Sudo cafe.png";
import uhproperties from "../assets/images/projects/UH Properties.png";
import airesumeanalyzer from "../assets/images/projects/Ai Resume Analyzer.png";
import porsche from "../assets/images/projects/Porsche.png";
import brewhaven from "../assets/images/projects/BrewHaven.png";

const projects = [
  {
    id: 1,
    title: "GameVault",
    category: "Android Games Showcase & Hub",
    image: gamevault,
    description:
      "A personal collection showcase of Android games and interactive experiments, featuring real-time multiplayer titles, RPG gachas, and instant APK downloads.",
    tech: ["React", "Flutter", "Firebase", "WebRTC"],
    live: "https://game-vault-henna-pi.vercel.app/",
    github: "https://github.com/IchigoxBankai",
  },
  {
    id: 2,
    title: "GithubUniverse",
    category: "3D Solar System Visualizer",
    image: githubuniverse,
    description:
      "An interactive 3D solar system visualizer that converts any GitHub user profile and repositories into orbiting planets and cosmos.",
    tech: ["Three.js", "React", "WebGL"],
    live: "https://ichigoxbankai.github.io/GithubUniverse/",
    github: "https://github.com/IchigoxBankai/GithubUniverse",
  },
  {
    id: 3,
    title: "FolderLens",
    category: "Creative File Intelligence",
    image: folderlens,
    description:
      "A creative file intelligence platform for scanning, analyzing, visualizing, and managing media assets with deep directory insights and modern UI.",
    tech: ["React", "FastAPI", "Python", "Tailwind CSS"],
    live: "https://folder-lens.vercel.app/",
    github: "https://github.com/IchigoxBankai",
  },
  {
    id: 4,
    title: "AuraTrack",
    category: "Mental Health Platform",
    image: auraTrack,
    description:
      "An AI-powered mental health tracker with mood analytics, journaling, face emotion detection and Firebase authentication.",
    tech: ["React", "Firebase", "Gemini AI", "CSS"],
    live: "https://mental-health-tracker-ekyf.vercel.app/",
    github: "https://github.com/IchigoxBankai",
  },
  {
    id: 5,
    title: "ToolSpace",
    category: "Utility & Developer Suite",
    image: toolspace,
    description:
      "A fast, privacy-first utility suite featuring unit converters, live currency calculators, text manipulation tools, QR code generators, and everyday utilities.",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://ichigoxbankai.github.io/ToolSpace/",
    github: "https://github.com/IchigoxBankai/ToolSpace",
  },
  {
    id: 6,
    title: "Monster",
    category: "Energy Drink Website",
    image: Monster,
    description:
      "A bold and animated landing page for Monster Energy with immersive visuals and interactive scrolling.",
    tech: ["React", "CSS", "Animation"],
    live: "https://monster-energy-website.vercel.app/",
    github: "https://github.com/IchigoxBankai",
  },
  {
    id: 7,
    title: "AppVault",
    category: "Android App Showcase & Hub",
    image: appvault,
    description:
      "A curated personal software archive showcasing native Android applications, AI tools, direct APK downloads, checksums, and architectural case studies.",
    tech: ["React", "Flutter", "Gemini AI", "Tailwind CSS"],
    live: "https://ichigoxbankai.github.io/app-vault/",
    github: "https://github.com/IchigoxBankai/app-vault",
  },
  {
    id: 8,
    title: "DevDash",
    category: "Developer Workspace",
    image: devdash,
    description:
      "A feature-rich developer workspace dashboard featuring real-time GitHub stats, Pomodoro timers, task lists, weather widgets, and productivity analytics.",
    tech: ["React", "CSS", "APIs"],
    live: "https://ichigoxbankai.github.io/devdash/",
    github: "https://github.com/IchigoxBankai/devdash",
  },
  {
    id: 9,
    title: "Brew-Haven",
    category: "Artisanal Coffee Showcase",
    image: brewhaven,
    description:
      "A warm, artisanal coffee shop landing page offering handcrafted coffee blends, fresh pastries, interactive digital menu, and online table reservations.",
    tech: ["React", "CSS", "UI/UX"],
    live: "https://ichigoxbankai.github.io/Brew-Haven/",
    github: "https://github.com/IchigoxBankai/Brew-Haven",
  },
  {
    id: 10,
    title: "Stylo",
    category: "Luxury Sneaker Website",
    image: stylo,
    description:
      "A premium animated sneaker landing page inspired by modern luxury fashion brands with smooth UI interactions.",
    tech: ["React", "CSS", "Vite"],
    live: "https://ichigoxbankai.github.io/luxury-sneaker/",
    github: "https://github.com/IchigoxBankai/luxury-sneaker",
  },
  {
    id: 11,
    title: "StudyFlow AI",
    category: "AI Learning Platform",
    image: studyflow,
    description:
      "An AI-powered learning platform that helps students organize study plans, notes and learning resources.",
    tech: ["React", "Firebase", "Gemini AI"],
    live: "https://studyflow-ai-orpin.vercel.app/",
    github: "https://github.com/IchigoxBankai",
  },
  {
    id: 12,
    title: "PlayVerse",
    category: "Gaming Platform",
    image: playverse,
    description:
      "The ultimate browser mini-games platform featuring interactive gameplay, persistent background music, achievement badges, and competitive score leaderboards.",
    tech: ["React", "HTML5 Canvas", "Audio API"],
    live: "https://playverse-eta.vercel.app/",
    github: "https://github.com/IchigoxBankai",
  },
  {
    id: 13,
    title: "Sudo Cafe",
    category: "Cafe & Culinary Web App",
    image: sudocafe,
    description:
      "A modern cafe website for Sudo Cafe (Kurla, Mumbai) featuring artisanal coffee, gourmet burgers, pizzas, digital menu browsing, and aesthetic culinary vibes.",
    tech: ["React", "CSS", "UI/UX"],
    live: "https://sudo-cafe.vercel.app/",
    github: "https://github.com/IchigoxBankai",
  },
  {
    id: 14,
    title: "UH Properties",
    category: "Real Estate Platform",
    image: uhproperties,
    description:
      "A premier real estate listing and property search platform featuring modern luxury homes, interactive filtering, detailed property tours, and inquiries.",
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "https://uhproperties.vercel.app/properties",
    github: "https://github.com/IchigoxBankai",
  },
  {
    id: 15,
    title: "AI Resume Analyzer",
    category: "AI Career & Resume Tool",
    image: airesumeanalyzer,
    description:
      "An intelligent AI tool that parses candidate resumes, provides ATS compatibility scores, extracts key skills, and gives personalized career feedback.",
    tech: ["Python", "Streamlit", "Gemini AI"],
    live: "https://ai-resume-analyzer-8.jukjgfthwhd8zinjcwbn8.streamlit.app/",
    github: "https://github.com/IchigoxBankai",
  },
  {
    id: 16,
    title: "Porsche",
    category: "Automotive Concept",
    image: porsche,
    description:
      "An immersive luxury automotive showcase for Porsche E-Performance, featuring hypercars, interactive GSAP animations, sound engine synthesis, and model customizers.",
    tech: ["React", "GSAP", "Three.js"],
    live: "https://ichigoxbankai.github.io/Porsche/",
    github: "https://github.com/IchigoxBankai/Porsche",
  },
  {
    id: 17,
    title: "AnimeHub",
    category: "Anime Companion Platform",
    image: animehub,
    description:
      "A modern, immersive anime discovery platform and companion app with sleek UI animations, search features, trending shows, and interactive cataloging.",
    tech: ["React", "Jikan API", "CSS"],
    live: "https://ichigoxbankai.github.io/AnimeHub/",
    github: "https://github.com/IchigoxBankai",
  },
];

export default projects;
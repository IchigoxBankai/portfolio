import auraTrack from "../assets/images/projects/auratrack.png";
import stylo from "../assets/images/projects/stylo.png";
import Monster from "../assets/images/projects/monster.png";
import studyflow from "../assets/images/projects/studyflow.png";

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "StudyFlow AI",
    category: "AI Learning Platform",
    image: studyflow,
    description:
      "An AI-powered learning platform that helps students organize study plans, notes and learning resources.",
    tech: ["React", "Firebase", "Gemini AI"],
    live: "https://studyflow-ai-orpin.vercel.app/",
    github: "https://github.com/IchigoxBankai",
  },
];

export default projects;
export interface PortfolioData {
  title: string;
  description: string;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
  projectName: string;
}

export const portfolioData: PortfolioData[] = [
  {
    title: "Modern Shopping Experience",
    description: "A full-stack e-commerce platform built with React, TypeScript, and Node.js. Features include user authentication, payment processing, and inventory management.",
    technologies: ["React", "TypeScript", "Node.js"],
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-600",
    projectName: "E-Commerce Platform"
  },
  {
    title: "Team Collaboration Tool",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team communication features.",
    technologies: ["React", "Firebase", "CSS3"],
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-600",
    projectName: "Task Management App"
  },
  {
    title: "Interactive Weather App",
    description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    technologies: ["JavaScript", "API Integration", "Chart.js"],
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-600",
    projectName: "Weather Dashboard"
  },
  {
    title: "Analytics Platform",
    description: "A comprehensive social media analytics dashboard with data visualization, content scheduling, and performance tracking across multiple platforms.",
    technologies: ["React", "Python", "D3.js"],
    gradientFrom: "from-red-500",
    gradientTo: "to-orange-600",
    projectName: "Social Media Dashboard"
  },
  {
    title: "Financial Management",
    description: "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    technologies: ["React Native", "Node.js", "Security"],
    gradientFrom: "from-indigo-500",
    gradientTo: "to-blue-600",
    projectName: "Mobile Banking App"
  },
  {
    title: "Online Education Hub",
    description: "An interactive learning platform with video streaming, progress tracking, and collaborative features for online education.",
    technologies: ["Vue.js", "MongoDB", "WebRTC"],
    gradientFrom: "from-teal-500",
    gradientTo: "to-green-600",
    projectName: "Learning Platform"
  }
];

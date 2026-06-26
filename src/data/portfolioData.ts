import { Code2, Server, Database, Smartphone, Wrench } from 'lucide-react';

export const profileInfo = {
  name: "Hari Haran",
  role: "Software Developer | Full Stack Developer",
  headline: "Hi, I'm Hari Haran",
  subtitle: "Software Developer building scalable web and mobile applications",
  about: "A passionate software developer experienced in building user-friendly applications with modern frontend technologies, backend APIs, and database systems. Dedicated to writing clean, maintainable code and learning new technologies to solve complex problems.",
  email: "hariharan270501@gmail.com",
  github: "https://github.com/hariharanofficially",
  linkedin: "https://linkedin.com/in/hariharanofficially",
  resume: "https://drive.google.com/file/d/1WPzEO11MaCqnXuhlZqrvouTUAaRapHk8/view?usp=sharing",
};

export const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "UI/UX Implementation",
      "Redux",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "API Integration",
    ],
  },
  {
    category: "Database",
    icon: Database,
    items: [
      "MongoDB",
      "MySQL",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    category: "Mobile Application",
    icon: Smartphone,
    items: [
      "Flutter",
      "Dart",
      "Android Development",
      "Firebase",
      "Mobile UI Design",
      "API Integration",
      "App Deployment",
    ],
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Docker",
      "android studio",
    ],
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Furtim Technologies Pvt Ltd",
    period: "Oct 2023 - Present",
    responsibilities: [
      "Developed responsive web applications",
      "Built reusable UI components",
      "Integrated REST APIs",
      "Worked with databases",
      "Improved application performance",
    ],
  },
];

export const projects = [
  {
    title: "CMRL Inventory Management System",
    description: "A dedicated mobile asset tracking and logistics dashboard developed for Chennai Metro Rail Limited. Features live TraqOps API data, stock level alerts, and optimized UI/UX elements designed to accelerate inventory workflows and reduce maintenance reporting downtime.",
    image: "/cmrl_dashboard.png",
    techStack: ["Flutter", "Dart", "TraqOps API", "Android", "iOS"],
    githubUrl: "#",
    liveUrl: "#",
    highlights: [
      "Analyzed workflows and recommended UI improvements that helped accelerate procurement processes.",
      "Integrated real-time TraqOps API asset status feeds for mobile operations dashboards.",
      "Collaborated on low-stock/maintenance alert features that reduced reporting downtime by 30%.",
      "Crafted custom UI elements, achieving a 25% reduction in inventory form completion times."
    ]
  },
  {
    title: "EquineApp",
    description: "A comprehensive horse racing and equine activity tracker. Centralized digital health, nutrition, and training logs to reduce manual record-keeping errors, integrated live race feeds, and maximized user engagement through custom Dart performance tuning.",
    image: "/equine_app.png",
    techStack: ["Flutter", "Dart", "Android", "iOS", "Performance Tuning"],
    githubUrl: "#",
    liveUrl: "#",
    highlights: [
      "Co-led project planning and redesigned equine data entry to reduce manual tracking errors by 20%.",
      "Created highly reusable Flutter UI modules, achieving 100% code reuse between platforms.",
      "Launched real-time race feeds and tuned app performance, driving a 15% increase in session engagement.",
      "Managed user-feedback loops and releases, resolving 85% of bugs within 48 hours."
    ]
  },
  {
    title: "Dashboard Application",
    description: "Analytics dashboard with interactive charts, data visualization, and export capabilities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    techStack: ["React", "TypeScript", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
    highlights: []
  },
];

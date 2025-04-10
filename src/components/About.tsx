
import { useState, useEffect } from "react";
import { AnimateOnScroll, FadeIn, SlideIn } from "./ui/motion";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "JavaScript (ES6+)", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "GraphQL", icon: "graphql" },
  { name: "REST APIs", icon: "api" },
  { name: "Redux", icon: "redux" },
  { name: "React Query", icon: "reactquery" },
  { name: "AWS", icon: "aws" },
  { name: "PostgreSQL", icon: "postgresql" }
];

// A simple function to get SVG icons for skills
// In a real app, you might want to use actual SVG imports or an icon library
const getSkillIcon = (iconName: string) => {
  // Common colors for tech logos
  const colors: Record<string, string> = {
    javascript: "#F7DF1E",
    typescript: "#3178C6",
    react: "#61DAFB",
    nextjs: "#000000",
    nodejs: "#339933",
    tailwind: "#06B6D4",
    graphql: "#E10098",
    api: "#FF5733",
    redux: "#764ABC",
    reactquery: "#FF4154",
    aws: "#FF9900",
    postgresql: "#4169E1"
  };

  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: colors[iconName] || "#666" }}>
      <span className="text-xs font-bold text-white">{iconName.charAt(0).toUpperCase()}</span>
    </div>
  );
};

export default function About() {
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  // Animate skills one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedSkills(prev => {
        if (prev.length >= skills.length) {
          return prev;
        }
        return [...prev, skills[prev.length].name];
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 items-center">
          <AnimateOnScroll>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="highlight">About Me</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Devraj, a software engineer with a passion for crafting clean, 
                  user-friendly web applications. My journey in tech began in 2017 when I dove into web development.
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working at a start-up, 
                  a large corporation, and a student-led design studio. My main focus these days 
                  is building accessible, inclusive products and digital experiences.
                </p>
                <p>
                  When I'm not at the computer, I'm usually rock climbing, playing basketball, 
                  or exploring new hiking trails.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Skills section at the bottom */}
        <AnimateOnScroll className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
          <Card className="p-8 bg-background border border-border shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <FadeIn 
                  key={skill.name}
                  className={`flex items-center gap-3 transition-all duration-300 ${animatedSkills.includes(skill.name) ? 'opacity-100' : 'opacity-30'}`}
                  delay={index * 0.1}
                >
                  <div className="flex-shrink-0">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </FadeIn>
              ))}
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}


import { AnimateOnScroll, FadeIn, SlideIn } from "./ui/motion";
import { Card } from "@/components/ui/card";

const skills = [
  "JavaScript (ES6+)", 
  "TypeScript", 
  "React", 
  "Next.js", 
  "Node.js", 
  "Tailwind CSS",
  "GraphQL",
  "REST APIs", 
  "Redux", 
  "React Query", 
  "AWS",
  "PostgreSQL"
];

export default function About() {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

          <AnimateOnScroll>
            <Card className="p-6 bg-background border border-border shadow-md">
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

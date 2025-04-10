
import { useState } from "react";
import { AnimateOnScroll } from "./ui/motion";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const jobs = [
  {
    company: "Netflix",
    role: "Senior Software Engineer",
    duration: "January 2022 - Present",
    description: [
      "Led the frontend development of Netflix's content management system, improving content delivery workflows by 25%.",
      "Architected and implemented a React component library used by 200+ internal developers.",
      "Optimized web performance, reducing load times by 40% and improving user engagement metrics.",
      "Collaborated with UX and product teams to refine user journeys and implement responsive designs."
    ],
    technologies: ["React", "TypeScript", "GraphQL", "Next.js"]
  },
  {
    company: "Airbnb",
    role: "Frontend Engineer",
    duration: "March 2019 - December 2021",
    description: [
      "Developed and maintained key features for Airbnb's booking platform using React and TypeScript.",
      "Built reusable components and implemented state management using Redux.",
      "Improved application performance by implementing code splitting and lazy loading.",
      "Participated in code reviews and mentored junior developers."
    ],
    technologies: ["React", "Redux", "JavaScript", "CSS/SASS"]
  },
  {
    company: "Startup Inc",
    role: "Web Developer",
    duration: "June 2017 - February 2019",
    description: [
      "Designed and developed responsive websites for clients across various industries.",
      "Created interactive user interfaces with modern JavaScript frameworks.",
      "Implemented REST APIs and integrated third-party services.",
      "Collaborated with designers to transform concepts into functioning websites."
    ],
    technologies: ["JavaScript", "HTML/CSS", "jQuery", "Node.js"]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Netflix");

  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="container-custom">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="highlight">Experience</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Card className="max-w-3xl mx-auto p-6">
            <Tabs defaultValue="Netflix" onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex justify-start mb-6 overflow-x-auto pb-1 w-full">
                {jobs.map(job => (
                  <TabsTrigger 
                    key={job.company} 
                    value={job.company}
                    className="relative"
                  >
                    {activeTab === job.company && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      />
                    )}
                    {job.company}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {jobs.map(job => (
                <TabsContent key={job.company} value={job.company} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-muted-foreground text-sm">{job.duration}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2"></div>
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map(tech => (
                        <span key={tech} className="text-xs bg-secondary px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

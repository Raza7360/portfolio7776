
import { ArrowUpRight, GithubIcon } from "lucide-react";
import { AnimateOnScroll, AnimatedCard } from "./ui/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Next.js, featuring smooth animations and a clean design.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for e-commerce platforms with real-time analytics, order management, and inventory tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather App",
    description: "A weather application that provides real-time weather data, forecasts, and location-based suggestions.",
    tags: ["JavaScript", "APIs", "Responsive Design", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="highlight">My Projects</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.1}>
              <Card className="h-full flex flex-col overflow-hidden group border border-border hover:border-accent/50 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-0 flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <span>View Project</span>
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

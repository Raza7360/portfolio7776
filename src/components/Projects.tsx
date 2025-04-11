
import { ArrowUpRight, GithubIcon, Calendar } from "lucide-react";
import { AnimateOnScroll, AnimatedCard } from "./ui/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Next.js, featuring smooth animations and a clean design.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    liveUrl: "#",
    githubUrl: "#",
    date: "March 2023"
  },
  {
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for e-commerce platforms with real-time analytics, order management, and inventory tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    liveUrl: "#",
    githubUrl: "#",
    date: "December 2022"
  },
  {
    title: "Weather App",
    description: "A weather application that provides real-time weather data, forecasts, and location-based suggestions.",
    tags: ["JavaScript", "APIs", "Responsive Design", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    liveUrl: "#",
    githubUrl: "#",
    date: "August 2022"
  },
  {
    title: "Blog Platform",
    description: "A full-featured blogging platform with markdown support, user authentication, and comment system.",
    tags: ["React", "Firebase", "Markdown", "Authentication"],
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    liveUrl: "#",
    githubUrl: "#",
    date: "May 2022"
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing tasks, projects, and deadlines with customizable workflows.",
    tags: ["Vue.js", "Vuex", "Firebase", "PWA"],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    liveUrl: "#",
    githubUrl: "#",
    date: "January 2022"
  }
];

// Sort projects by date (newest first)
const sortedProjects = [...projects].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export default function Projects() {
  const [progress, setProgress] = useState(0);
  const featuredProjects = sortedProjects.slice(0, 3);
  const timelineProjects = sortedProjects;
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="highlight">My Projects</span>
          </h2>
        </AnimateOnScroll>

        {/* Featured Projects - Top 3 */}
        <div className="mb-16">
          <AnimateOnScroll>
            <h3 className="text-xl font-medium mb-6 text-center">Featured Projects</h3>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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

        {/* Timeline Projects - Timeline on left, cards on right */}
        <div className="mt-16">
          <AnimateOnScroll>
            <h3 className="text-xl font-medium mb-8 text-center">Project Timeline</h3>
          </AnimateOnScroll>
          
          {isMobile ? (
            // Mobile view - cards only
            <div className="space-y-8">
              {timelineProjects.map((project, index) => (
                <AnimateOnScroll key={project.title}>
                  <Card className="border border-border hover:border-accent/50 transition-all overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 md:w-2/3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold">{project.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{project.date}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between mt-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <GithubIcon className="mr-1 h-3 w-3" />
                              Code
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <span>View</span>
                              <ArrowUpRight className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            // Desktop view - timeline + cards
            <div className="flex flex-col md:flex-row gap-8">
              {/* Timeline on left */}
              <div className="md:w-1/3 relative">
                <div className="sticky top-24">
                  <div className="relative h-full">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 h-full w-1 bg-border">
                      <Progress value={progress} className="h-full w-1" />
                    </div>

                    <div className="space-y-12 ml-10">
                      {timelineProjects.map((project, index) => (
                        <AnimateOnScroll key={project.title}>
                          <div className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute left-[-2.25rem] top-1.5 w-4 h-4 rounded-full bg-accent z-10"></div>
                            
                            <div className="mb-1 font-medium">{project.title}</div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3.5 w-3.5 mr-1.5" />
                              <span>{project.date}</span>
                            </div>
                          </div>
                        </AnimateOnScroll>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project cards on right */}
              <div className="md:w-2/3">
                <div className="space-y-8">
                  {timelineProjects.map((project, index) => (
                    <AnimateOnScroll key={project.title}>
                      <Card className="border border-border hover:border-accent/50 transition-all overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/3 h-48 md:h-auto">
                            <img 
                              src={project.imageUrl} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-5 md:w-2/3">
                            <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex justify-between mt-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-muted-foreground"
                                asChild
                              >
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <GithubIcon className="mr-1 h-3 w-3" />
                                  Code
                                </a>
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                asChild
                              >
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <span>View</span>
                                  <ArrowUpRight className="ml-1 h-3 w-3" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

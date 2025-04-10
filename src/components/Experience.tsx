import { useState, useEffect } from "react";
import { AnimateOnScroll } from "./ui/motion";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Quote, Twitter } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const jobs = [{
  company: "Netflix",
  role: "Senior Software Engineer",
  duration: "January 2022 - Present",
  date: "2022-01-01",
  description: ["Led the frontend development of Netflix's content management system, improving content delivery workflows by 25%.", "Architected and implemented a React component library used by 200+ internal developers.", "Optimized web performance, reducing load times by 40% and improving user engagement metrics.", "Collaborated with UX and product teams to refine user journeys and implement responsive designs."],
  technologies: ["React", "TypeScript", "GraphQL", "Next.js"]
}, {
  company: "Airbnb",
  role: "Frontend Engineer",
  duration: "March 2019 - December 2021",
  date: "2019-03-01",
  description: ["Developed and maintained key features for Airbnb's booking platform using React and TypeScript.", "Built reusable components and implemented state management using Redux.", "Improved application performance by implementing code splitting and lazy loading.", "Participated in code reviews and mentored junior developers."],
  technologies: ["React", "Redux", "JavaScript", "CSS/SASS"]
}, {
  company: "Startup Inc",
  role: "Web Developer",
  duration: "June 2017 - February 2019",
  date: "2017-06-01",
  description: ["Designed and developed responsive websites for clients across various industries.", "Created interactive user interfaces with modern JavaScript frameworks.", "Implemented REST APIs and integrated third-party services.", "Collaborated with designers to transform concepts into functioning websites."],
  technologies: ["JavaScript", "HTML/CSS", "jQuery", "Node.js"]
}];

// Sort jobs by date (newest first)
const sortedJobs = [...jobs].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
const testimonials = [{
  name: "Sarah Johnson",
  role: "Product Manager at TechCorp",
  content: "Devraj's ability to translate complex requirements into elegant code is remarkable. He delivered our project ahead of schedule and exceeded all our expectations.",
  avatar: "https://i.pravatar.cc/150?img=1",
  company: "TechCorp",
  date: "March 2023"
}, {
  name: "Michael Chen",
  role: "CTO at StartupXYZ",
  content: "Working with Devraj was a game-changer for our startup. His technical expertise and problem-solving skills helped us launch our MVP in record time.",
  avatar: "https://i.pravatar.cc/150?img=2",
  company: "StartupXYZ",
  date: "January 2023"
}, {
  name: "Emily Rodriguez",
  role: "Director of Engineering at DataViz",
  content: "Devraj is one of the most talented engineers I've worked with. His attention to detail and commitment to code quality set a new standard for our team.",
  avatar: "https://i.pravatar.cc/150?img=3",
  company: "DataViz",
  date: "November 2022"
}, {
  name: "David Kim",
  role: "Founder at MobileApps",
  content: "I've worked with many developers, but Devraj stands out for his communication skills and ability to deliver complex features without compromising on quality.",
  avatar: "https://i.pravatar.cc/150?img=4",
  company: "MobileApps",
  date: "September 2022"
}];
export default function Experience() {
  const [activeTab, setActiveTab] = useState("Netflix");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);
  return <section id="experience" className="section bg-secondary/30">
      <div className="container-custom">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-12 text-center">
            
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          
        </AnimateOnScroll>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <AnimateOnScroll>
            <h3 className="text-xl font-medium mb-8 text-center">What People Say</h3>
          </AnimateOnScroll>
          
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => <CarouselItem key={index}>
                  <div className="p-4">
                    <Card className="p-6 relative">
                      <Quote className="absolute top-4 right-4 h-10 w-10 text-accent/20" />
                      <div className="flex items-center gap-4 mb-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                        <div className="flex items-center text-sm">
                          <Twitter className="h-4 w-4 mr-1 text-accent" />
                          <span>{testimonial.company}</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <AnimateOnScroll>
            <h3 className="text-xl font-medium mb-8 text-center">Career Timeline</h3>
          </AnimateOnScroll>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border">
              <Progress value={progress} className="h-full w-1" />
            </div>

            <div className="space-y-12">
              {sortedJobs.map((job, index) => <AnimateOnScroll key={job.company}>
                  <div className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-card border border-border p-5 rounded-lg shadow-sm hover:border-accent/50 transition-all">
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{job.duration}</span>
                        </div>
                        <h4 className="text-lg font-semibold">{job.company}</h4>
                        <p className="text-accent font-medium text-sm mb-4">{job.role}</p>
                        <ul className="space-y-2 mb-3">
                          {job.description.slice(0, 2).map((point, i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2"></div>
                              <span>{point}</span>
                            </li>)}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.slice(0, 3).map(tech => <span key={tech} className="text-xs bg-secondary px-2 py-1 rounded">
                              {tech}
                            </span>)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty space for opposite side */}
                    <div className="w-5/12"></div>
                  </div>
                </AnimateOnScroll>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
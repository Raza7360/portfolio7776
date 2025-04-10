
import { AnimateOnScroll, ScaleIn } from "./ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MailIcon, MessageSquare, Send } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  
  return (
    <section id="contact" className={`section ${isContactPage ? 'pt-28' : ''}`}>
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="highlight">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
              I'm currently open to new opportunities.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimateOnScroll>
            <Card className="p-6 bg-background shadow-sm flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p className="text-muted-foreground text-sm">
                  Feel free to reach out through the form or directly via email or social media.
                </p>
              </div>
              
              <div className="space-y-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <MailIcon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:hello@devraj.com" className="text-sm text-muted-foreground hover:text-accent">
                      hello@devraj.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <MessageSquare size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Social</p>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <a href="#" className="hover:text-accent">Twitter</a>
                      <span>•</span>
                      <a href="#" className="hover:text-accent">LinkedIn</a>
                      <span>•</span>
                      <a href="#" className="hover:text-accent">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <Card className="p-6 bg-background shadow-sm">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="What would you like to discuss?" 
                    rows={4}
                  />
                </div>
                
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

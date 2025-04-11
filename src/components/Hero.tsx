
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { AnimatedText, FadeIn, ScaleIn } from './ui/motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
      
      <div className="container-custom">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between max-w-5xl mx-auto">
          <div className="max-w-xl text-center md:text-left mt-8 md:mt-0">
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground mb-4">
                Hi, my name is
              </p>
            </FadeIn>
            
            <AnimatedText 
              text="Devraj Chatribin."
              className="text-4xl md:text-6xl font-bold mb-4"
              delay={0.4}
            />
            
            <AnimatedText 
              text="I build exceptional digital experiences."
              className="text-3xl md:text-5xl text-muted-foreground font-semibold mb-8"
              delay={0.8}
            />
            
            <FadeIn delay={1.2}>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
                I'm a software engineer specializing in building (and occasionally designing) 
                exceptional digital experiences. Currently, I'm focused on building accessible, 
                human-centered products.
              </p>
            </FadeIn>
            
            <FadeIn delay={1.5}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Button className="min-w-[150px]" asChild>
                  <Link to="/contact">Get in touch</Link>
                </Button>
                <Button variant="outline" className="min-w-[150px]" asChild>
                  <Link to="/projects">See my work</Link>
                </Button>
              </div>
            </FadeIn>
            
            <ScaleIn delay={1.8}>
              <div className="mt-12 flex items-center justify-center md:justify-start space-x-6">
                <a href="https://github.com" className="text-foreground hover:text-accent transition-colors" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="https://linkedin.com" className="text-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://twitter.com" className="text-foreground hover:text-accent transition-colors" aria-label="Twitter">
                  <TwitterIcon size={20} />
                </a>
              </div>
            </ScaleIn>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto md:mx-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent/30">
              {theme === 'dark' ? (
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80" 
                  alt="Devraj Chatribin - Dark Mode" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80" 
                  alt="Devraj Chatribin - Light Mode" 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

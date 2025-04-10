
import { motion } from 'framer-motion';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { AnimatedText, FadeIn, ScaleIn } from './ui/motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center md:text-left">
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
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Scroll down</p>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDownIcon size={20} className="text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

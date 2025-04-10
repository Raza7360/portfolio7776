
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, title, isActive }: { to: string; title: string; isActive: boolean }) => {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`}
    >
      {title}
    </Link>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-background/80 backdrop-blur-lg shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Devraj<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/about" 
            title="About" 
            isActive={location.pathname === "/about"}
          />
          <NavLink 
            to="/projects" 
            title="Projects" 
            isActive={location.pathname === "/projects"}
          />
          <NavLink 
            to="/experience" 
            title="Experience" 
            isActive={location.pathname === "/experience"}
          />
          <NavLink 
            to="/contact" 
            title="Contact" 
            isActive={location.pathname === "/contact"}
          />
          <Button variant="outline" size="sm">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/95 backdrop-blur-lg"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink 
              to="/about" 
              title="About" 
              isActive={location.pathname === "/about"}
            />
            <NavLink 
              to="/projects" 
              title="Projects" 
              isActive={location.pathname === "/projects"}
            />
            <NavLink 
              to="/experience" 
              title="Experience" 
              isActive={location.pathname === "/experience"}
            />
            <NavLink 
              to="/contact" 
              title="Contact" 
              isActive={location.pathname === "/contact"}
            />
            <Button variant="outline" size="sm" className="w-full">
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

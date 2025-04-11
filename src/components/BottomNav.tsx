
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function BottomNav() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [activeIndicator, setActiveIndicator] = useState(0);

  const navItems = [
    { path: "/", icon: <Home size={20} />, label: "Home" },
    { path: "/about", icon: <User size={20} />, label: "About" },
    { path: "/projects", icon: <Briefcase size={20} />, label: "Projects" },
    { path: "/experience", icon: <FileText size={20} />, label: "Experience" },
    { path: "/contact", icon: <Mail size={20} />, label: "Contact" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = navItems.findIndex(item => item.path === currentPath);
    setActiveIndicator(activeIndex !== -1 ? activeIndex : 0);
  }, [location.pathname]);

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-background/80 backdrop-blur-lg border-t border-border px-2 pb-2 pt-2"
    >
      <div className="flex items-center justify-between max-w-md mx-auto relative">
        {navItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center p-2 rounded-lg relative ${
              activeIndicator === index ? 'text-accent' : 'text-muted-foreground'
            }`}
            onClick={() => setActiveIndicator(index)}
          >
            <div className="mb-1">{item.icon}</div>
            <span className="text-xs font-medium">{item.label}</span>
            {activeIndicator === index && (
              <motion.div
                layoutId="bottomNavIndicator"
                className="absolute bottom-0 w-1 h-1 rounded-full bg-accent"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        ))}
        
        <button 
          onClick={toggleTheme}
          className="flex flex-col items-center justify-center p-2 rounded-lg text-muted-foreground"
        >
          <div className="mb-1">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </div>
          <span className="text-xs font-medium">Theme</span>
        </button>
      </div>
    </motion.div>
  );
}

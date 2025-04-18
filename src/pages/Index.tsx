
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Devraj Chatribin - Software Engineer";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio website for Devraj Chatribin, a software engineer specializing in building exceptional digital experiences.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;

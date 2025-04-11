
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const ExperiencePage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Experience - Devraj Chatribin";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional experience of Devraj Chatribin - a software engineer specializing in building exceptional digital experiences.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Experience />
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default ExperiencePage;

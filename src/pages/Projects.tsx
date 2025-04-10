
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Projects - Devraj Chatribin";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore projects by Devraj Chatribin - a software engineer specializing in building exceptional digital experiences.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

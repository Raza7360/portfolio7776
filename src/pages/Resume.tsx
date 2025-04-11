
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ResumeComponent from '@/components/Resume';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const ResumePage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Resume - Devraj Chatribin";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download the resume of Devraj Chatribin - a software engineer specializing in building exceptional digital experiences.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ResumeComponent />
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default ResumePage;


import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const ContactPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Contact - Devraj Chatribin";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Devraj Chatribin - a software engineer specializing in building exceptional digital experiences.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default ContactPage;

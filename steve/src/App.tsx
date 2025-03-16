import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Hammer, 
  Wrench, 
  Drill, 
  Ruler, 
  Scissors as Saw, 
  Paintbrush as PaintBucket, 
  Menu, 
  X
} from 'lucide-react';
import { HomeSection } from './components/sections/HomeSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { AboutSection } from './components/sections/AboutSection';
import { BookingSection } from './components/sections/BookingSection';
import { ContactSection } from './components/sections/ContactSection';
import './App.css';

// Define types for our data
interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  
  // Animation sequence for Steve building a deck
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 5);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Mock data
  const services: Service[] = [
    { 
      title: 'Carpentry', 
      icon: <Saw className="h-10 w-10 text-amber-600" />,
      description: 'Expert custom deck construction, built-in cabinetry, custom shelving solutions, and handcrafted furniture. Our skilled carpenters use premium materials and precision techniques for durable, beautiful results. From pergolas and gazebos to crown molding and trim work, we deliver quality craftsmanship for all your woodworking needs.'
    },
    { 
      title: 'Plumbing', 
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      description: 'Comprehensive plumbing services including fixture installation, pipe repairs, drain cleaning, water heater replacement, and leak detection. Our licensed plumbers handle everything from emergency repairs to bathroom renovations with fast, reliable service. We use industry-leading techniques and materials to ensure long-lasting solutions for all plumbing issues.'
    },
    { 
      title: 'Electrical', 
      icon: <Drill className="h-10 w-10 text-yellow-500" />,
      description: 'Professional electrical services including lighting installation, outlet repairs, ceiling fan mounting, panel upgrades, and whole-house rewiring. Our certified electricians ensure all work is safe and code-compliant. We specialize in troubleshooting complex electrical issues, smart home wiring, and energy-efficient lighting solutions to improve your home\'s functionality and safety.'
    },
    { 
      title: 'Painting', 
      icon: <PaintBucket className="h-10 w-10 text-red-500" />,
      description: 'Premium interior and exterior painting services using high-quality paints and expert techniques. Our professional painters provide color consultation, surface preparation, precision application, and thorough cleanup. We handle walls, ceilings, trim, cabinets, decks, and siding with meticulous attention to detail. Transform your space with a fresh coat of color backed by our satisfaction guarantee.'
    },
    { 
      title: 'Home Repairs', 
      icon: <Hammer className="h-10 w-10 text-gray-700" />,
      description: 'Comprehensive home repair services including drywall patching, door installation, window replacement, floor repair, tile work, and general maintenance. Our skilled technicians can fix squeaky floors, stuck windows, damaged trim, and more. We pride ourselves on prompt service, quality workmanship, and attention to detail. No job is too small—we\'re here to handle all your home repair needs.'
    },
    { 
      title: 'Remodeling', 
      icon: <Ruler className="h-10 w-10 text-green-600" />,
      description: 'Full-service remodeling for kitchens, bathrooms, basements, and home additions. Our experienced team handles every aspect from design and permitting to construction and finishing touches. We coordinate all trades, manage timelines, and ensure quality control throughout your project. Transform your living spaces with our comprehensive renovation services tailored to your style, budget, and timeline.'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      text: "Steve built a beautiful deck for our backyard. His attention to detail and craftsmanship is outstanding!",
      rating: 5
    },
    {
      name: "Mike Thompson",
      text: "Fixed our leaky bathroom plumbing in no time. Professional, punctual, and reasonably priced.",
      rating: 5
    },
    {
      name: "Jennifer Davis",
      text: "Steve remodeled our kitchen and it looks amazing! He had great suggestions and finished on schedule.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-amber-700 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hammer className="h-6 w-6" />
            <span className="text-xl font-bold">Moonridge Handyman Services</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => setActiveSection('home')}
              className={`hover:text-amber-200 ${activeSection === 'home' ? 'text-amber-200 font-bold' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveSection('services')}
              className={`hover:text-amber-200 ${activeSection === 'services' ? 'text-amber-200 font-bold' : ''}`}
            >
              Services
            </button>
            <button 
              onClick={() => setActiveSection('about')}
              className={`hover:text-amber-200 ${activeSection === 'about' ? 'text-amber-200 font-bold' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveSection('booking')}
              className={`hover:text-amber-200 ${activeSection === 'booking' ? 'text-amber-200 font-bold' : ''}`}
            >
              Book Now
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`hover:text-amber-200 ${activeSection === 'contact' ? 'text-amber-200 font-bold' : ''}`}
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-amber-800 mt-2"
            >
              <div className="flex flex-col p-4 space-y-3">
                <button 
                  onClick={() => {
                    setActiveSection('home')
                    setMobileMenuOpen(false)
                  }}
                  className={`hover:text-amber-200 ${activeSection === 'home' ? 'text-amber-200 font-bold' : ''}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('services')
                    setMobileMenuOpen(false)
                  }}
                  className={`hover:text-amber-200 ${activeSection === 'services' ? 'text-amber-200 font-bold' : ''}`}
                >
                  Services
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('about')
                    setMobileMenuOpen(false)
                  }}
                  className={`hover:text-amber-200 ${activeSection === 'about' ? 'text-amber-200 font-bold' : ''}`}
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('booking')
                    setMobileMenuOpen(false)
                  }}
                  className={`hover:text-amber-200 ${activeSection === 'booking' ? 'text-amber-200 font-bold' : ''}`}
                >
                  Book Now
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('contact')
                    setMobileMenuOpen(false)
                  }}
                  className={`hover:text-amber-200 ${activeSection === 'contact' ? 'text-amber-200 font-bold' : ''}`}
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <HomeSection 
            animationStep={animationStep} 
            services={services} 
            testimonials={testimonials} 
            setActiveSection={setActiveSection} 
          />
        )}
        
        {/* Services Section */}
        {activeSection === 'services' && (
          <ServicesSection 
            services={services} 
            setActiveSection={setActiveSection} 
          />
        )}
        
        {/* About Section */}
        {activeSection === 'about' && (
          <AboutSection testimonials={testimonials} />
        )}
        
        {/* Booking Section */}
        {activeSection === 'booking' && (
          <BookingSection />
        )}
        
        {/* Contact Section */}
        {activeSection === 'contact' && (
          <ContactSection />
        )}
      </main>
    </div>
  );
}

export default App;

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
        {/* Services Section */}
        {activeSection === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-amber-800 mb-8 text-center">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Steve's Handyman Services offers a wide range of professional home improvement and repair services. 
              No job is too big or too small!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-col items-center">
                      {service.icon}
                      <CardTitle className="mt-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-gray-600">{service.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        onClick={() => setActiveSection('booking')}
                        className="bg-amber-600 hover:bg-amber-700"
                      >
                        Book This Service
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Custom Projects</h2>
              <p className="text-gray-600 mb-6">
                Don't see exactly what you need? Steve specializes in custom projects tailored to your specific requirements.
                Contact us to discuss your unique project ideas.
              </p>
              <Button 
                onClick={() => setActiveSection('contact')}
                variant="outline" 
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                Contact for Custom Work
              </Button>
            </div>
          </motion.div>
        )}
        
        {/* About Section */}
        {activeSection === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-amber-800 mb-8 text-center">About Steve</h1>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-amber-100 h-80 rounded-lg flex items-center justify-center">
                  {/* Placeholder for Steve's image */}
                  <div className="w-40 h-60 relative">
                    {/* Steve's body */}
                    <div className="w-32 h-40 bg-blue-600 rounded-t-lg absolute bottom-0 left-4" />
                    {/* Steve's head */}
                    <div className="w-24 h-24 bg-amber-200 rounded-full absolute top-0 left-8" />
                    {/* Steve's arms */}
                    <div className="w-12 h-6 bg-blue-600 absolute top-32 left-0 rounded-full" />
                    <div className="w-12 h-6 bg-blue-600 absolute top-32 right-0 rounded-full" />
                    {/* Steve's tool belt */}
                    <div className="w-32 h-4 bg-amber-800 absolute bottom-12 left-4" />
                    {/* Steve's smile */}
                    <div className="w-12 h-6 border-b-2 border-gray-700 absolute top-14 left-14 rounded-b-full" />
                    {/* Steve's eyes */}
                    <div className="w-3 h-3 bg-gray-700 rounded-full absolute top-10 left-12" />
                    <div className="w-3 h-3 bg-gray-700 rounded-full absolute top-10 right-12" />
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-amber-700">Meet Your Handyman</h2>
                <p className="text-gray-600">
                  With over 15 years of experience in home improvement and repairs, Steve has built a reputation for quality craftsmanship and reliable service in the community.
                </p>
                <p className="text-gray-600">
                  Steve's journey began as an apprentice carpenter, where he honed his woodworking skills before expanding his expertise to include plumbing, electrical work, and general home repairs.
                </p>
                <p className="text-gray-600">
                  What sets Steve apart is his attention to detail and commitment to customer satisfaction. He takes pride in every project, whether it's building a custom deck or fixing a leaky faucet.
                </p>
                <div className="pt-4">
                  <h3 className="font-bold text-amber-700">Certifications:</h3>
                  <ul className="list-disc list-inside text-gray-600 pl-4">
                    <li>Licensed General Contractor</li>
                    <li>Certified Plumbing Technician</li>
                    <li>Electrical Safety Certification</li>
                    <li>Insured and Bonded</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Customer Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-amber-50">
                      <CardHeader>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="italic text-gray-600">"{testimonial.text}"</p>
                      </CardContent>
                      <CardFooter>
                        <p className="font-semibold">- {testimonial.name}</p>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Booking Section */}
        {activeSection === 'booking' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-amber-800 mb-8 text-center">Book an Appointment</h1>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="calendar" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="calendar">Calendar View</TabsTrigger>
                  <TabsTrigger value="form">Request Form</TabsTrigger>
                </TabsList>
                
                <TabsContent value="calendar" className="p-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Select an Available Date</CardTitle>
                      <CardDescription>
                        Steve is available on the highlighted dates. Click to select a time slot.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Calendar />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="form" className="p-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Request an Appointment</CardTitle>
                      <CardDescription>
                        Fill out the form below and Steve will contact you to confirm your appointment.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Full Name
                            </label>
                            <input
                              id="name"
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="John Doe"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium">
                              Service Needed
                            </label>
                            <select
                              id="service"
                              className="w-full p-2 border border-gray-300 rounded-md"
                            >
                              <option value="">Select a service</option>
                              {services.map((service, index) => (
                                <option key={index} value={service.title}>
                                  {service.title}
                                </option>
                              ))}
                              <option value="other">Other (please specify)</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Project Details
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Please describe your project or issue..."
                          ></textarea>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="preferred-date" className="text-sm font-medium">
                            Preferred Date
                          </label>
                          <input
                            id="preferred-date"
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <Button 
                          type="button"
                          className="w-full bg-amber-600 hover:bg-amber-700"
                          onClick={() => alert('Form submitted! Steve will contact you shortly to confirm your appointment.')}
                        >
                          Submit Request
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        )}
        
        {/* Contact Section */}
        {activeSection === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-amber-800 mb-8 text-center">Contact Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-amber-800 mb-6">Get In Touch</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600">(555) 123-4567</p>
                        <p className="text-sm text-gray-500">Available Mon-Fri, 8am-6pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">steve@handymanservices.com</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Service Area</h3>
                        <p className="text-gray-600">Greater Metro Area</p>
                        <p className="text-sm text-gray-500">Within 30 miles of downtown</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                        <p className="text-gray-600">Saturday: 9am - 2pm</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-amber-800 mb-4">Emergency Services</h2>
                  <p className="text-gray-600 mb-4">
                    For urgent plumbing, electrical, or structural issues that can't wait, 
                    call our emergency line:
                  </p>
                  <p className="text-xl font-bold text-amber-600">(555) 987-6543</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Available 24/7 for emergency situations only
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-amber-800 mb-6">Send a Message</h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button 
                    type="button"
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    onClick={() => alert('Message sent! We\'ll get back to you shortly.')}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        )}

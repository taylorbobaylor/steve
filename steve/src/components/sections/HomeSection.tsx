import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';

interface HomeSectionProps {
  animationStep: number;
  services: {
    title: string;
    icon: React.ReactNode;
    description: string;
  }[];
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
  setActiveSection: (section: string) => void;
}

export function HomeSection({ animationStep, services, testimonials, setActiveSection }: HomeSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Hero Section with Deck Building Animation */}
      <div className="relative bg-amber-50 rounded-lg overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row items-center p-6 md:p-12">
          <div className="md:w-1/2 space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800">
              Quality Craftsmanship You Can Trust
            </h1>
            <p className="text-lg text-gray-700">
              From deck building to home repairs, Steve delivers professional handyman services with attention to detail and dedication to quality.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={() => setActiveSection('booking')}
                className="bg-amber-600 hover:bg-amber-700"
              >
                Book Now
              </Button>
              <Button 
                onClick={() => setActiveSection('services')}
                variant="outline" 
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                Our Services
              </Button>
            </div>
          </div>
          
          {/* Deck Building Animation */}
          <div className="md:w-1/2 h-80 relative mt-8 md:mt-0">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* The deck being built */}
              <div className="relative w-64 h-48">
                {/* Base structure - always visible */}
                <motion.div 
                  className="absolute bottom-0 w-full h-4 bg-amber-800 rounded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Posts */}
                <motion.div 
                  className="absolute bottom-4 left-4 w-4 h-24 bg-amber-700 rounded"
                  initial={{ height: 0 }}
                  animate={{ height: animationStep >= 0 ? 24 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute bottom-4 right-4 w-4 h-24 bg-amber-700 rounded"
                  initial={{ height: 0 }}
                  animate={{ height: animationStep >= 0 ? 24 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                
                {/* Joists */}
                <motion.div 
                  className="absolute bottom-28 w-full h-3 bg-amber-600 rounded"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ 
                    opacity: animationStep >= 1 ? 1 : 0,
                    scaleX: animationStep >= 1 ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Decking boards */}
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="absolute w-full h-2 bg-amber-400 rounded"
                    style={{ bottom: 31 + i * 4 }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ 
                      opacity: animationStep >= 2 ? 1 : 0,
                      scaleX: animationStep >= 2 ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  />
                ))}
                
                {/* Railing posts */}
                <motion.div 
                  className="absolute bottom-28 left-2 w-2 h-16 bg-amber-700 rounded"
                  initial={{ height: 0 }}
                  animate={{ 
                    height: animationStep >= 3 ? 16 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-28 right-2 w-2 h-16 bg-amber-700 rounded"
                  initial={{ height: 0 }}
                  animate={{ 
                    height: animationStep >= 3 ? 16 : 0
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
                
                {/* Railing */}
                <motion.div 
                  className="absolute bottom-42 w-full h-2 bg-amber-600 rounded"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ 
                    opacity: animationStep >= 4 ? 1 : 0,
                    scaleX: animationStep >= 4 ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Steve character */}
                <motion.div 
                  className="absolute bottom-48 left-24 w-12 h-20"
                  animate={{ 
                    x: [-10, 10, 30, 0, -20],
                    y: [0, -5, 0, -10, 0]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {/* Steve's body */}
                  <div className="w-8 h-12 bg-blue-600 rounded-t-lg absolute bottom-0 left-2" />
                  {/* Steve's head */}
                  <div className="w-6 h-6 bg-amber-200 rounded-full absolute top-0 left-3" />
                  {/* Steve's arm with tool */}
                  <motion.div 
                    className="w-8 h-2 bg-blue-600 absolute top-8 left-8 origin-left"
                    animate={{ 
                      rotate: [0, 30, 0, -30, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="w-4 h-4 bg-gray-400 absolute right-0 top-0 rounded" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Services */}
      <section>
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
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
                    variant="outline" 
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                    onClick={() => setActiveSection('services')}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button 
            onClick={() => setActiveSection('services')}
            variant="link" 
            className="text-amber-600"
          >
            View All Services
          </Button>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-amber-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white">
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
      </section>
      
      {/* Call to Action */}
      <section className="text-center p-8 bg-amber-700 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Book your appointment today and experience the quality craftsmanship that Steve's Handyman Services is known for.
        </p>
        <Button 
          onClick={() => setActiveSection('booking')}
          size="lg" 
          className="bg-white text-amber-700 hover:bg-amber-100"
        >
          Book Now
        </Button>
      </section>
    </motion.div>
  );
}

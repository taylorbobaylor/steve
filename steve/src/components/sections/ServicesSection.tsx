import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';

interface ServicesSectionProps {
  services: {
    title: string;
    icon: React.ReactNode;
    description: string;
  }[];
  setActiveSection: (section: string) => void;
}

export function ServicesSection({ services, setActiveSection }: ServicesSectionProps) {
  return (
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
  );
}

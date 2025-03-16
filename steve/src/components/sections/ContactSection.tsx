import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/button';

export function ContactSection() {
  return (
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
  );
}

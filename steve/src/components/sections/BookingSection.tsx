import { motion } from 'framer-motion';
import { Calendar } from '../Calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';

export function BookingSection() {
  return (
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
                  Moonridge is available on the highlighted dates. Click to select a time slot.
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
                  Fill out the form below and Moonridge will contact you to confirm your appointment.
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
                        <option value="Carpentry">Carpentry</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Painting">Painting</option>
                        <option value="Home Repairs">Home Repairs</option>
                        <option value="Remodeling">Remodeling</option>
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
                    onClick={() => alert('Form submitted! Moonridge will contact you shortly to confirm your appointment.')}
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
  );
}

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

interface AboutSectionProps {
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
}

export function AboutSection({ testimonials }: AboutSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-amber-800 mb-8 text-center">About Moonridge</h1>
      
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
          <h2 className="text-2xl font-bold text-amber-700">Meet Your Handyman Team</h2>
          <p className="text-gray-600">
            With over 15 years of experience in home improvement and repairs, Moonridge has built a reputation for quality craftsmanship and reliable service in the community.
          </p>
          <p className="text-gray-600">
            Moonridge's journey began with a passion for carpentry, before expanding our expertise to include plumbing, electrical work, painting, and comprehensive home repairs and renovations.
          </p>
          <p className="text-gray-600">
            What sets Moonridge apart is our attention to detail and commitment to customer satisfaction. Our team takes pride in every project, whether it's building a custom deck or fixing a leaky faucet.
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
  );
}

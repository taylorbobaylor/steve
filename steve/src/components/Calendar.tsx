import { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Wrench, Clock3 } from 'lucide-react';

// Mock data for available time slots
const AVAILABLE_DATES = [
  new Date(2025, 2, 18),
  new Date(2025, 2, 19),
  new Date(2025, 2, 20),
  new Date(2025, 2, 23),
  new Date(2025, 2, 24),
  new Date(2025, 2, 25),
  new Date(2025, 2, 26),
];

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

// Service types with estimated durations
const SERVICES = [
  { id: 'carpentry', name: 'Carpentry', duration: 2, icon: <Wrench className="h-5 w-5 text-amber-600" /> },
  { id: 'plumbing', name: 'Plumbing', duration: 1, icon: <Wrench className="h-5 w-5 text-amber-600" /> },
  { id: 'electrical', name: 'Electrical', duration: 1, icon: <Wrench className="h-5 w-5 text-amber-600" /> },
  { id: 'painting', name: 'Painting', duration: 3, icon: <Wrench className="h-5 w-5 text-amber-600" /> },
  { id: 'repairs', name: 'Home Repairs', duration: 2, icon: <Wrench className="h-5 w-5 text-amber-600" /> },
  { id: 'remodeling', name: 'Remodeling', duration: 4, icon: <Wrench className="h-5 w-5 text-amber-600" /> },
];

interface CalendarProps {
  initialService?: string;
}

export function Calendar({ initialService }: CalendarProps = {}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(initialService || null);
  const [selectedDuration, setSelectedDuration] = useState<number>(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Get day of week for first day of month
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const isDateAvailable = (date: Date) => {
    return AVAILABLE_DATES.some(availableDate => 
      availableDate.getDate() === date.getDate() &&
      availableDate.getMonth() === date.getMonth() &&
      availableDate.getFullYear() === date.getFullYear()
    );
  };
  
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };
  
  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleBooking = () => {
    if (selectedDate && selectedTime && selectedService) {
      setBookingConfirmed(true);
    }
  };
  
  const getAvailableTimeSlots = () => {
    // In a real app, this would filter based on service duration and existing bookings
    // For now, we'll just simulate fewer slots for longer duration services
    if (selectedDuration >= 3) {
      return TIME_SLOTS.filter((_, index) => index % 2 === 0); // Every other slot for long jobs
    }
    return TIME_SLOTS;
  };
  
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isAvailable = isDateAvailable(date);
      const isSelected = selectedDate && 
        selectedDate.getDate() === day && 
        selectedDate.getMonth() === month && 
        selectedDate.getFullYear() === year;
      
      days.push(
        <div 
          key={day} 
          className={`h-10 w-10 flex items-center justify-center rounded-full cursor-pointer
            ${isAvailable ? 'hover:bg-amber-100' : 'text-gray-400 cursor-not-allowed'}
            ${isSelected ? 'bg-amber-600 text-white' : ''}
          `}
          onClick={() => isAvailable && handleDateClick(date)}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };
  
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };
  
  return (
    <div className="space-y-6">
      {bookingConfirmed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 p-6 rounded-lg text-center"
        >
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-bold text-green-700 mb-2">Booking Confirmed!</h3>
          <p className="text-gray-600 mb-4">
            Your appointment has been scheduled for:
            <br />
            <span className="font-semibold">
              {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <br />
            <span className="font-semibold">at {selectedTime}</span>
            <br />
            <span className="font-semibold">
              Service: {SERVICES.find(s => s.id === selectedService)?.name}
            </span>
            <br />
            <span className="font-semibold">
              Estimated Duration: {selectedDuration} {selectedDuration === 1 ? 'hour' : 'hours'}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Moonridge will contact you shortly to confirm the details.
          </p>
          <Button 
            className="mt-4 bg-amber-600 hover:bg-amber-700"
            onClick={() => setBookingConfirmed(false)}
          >
            Book Another Appointment
          </Button>
        </motion.div>
      ) : (
        <>
          <div className="space-y-6">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Wrench className="mr-2 h-5 w-5 text-amber-600" />
                Select Service
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {SERVICES.map(service => (
                  <div
                    key={service.id}
                    className={`p-3 border rounded-md cursor-pointer transition-colors
                      ${selectedService === service.id ? 'bg-amber-600 text-white border-amber-600' : 'hover:bg-amber-50 border-gray-200'}
                    `}
                    onClick={() => {
                      setSelectedService(service.id);
                      setSelectedDuration(service.duration);
                    }}
                  >
                    <div className="flex items-center">
                      {service.icon}
                      <span className="ml-2">{service.name}</span>
                    </div>
                    <div className="text-xs mt-1 flex items-center">
                      <Clock3 className="h-3 w-3 mr-1" />
                      {service.duration} {service.duration === 1 ? 'hour' : 'hours'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={prevMonth}>&lt;</Button>
              <h2 className="text-xl font-semibold">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <Button variant="outline" onClick={nextMonth}>&gt;</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="font-medium text-sm py-2">{day}</div>
            ))}
            {renderCalendar()}
          </div>
          
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6"
            >
              <h3 className="text-lg font-semibold flex items-center mb-4">
                <CalendarIcon className="mr-2 h-5 w-5 text-amber-600" />
                Available Times for {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {selectedService ? (
                  getAvailableTimeSlots().map(time => (
                    <div
                      key={time}
                      className={`p-2 border rounded-md text-center cursor-pointer transition-colors
                        ${selectedTime === time ? 'bg-amber-600 text-white border-amber-600' : 'hover:bg-amber-50 border-gray-200'}
                      `}
                      onClick={() => handleTimeClick(time)}
                    >
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {time}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center p-4 text-amber-600">
                    Please select a service first to see available time slots
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  disabled={!selectedTime || !selectedService}
                  onClick={handleBooking}
                >
                  Book Appointment for {selectedDuration} {selectedDuration === 1 ? 'hour' : 'hours'}
                </Button>
              </div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}

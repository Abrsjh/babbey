import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Isabella Richardson",
      location: "London, UK",
      rating: 5,
      text: "Le Grande Luxe exceeded every expectation. The attention to detail, impeccable service, and breathtaking views created an unforgettable experience. This is luxury hospitality at its finest.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      name: "Marcus Chen",
      location: "Singapore",
      rating: 5,
      text: "From the moment I arrived, I felt like royalty. The Presidential Suite was magnificent, and the concierge service was absolutely exceptional. I cannot wait to return.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      location: "Madrid, Spain",
      rating: 5,
      text: "The spa experience was transcendent, and the fine dining restaurant served the most exquisite meal I've ever had. Le Grande Luxe truly understands luxury.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      id: 4,
      name: "James Wellington",
      location: "New York, USA",
      rating: 5,
      text: "As a frequent traveler, I can confidently say this is the pinnacle of luxury accommodation. Every aspect, from the elegant design to the personalized service, was perfection.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? "text-gold fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover why discerning travelers from around the world choose 
            Le Grande Luxe for their most memorable experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <Quote className="text-gold mb-4 mx-auto md:mx-0" size={32} />
                    
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    <div>
                      <h4 className="font-serif text-xl font-bold text-navy mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-500">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-gold text-black p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-gold text-black p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Customer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">98%</div>
            <div className="text-white/80">Guest Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15K+</div>
            <div className="text-white/80">Happy Guests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">4.9</div>
            <div className="text-white/80">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">85%</div>
            <div className="text-white/80">Return Guests</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
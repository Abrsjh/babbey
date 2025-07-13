import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Legacy of Excellence
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Hotel Lobby"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-gold text-black p-6 rounded-lg shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm font-medium">Years of Heritage</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-3xl font-bold text-navy mb-6">
              A Timeless Haven of Sophistication
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Since 1873, Le Grande Luxe has been the epitome of refined hospitality, 
              welcoming discerning guests from around the world. Our storied history 
              is woven into every corner of our magnificent property.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Nestled in the heart of the city, our hotel seamlessly blends timeless 
              elegance with modern luxury. From our meticulously restored architecture 
              to our world-class amenities, every detail reflects our commitment to 
              providing an unparalleled experience.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-4 bg-white rounded-lg shadow-lg"
              >
                <div className="text-2xl font-bold text-gold mb-2">500+</div>
                <div className="text-sm text-gray-600">Luxury Suites</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-4 bg-white rounded-lg shadow-lg"
              >
                <div className="text-2xl font-bold text-gold mb-2">24/7</div>
                <div className="text-sm text-gray-600">Concierge Service</div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary mt-8"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Utensils, 
  Crown, 
  Dumbbell, 
  Car, 
  Wifi,
  Phone,
  ShieldCheck 
} from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Infinity Pool & Spa",
      description: "Relax in our rooftop infinity pool with panoramic city views, complemented by a world-class spa offering rejuvenating treatments."
    },
    {
      icon: Utensils,
      title: "Fine Dining Restaurant",
      description: "Savor exquisite cuisine crafted by our Michelin-starred chefs, featuring the finest ingredients and innovative culinary artistry."
    },
    {
      icon: Crown,
      title: "Personal Concierge",
      description: "Our dedicated concierge team provides personalized assistance 24/7, ensuring every request is fulfilled with precision and care."
    },
    {
      icon: Dumbbell,
      title: "State-of-the-Art Fitness",
      description: "Maintain your wellness routine in our fully equipped fitness center with premium equipment and personal training services."
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Enjoy seamless arrival and departure with our professional valet service, ensuring your vehicle is safely secured."
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Stay connected with complimentary high-speed Wi-Fi throughout the property, perfect for business and leisure needs."
    },
    {
      icon: Phone,
      title: "24/7 Room Service",
      description: "Indulge in exceptional dining from the comfort of your suite with our round-the-clock gourmet room service."
    },
    {
      icon: ShieldCheck,
      title: "Premium Security",
      description: "Rest assured with our advanced security systems and professional security staff ensuring your safety and privacy."
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            World-Class Amenities
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover an array of premium amenities designed to elevate your stay 
            and create unforgettable moments of luxury and comfort.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6 group-hover:bg-gold/20 transition-colors duration-300"
                >
                  <IconComponent 
                    size={32} 
                    className="text-gold group-hover:text-navy transition-colors duration-300" 
                  />
                </motion.div>

                <h3 className="font-serif text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                  {amenity.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Explore All Amenities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
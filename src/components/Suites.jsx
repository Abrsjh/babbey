import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Car, Coffee, Bath } from 'lucide-react';

const RoomCard = ({ room, index }) => {
  const icons = {
    wifi: Wifi,
    parking: Car,
    minibar: Coffee,
    spa: Bath,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold"
        >
          {room.priceRange}
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
          {room.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {room.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {room.features.map((feature, featureIndex) => {
            const IconComponent = icons[feature.icon];
            return (
              <div
                key={featureIndex}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <IconComponent size={16} className="text-gold" />
                <span>{feature.name}</span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gold">
            From {room.price}
            <span className="text-sm text-gray-500 font-normal">/night</span>
          </span>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-navy text-white px-6 py-2 rounded-sm hover:bg-gold hover:text-black transition-all duration-300 font-semibold"
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Suites = () => {
  const rooms = [
    {
      name: "Executive Suite",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: "$599",
      priceRange: "Premium",
      description: "Sophisticated elegance meets modern luxury in our Executive Suite, featuring panoramic city views and premium amenities.",
      features: [
        { name: "High-Speed WiFi", icon: "wifi" },
        { name: "Valet Parking", icon: "parking" },
        { name: "Premium Minibar", icon: "minibar" },
        { name: "Spa Access", icon: "spa" }
      ]
    },
    {
      name: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: "$1,299",
      priceRange: "Luxury",
      description: "The pinnacle of luxury accommodation, our Presidential Suite offers unparalleled space, privacy, and personalized service.",
      features: [
        { name: "High-Speed WiFi", icon: "wifi" },
        { name: "Private Garage", icon: "parking" },
        { name: "Butler Service", icon: "minibar" },
        { name: "Private Spa", icon: "spa" }
      ]
    },
    {
      name: "Royal Penthouse",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: "$2,499",
      priceRange: "Ultra-Luxury",
      description: "Experience absolute luxury in our Royal Penthouse, featuring exclusive amenities and breathtaking panoramic views.",
      features: [
        { name: "Fiber Internet", icon: "wifi" },
        { name: "Helicopter Pad", icon: "parking" },
        { name: "Personal Chef", icon: "minibar" },
        { name: "Private Pool", icon: "spa" }
      ]
    }
  ];

  return (
    <section id="suites" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Exquisite Suites & Accommodations
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each suite is a masterpiece of design and comfort, thoughtfully curated 
            to provide an extraordinary experience tailored to your every need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} index={index} />
          ))}
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
            View All Suites
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Suites;
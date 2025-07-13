import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Heart 
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Suites', href: '#suites' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#careers' }
  ];

  const services = [
    { name: 'Room Service', href: '#' },
    { name: 'Spa & Wellness', href: '#' },
    { name: 'Fine Dining', href: '#' },
    { name: 'Business Center', href: '#' },
    { name: 'Event Planning', href: '#' },
    { name: 'Airport Transfer', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer id="contact" className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-gold">
              Le Grande Luxe
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Experience unparalleled luxury and sophistication at our five-star sanctuary, 
              where every detail is crafted to exceed your expectations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gold/10 text-gold p-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-xl font-bold text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-gold transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-xl font-bold text-gold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-gold transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-xl font-bold text-gold mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 group"
              >
                <MapPin className="text-gold mt-1 group-hover:scale-110 transition-transform duration-300" size={20} />
                <div>
                  <p className="text-gray-400">
                    123 Luxury Avenue<br />
                    Metropolitan District<br />
                    City Center, 10001
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <Phone className="text-gold group-hover:scale-110 transition-transform duration-300" size={20} />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <Mail className="text-gold group-hover:scale-110 transition-transform duration-300" size={20} />
                <p className="text-gray-400">reservations@legrandeluxe.com</p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-6 w-full"
            >
              Make Reservation
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center"
            >
              © 2024 Le Grande Luxe. Made with{' '}
              <Heart className="text-gold mx-1" size={16} fill="currentColor" />
              for luxury travelers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
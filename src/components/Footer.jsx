import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-white py-8 mt-auto">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Information</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <a href="mailto:nur35982@gmail.com" className="hover:underline">nur35982@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <a href="tel:+8801704450886" className="hover:underline">+880 1704 450886</a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>Bashundhara RA, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <a href="/" className="block hover:underline">Home</a>
            <a href="/projects" className="block hover:underline">Projects</a>
            <a href="/writings" className="block hover:underline">Writings</a>
            <a href="/theatre" className="block hover:underline">Theatre</a>
            <a href="https://sites.google.com/view/m-nurnobi-islam/" target="_blank" rel="noopener noreferrer" className="block hover:underline">External Portfolio</a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/Nur35982" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nurnobi-islam-nsu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <Linkedin size={24} />
            </a>
            <a href="https://www.kaggle.com/nur35982" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              Kaggle
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-8 text-center text-sm border-t pt-4">
        <p>© {currentYear} Md. Nurnobi Islam. All rights reserved.</p>
        <p>Built with React and deployed on Vercel</p>
      </div>
    </footer>
  );
};

export default Footer;
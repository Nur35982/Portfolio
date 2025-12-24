import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Writings', path: '/writings' },
    { name: 'Theatre', path: '/theatre' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-neutral">Md. Nurnobi Islam</h1>
            <p className="text-sm text-gray-600">Software Engineer • AI Researcher</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium ${location.pathname === item.path ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://medium.com/@nur35982"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-sm"
          >
            Medium <ExternalLink size={14} className="ml-1" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium ${location.pathname === item.path ? 'text-primary' : 'text-gray-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://sites.google.com/view/m-nurnobi-islam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio <ExternalLink size={14} className="inline ml-1" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
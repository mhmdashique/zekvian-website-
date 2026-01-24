import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
    { name: 'Legal', id: 'legal' },
    { name: 'Security', id: 'security' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-yellow-500/20 shadow-2xl shadow-yellow-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="container-max">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="group flex items-center space-x-3 relative"
            >
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-yellow-500/40 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  <Zap className="text-black w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-amber-400 transition-all duration-300">
                  ZEKVIAN
                </span>
                <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Automation</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-yellow-500/20">
                {navigation.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-black shadow-lg shadow-yellow-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {activeSection !== item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                ))}
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/40 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center text-yellow-400 hover:bg-yellow-500/30 transition-all duration-300"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="w-6 h-6 transform rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 animate-fade-in-up">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}></div>
          <div className="relative mt-20 mx-4">
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 border border-yellow-500/30 rounded-3xl p-8 shadow-2xl shadow-yellow-500/20">
              <div className="space-y-4">
                {navigation.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-6 py-4 text-lg font-medium rounded-2xl transition-all duration-300 animate-delay-${(index + 1) * 100} ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-black shadow-lg shadow-yellow-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-amber-500/10 border border-transparent hover:border-yellow-500/30'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-yellow-500/20">
                  <button
                    onClick={() => {
                      scrollToSection('contact');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center space-x-2"
                  >
                    <span>Get Started</span>
                    <Zap className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
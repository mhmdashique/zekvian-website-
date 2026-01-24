import React from 'react';
import { HelpCircle, ArrowRight, MessageCircle, Clock, Users } from 'lucide-react';

const FAQSection = () => {
  const quickStats = [
    { icon: MessageCircle, label: '10+ Questions', desc: 'Comprehensive answers' },
    { icon: Clock, label: '24/7 Support', desc: 'Always here to help' },
    { icon: Users, label: '1000+ Users', desc: 'Trust our platform' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-500/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-yellow-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Have Questions?
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get instant answers to common questions about our automation platform
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => window.location.href = '/faq'}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/40 hover:scale-105"
          >
            <span>View All FAQs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <p className="text-gray-400 text-sm mt-4">
            Can't find what you're looking for? <span className="text-yellow-400 cursor-pointer hover:text-yellow-300" onClick={() => window.location.href = '/#contact'}>Contact our support team</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
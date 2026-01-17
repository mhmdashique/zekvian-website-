import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CTO, TechCorp',
      content: 'Zekvian transformed our operations completely. We saw 40% efficiency gains within the first month.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'VP Engineering, DataFlow',
      content: 'The best investment we made this year. Seamless integration and outstanding support.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'CEO, InnovateLab',
      content: 'Incredible platform that scales with our business. The analytics insights are game-changing.',
      rating: 5
    }
  ];

  const companies = [
    'TechCorp', 'DataFlow', 'InnovateLab', 'CloudSync', 'NextGen', 'ScaleUp'
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Join thousands of companies that trust <span className="text-yellow-400 font-semibold bg-yellow-500/20 px-2 py-1 rounded border border-yellow-500/30">Zekvian</span> to power their growth.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-500">
                {company}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-black/80 border border-yellow-500/30 p-6 rounded-lg relative hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
            >
              <Quote size={24} className="text-yellow-400 mb-4" />
              
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What is Zekvian's automation platform?",
      answer: "Zekvian is an intelligent automation platform that helps businesses streamline their operations through AI-powered workflows, reducing manual tasks and increasing efficiency by up to 80%."
    },
    {
      question: "How quickly can I implement Zekvian in my business?",
      answer: "Most businesses can get started with Zekvian within 24-48 hours. Our team provides comprehensive onboarding, and basic workflows can be set up in minutes using our intuitive drag-and-drop interface."
    },
    {
      question: "What types of processes can be automated?",
      answer: "Zekvian can automate a wide range of processes including data entry, email marketing, customer onboarding, report generation, inventory management, invoice processing, and much more."
    },
    {
      question: "Is my data secure with Zekvian?",
      answer: "Absolutely. We use enterprise-grade security with 256-bit encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, geographically distributed data centers."
    },
    {
      question: "Do I need technical knowledge to use Zekvian?",
      answer: "No technical knowledge is required. Our platform is designed for business users with an intuitive interface. However, we also provide advanced features for technical teams who want more customization."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support, comprehensive documentation, video tutorials, and dedicated account managers for enterprise clients. Our support team has an average response time of under 2 hours."
    },
    {
      question: "Can Zekvian integrate with my existing tools?",
      answer: "Yes, Zekvian integrates with over 500+ popular business tools including Salesforce, HubSpot, Slack, Microsoft Office, Google Workspace, and many more through our API and pre-built connectors."
    },
    {
      question: "What are your pricing plans?",
      answer: "We offer flexible pricing plans starting from $29/month for small businesses, with enterprise plans available. All plans include core automation features, with advanced features and higher limits in premium tiers."
    },
    {
      question: "Can I try Zekvian before purchasing?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can upgrade anytime during or after the trial period."
    },
    {
      question: "How does Zekvian ensure automation reliability?",
      answer: "Our platform includes built-in error handling, automatic retries, monitoring dashboards, and alert systems. We maintain 99.9% uptime and provide detailed logs for all automation activities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-3 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
            <div className="flex items-center space-x-3">
              <HelpCircle className="w-8 h-8 text-yellow-400" />
              <h1 className="text-2xl font-bold text-white">Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Got Questions?
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent"> We've Got Answers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to the most common questions about Zekvian's automation platform
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/40 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                  <div className="flex-shrink-0">
                    {openItems[index] ? (
                      <ChevronUp className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                </button>
                
                {openItems[index] && (
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <div className="pt-4">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <button
                onClick={() => navigate('/#contact')}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
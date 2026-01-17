import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Zekvian AI Assistant. How can I help you with our automation solutions today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    'hello': "Hello! Welcome to Zekvian. I'm here to help you learn about our enterprise automation solutions.",
    'pricing': "Our pricing is flexible and scales with your business needs. Would you like me to connect you with our sales team for a custom quote?",
    'features': "Zekvian offers AI-powered automation, real-time analytics, enterprise security, and 500+ integrations. Which feature interests you most?",
    'demo': "I'd be happy to arrange a demo for you! Please use our contact form and mention 'Demo Request' - our team will reach out within 24 hours.",
    'support': "Our support team is available 24/7. You can reach them at official.zekvian@gmail.com or through our priority support line.",
    'security': "Security is our top priority. We offer bank-grade encryption, SOC 2 compliance, and advanced threat protection.",
    'integrations': "We support 500+ integrations including popular tools like Salesforce, Slack, Microsoft Teams, and many more.",
    'default': "I understand you're interested in learning more about Zekvian. Could you please be more specific about what you'd like to know? I can help with pricing, features, demos, or technical questions."
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi')) return predefinedResponses.hello;
    if (message.includes('price') || message.includes('cost')) return predefinedResponses.pricing;
    if (message.includes('feature') || message.includes('what can')) return predefinedResponses.features;
    if (message.includes('demo') || message.includes('trial')) return predefinedResponses.demo;
    if (message.includes('support') || message.includes('help')) return predefinedResponses.support;
    if (message.includes('security') || message.includes('secure')) return predefinedResponses.security;
    if (message.includes('integration') || message.includes('connect')) return predefinedResponses.integrations;
    
    return predefinedResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 rounded-full shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300 flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <MessageCircle className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl shadow-2xl shadow-yellow-500/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-black">Zekvian AI</h3>
                <p className="text-xs text-black/70">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 text-black hover:bg-black/10 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-yellow-500' : 'bg-gray-700'}`}>
                    {message.sender === 'user' ? (
                      <User className="w-3 h-3 text-black" />
                    ) : (
                      <Bot className="w-3 h-3 text-yellow-400" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl ${message.sender === 'user' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white border border-yellow-500/20'}`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <Bot className="w-3 h-3 text-yellow-400" />
                  </div>
                  <div className="bg-gray-800 border border-yellow-500/20 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-yellow-500/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border border-yellow-500/30 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
import React, { useState } from 'react';
import '../App.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is TradingGuru?',
      answer:
        'TradingGuru is a premier online trading education platform designed to help aspiring and experienced traders master the financial markets through high-quality courses, webinars, and resources.',
    },
    {
      question: 'How do I enroll in a course?',
      answer:
        'To enroll, visit our Courses page, select your desired course, and click the "Enroll Now" button. Follow the payment process to secure your spot. If you encounter issues, contact our support team at support@tradingguru.com.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All transactions are secure and encrypted for your safety.',
    },
    {
      question: 'Can I get a refund if I’m not satisfied?',
      answer:
        'Yes, we offer a 30-day money-back guarantee. If you’re not satisfied with your course, submit a refund request via our Support Center within 30 days of purchase.',
    },
    {
      question: 'Do you offer live trading sessions?',
      answer:
        'Yes, we provide live trading webinars and sessions as part of our advanced courses. Check the Webinars page for the latest schedule and registration details.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Header Navigation */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl parkinsans-regular text-primary mr-10">
              TradingGuru
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-900 font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="/courses" className="text-gray-600 hover:text-primary transition-colors">
                Courses
              </a>
              <a href="/about-us" className="text-gray-600 hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 text-primary border border-primary rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
              Login
            </button>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
              <i className="ri-user-line text-gray-600"></i>
            </div>
          </div>
        </div>
      </header>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 exo-regular">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our trading courses and services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                >
                  <span className="text-lg font-semibold exo-regular">{faq.question}</span>
                  <span className="text-primary">
                    {openIndex === index ? <i className="ri-subtract-line"></i> : <i className="ri-add-line"></i>}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <a href="/" className="text-2xl parkinsans-regular text-white mb-4 inline-block">
                TradingGuru
              </a>
              <p className="text-gray-400 mb-6">
                TradingGuru is a premier online trading education platform dedicated to helping aspiring
                and experienced traders master the financial markets.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/tradingguru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="https://twitter.com/tradingguru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors"
                  aria-label="Twitter"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/tradingguru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
                <a
                  href="https://www.youtube.com/tradingguru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors"
                  aria-label="YouTube"
                >
                  <i className="ri-youtube-fill"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Get Help</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/support" className="text-gray-400 hover:text-white transition-colors">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="/community" className="text-gray-400 hover:text-white transition-colors">
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/courses" className="text-gray-400 hover:text-white transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/webinars" className="text-gray-400 hover:text-white transition-colors">
                    Free Webinars
                  </a>
                </li>
                <li>
                  <a href="/tools" className="text-gray-400 hover:text-white transition-colors">
                    Trading Tools
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-3 mt-1">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span className="text-gray-400">
                    123 Trading Street, Financial District, New York, NY 10004
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-phone-line"></i>
                  </div>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-mail-line"></i>
                  </div>
                  <span className="text-gray-400">support@tradingguru.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">© 2025 TradingGuru. All rights reserved.</p>
            <div className="flex justify-center mt-4 space-x-6">
              <a href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-gray-500 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FAQ;
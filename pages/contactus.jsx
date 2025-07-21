import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
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

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 exo-regular">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our courses or need assistance? Get in touch with our team today!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 exo-regular">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-medium rounded-button hover:bg-opacity-90 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Office Location */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 exo-regular">Our Office</h3>
              <p className="text-gray-600 mb-4">
                Visit us or get in touch with our team at our headquarters.
              </p>
              <div className="mb-4">
                <iframe
                  title="TradingGuru Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.956058600477!2d-73.98735428514995!3d40.74844097932559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b7e3b3a9%3A0x2ab7f25e9f1f9e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1624567890!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 Trading Street, Financial District, New York, NY 10004
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> support@tradingguru.com
              </p>
            </div>
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

export default Contact;
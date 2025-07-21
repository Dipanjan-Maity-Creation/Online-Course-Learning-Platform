import React from 'react';
import '../App.css';

function AboutUs() {
  return (
    <div className="bg-white">
      {/* Header Navigation */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl parkinsans-regular text-primary mr-10">
              logo
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-900 font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="/courses" className="text-gray-600 hover:text-primary transition-colors">
                Courses
              </a>
              <button
                className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                onClick={() => alert('Student Offer clicked')} // Placeholder action
              >
                Student Offer
              </button>
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

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 exo-regular">About TradingGuru</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              TradingGuru is a premier online trading education platform dedicated to empowering aspiring
              and experienced traders with the knowledge and tools to succeed in the financial markets.
              Founded in 2020, we’ve helped over 10,000 traders worldwide achieve their financial goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 exo-regular">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                Our mission is to democratize trading education by providing accessible, high-quality
                courses and resources that cater to traders of all levels. We aim to foster a community
                where knowledge and success are shared.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 exo-regular">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                We envision a world where every trader, regardless of background, has the skills and
                confidence to navigate the markets and build wealth through informed decisions.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button
              className="px-8 py-3 bg-primary text-white font-medium rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
              onClick={() => alert('Learn More clicked')} // Placeholder action
            >
              Learn More About Our Journey
            </button>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 exo-regular">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of expert traders and educators brings decades of experience to guide you on your
              trading journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold exo-regular">John Doe</h4>
              <p className="text-gray-600">Head Trader & CEO</p>
              <p className="text-gray-500 text-sm mt-2">
                15+ years in forex and stock markets
              </p>
              <button
                className="mt-4 text-primary hover:underline"
                onClick={() => alert('Profile clicked')} // Placeholder action
              >
                View Profile
              </button>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold exo-regular">Jane Smith</h4>
              <p className="text-gray-600">Senior Educator</p>
              <p className="text-gray-500 text-sm mt-2">
                10+ years in technical analysis
              </p>
              <button
                className="mt-4 text-primary hover:underline"
                onClick={() => alert('Profile clicked')} // Placeholder action
              >
                View Profile
              </button>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold exo-regular">Michael Lee</h4>
              <p className="text-gray-600">Crypto Specialist</p>
              <p className="text-gray-500 text-sm mt-2">
                8+ years in cryptocurrency trading
              </p>
              <button
                className="mt-4 text-primary hover:underline"
                onClick={() => alert('Profile clicked')} // Placeholder action
              >
                View Profile
              </button>
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
                logo
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

export default AboutUs;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const [showAdminPopup, setShowAdminPopup] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    if (adminId === '100pipsgang' && password === 'pipsgang@100') {
      setShowAdminPopup(false);
      navigate('/admin-dashboard');
    } else {
      setError('Invalid admin ID or password');
    }
  };

  return (
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
              <li>
                <button
                  className="mt-1 text-gray-400 hover:text-white transition-colors w-full text-left"
                  onClick={() => setShowAdminPopup(true)}
                >
                  Admin Dashboard
                </button>
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

      {showAdminPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md text-white">
            <h3 className="text-xl font-semibold mb-4 exo-regular">Admin Login</h3>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Admin ID</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 text-gray-300 hover:text-gray-100"
                onClick={() => setShowAdminPopup(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90"
                onClick={handleAdminLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
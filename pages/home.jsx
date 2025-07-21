import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import HeroImage from '../images/pexels-aedrian-10653886.jpg';
import TraderImage from '../images/pexels-tima-miroshnichenko-7567497.jpg';
import CourseImage from '../images/pexels-arturoaez225-29611783.jpg';
import TradingClassImage from '../images/pexels-alphatradezone-5831254.jpg';
import BlogImage from '../images/pexels-anntarazevich-14751274.jpg';

function Home() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [showAdminPopup, setShowAdminPopup] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkbox = document.querySelector('.custom-checkbox');
    if (checkbox) {
      const handleCheckboxClick = () => {
        checkbox.classList.toggle('checked');
      };
      checkbox.addEventListener('click', handleCheckboxClick);
      return () => {
        checkbox.removeEventListener('click', handleCheckboxClick);
      };
    }
  }, []);

  const handleQuoteClick = () => {
    setIsQuotePopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsQuotePopupOpen(false);
  };

  const handleAdminLogin = () => {
    if (adminId === '100pipsgang' && password === 'pipsgang@100') {
      setShowAdminPopup(false);
      navigate('/admin-dashboard');
    } else {
      setError('Invalid admin ID or password');
    }
  };

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
                onClick={handleQuoteClick}
                className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
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

      {/* Quote Popup */}
      {isQuotePopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-700 exo-regular">Get Free Quote</h2>
            <p className="text-gray-600 mb-4">
              Discover tailored solutions for your business needs with our free quote service. Let our experts at HSR Hi-Tech Solutions guide you towards success. Request your complimentary quote today!
            </p>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700">Full Name*</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email Address*</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Mobile Number*</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Your Mobile Number"
                  />
                </div>
                <div></div> {/* Empty div to maintain grid symmetry */}
                <div className="col-span-2">
                  <label className="block text-gray-700">Your Request</label>
                  <textarea
                    maxLength="200"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Enter your request"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="w-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.4)), url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 exo-regular">
              Master the Art of Trading with Our Free Masterclass
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Join 10,000+ successful traders who have transformed their financial future with our proven
              strategies and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-3 bg-primary text-white font-medium rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                Register Now
              </button>
              <button
                className="px-8 py-3 border border-white text-white font-medium rounded-button hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                Explore Course
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={TraderImage}
              alt="Professional trader demonstrating trading strategies"
              className="rounded-lg shadow-xl max-w-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 exo-regular">Why Choose TradingGuru</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with expert knowledge to deliver the most
              comprehensive trading education available.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mx-auto mb-4">
                <i className="ri-live-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 exo-regular">Live Trading Sessions</h3>
              <p className="text-gray-600">
                Watch our experts trade in real-time and learn their decision-making process.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mx-auto mb-4">
                <i className="ri-line-chart-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 exo-regular">Proven Success Rate</h3>
              <p className="text-gray-600">
                87% of our students report significant improvement in their trading results.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-2-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 exo-regular">24/7 Community Support</h3>
              <p className="text-gray-600">
                Join our active community of traders for continuous learning and support.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mx-auto mb-4">
                <i className="ri-graduation-cap-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 exo-regular">Expert-Led Curriculum</h3>
              <p className="text-gray-600">
                Learn from professional traders with over 15 years of market experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 exo-regular">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular trading courses designed to take you from beginner to pro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="course-card bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={CourseImage}
                  alt="Forex Fundamentals course illustration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    Beginner
                  </span>
                  <div className="flex items-center">
                    <i className="ri-star-fill text-yellow-400"></i>
                    <span className="text-gray-700 ml-1">4.8</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 exo-regular">Forex Fundamentals Masterclass</h3>
                <p className="text-gray-600 mb-4">
                  Learn the essentials of forex trading from currency pairs to economic indicators.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">$142.49</span>
                    <span className="text-xl font-bold text-red-500 line-through">${(142.49 * 1.1).toFixed(2)}</span>
                  </div>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
            <div className="course-card bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={CourseImage}
                  alt="Advanced Technical Analysis course illustration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    Intermediate
                  </span>
                  <div className="flex items-center">
                    <i className="ri-star-fill text-yellow-400"></i>
                    <span className="text-gray-700 ml-1">4.9</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 exo-regular">Advanced Technical Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Master chart patterns, indicators, and develop your own trading strategy.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">$189.99</span>
                    <span className="text-xl font-bold text-red-500 line-through">${(189.99 * 1.1).toFixed(2)}</span>
                  </div>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
            <div className="course-card bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={CourseImage}
                  alt="Cryptocurrency Trading Pro course illustration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                    Advanced
                  </span>
                  <div className="flex items-center">
                    <i className="ri-star-fill text-yellow-400"></i>
                    <span className="text-gray-700 ml-1">4.7</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 exo-regular">Cryptocurrency Trading Pro</h3>
                <p className="text-gray-600 mb-4">
                  Navigate the volatile crypto markets with confidence using our proven strategies.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">$237.49</span>
                    <span className="text-xl font-bold text-red-500 line-through">${(237.49 * 1.1).toFixed(2)}</span>
                  </div>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button
              className="px-8 py-3 border border-primary text-primary font-medium rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
            >
              View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* Free Masterclass Promotion */}
      <section className="masterclass-section py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 exo-regular">Free Trading Masterclass: July 15, 2025</h2>
              <p className="text-gray-600 mb-6">
                Join our exclusive 2-hour live session where our head trader will reveal the exact strategy
                that generated a 43% return in the last quarter. Limited spots available!
              </p>
              <ul className="mb-8">
                <li className="flex items-start mb-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-1">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">Live market analysis and trade setups</span>
                </li>
                <li className="flex items-start mb-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-1">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">Risk management techniques for consistent profits</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3 mt-1">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">Q&A session with our professional traders</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <button
                  className="px-6 py-3 bg-primary text-white font-medium rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
                >
                  Reserve Your Spot
                </button>
                <button
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-button hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={TradingClassImage}
                alt="Live trading masterclass session"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 exo-regular">Student Feedback</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students who have transformed their trading journey with our courses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="testimonial-card bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="ri-double-quotes-l text-primary text-3xl mr-2"></i>
              </div>
              <p className="text-gray-700 mb-6">
                "The technical analysis course completely changed how I approach the markets. I've gone from
                random trading to having a structured plan for every trade."
              </p>
              <div>
                <h4 className="font-semibold">Michael Richardson</h4>
                <p className="text-gray-600 text-sm">Forex Trader, London</p>
              </div>
            </div>
            <div className="testimonial-card bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="ri-double-quotes-l text-primary text-3xl mr-2"></i>
              </div>
              <p className="text-gray-700 mb-6">
                "The live trading sessions are invaluable. Watching professional traders analyze the market
                in real-time has accelerated my learning curve tremendously."
              </p>
              <div>
                <h4 className="font-semibold">Jennifer Lawson</h4>
                <p className="text-gray-600 text-sm">Day Trader, Toronto</p>
              </div>
            </div>
            <div className="testimonial-card bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="ri-double-quotes-l text-primary text-3xl mr-2"></i>
              </div>
              <p className="text-gray-700 mb-6">
                "After six months of following the TradingGuru system, I've achieved consistent monthly
                profits for the first time in my 3 years of trading."
              </p>
              <div>
                <h4 className="font-semibold">Robert Chambers</h4>
                <p className="text-gray-600 text-sm">Swing Trader, Sydney</p>
              </div>
            </div>
            <div className="testimonial-card bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="ri-double-quotes-l text-primary text-3xl mr-2"></i>
              </div>
              <p className="text-gray-700 mb-6">
                "The community support is exceptional. Having access to experienced traders who can answer
                your questions at any time is worth the price alone."
              </p>
              <div>
                <h4 className="font-semibold">Sophia Martinez</h4>
                <p className="text-gray-600 text-sm">Crypto Trader, Singapore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 exo-regular">Latest Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest insights, market analysis, and trading strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="article-card bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gray-200">
                <img
                  src={BlogImage}
                  alt="Market analysis article illustration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>July 1, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 exo-regular">5 Key Indicators Every Forex Trader Should Monitor</h3>
                <p className="text-gray-600 mb-4">
                  Learn which economic indicators have the biggest impact on currency markets and how to
                  interpret them for trading advantage.
                </p>
                <a href="/articles/5-key-indicators" className="text-primary font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>
            <div className="article-card bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gray-200">
                <img
                  src={BlogImage}
                  alt="DeFi trading opportunities article illustration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>June 28, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 exo-regular">The Future of DeFi: Trading Opportunities in Decentralized Finance</h3>
                <p className="text-gray-600 mb-4">
                  Explore how decentralized finance is creating new trading opportunities and how you can
                  position yourself to benefit.
                </p>
                <a href="/articles/defi-opportunities" className="text-primary font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>
            <div className="article-card bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gray-200">
                <img
                  src={BlogImage}
                  alt="Risk management strategies article illustration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>June 25, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 exo-regular">Risk Management Strategies That Saved My Trading Career</h3>
                <p className="text-gray-600 mb-4">
                  Our head trader shares the exact risk management techniques that helped him overcome a
                  60% drawdown and achieve consistent profitability.
                </p>
                <a href="/articles/risk-management" className="text-primary font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button
              className="px-8 py-3 border border-primary text-primary font-medium rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
            >
              All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 exo-regular">Get Trading Insights Delivered to Your Inbox</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter and receive weekly market analysis, trading tips, and exclusive
              educational content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                className="px-6 py-3 bg-primary text-white font-medium rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <input
                type="checkbox"
                id="consent"
                className="custom-checkbox mr-2"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I agree to receive marketing emails and can unsubscribe at any time
              </label>
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
    </div>
  );
}

export default Home;
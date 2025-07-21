import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/aboutus'; // Corrected to match aboutus.jsx
import Contact from './pages/contactus'; // Corrected to match contact.jsx
import FAQ from './pages/faq';
import Support from './pages/support';
import Community from './pages/community';
import RefundPolicy from './pages/refundpolicy';
import Webinars from './pages/webinars';
import Tools from './pages/tools';
import Blog from './pages/blog';
import PrivacyPolicy from './pages/privacypolicy';
import TermsOfService from './pages/termsofservice';
import CookiePolicy from './pages/cookiepolicy';
import AdminDashboard from './pages/admindashboard'; // Added for admin dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/courses" element={<div>Courses Page (Under Development)</div>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/community" element={<Community />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Added admin dashboard route */}
        <Route path="/admin-dashboard/users" element={<div>Users Page (Under Development)</div>} />
        <Route path="/admin-dashboard/courses" element={<div>Courses Page (Under Development)</div>} />
        <Route path="/admin-dashboard/reports" element={<div>Reports Page (Under Development)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
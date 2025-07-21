import React from 'react';
import '../App.css';
import Footer from '../components/Footer'; // Ensure this file exists in src/components/

function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl parkinsans-regular text-primary mr-10">
              TradingGuru
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/admin-dashboard/users" className="text-gray-900 font-medium hover:text-primary transition-colors">
                Users
              </a>
              <a href="/admin-dashboard/courses" className="text-gray-600 hover:text-primary transition-colors">
                Courses
              </a>
              <a href="/admin-dashboard/reports" className="text-gray-600 hover:text-primary transition-colors">
                Reports
              </a>
            </nav>
          </div>
          <button
            className="px-6 py-2 text-primary border border-primary rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
            onClick={() => alert('Logout functionality to be implemented')}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <section className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 exo-regular">Admin Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            Welcome to the admin panel. Manage users, courses, and generate reports here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Total Users</h3>
              <p className="text-gray-600">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Active Courses</h3>
              <p className="text-gray-600">15</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Pending Requests</h3>
              <p className="text-gray-600">8</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdminDashboard;
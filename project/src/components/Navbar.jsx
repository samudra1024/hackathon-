import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            AI Interviewer
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              to="/interview"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              Start Interview
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
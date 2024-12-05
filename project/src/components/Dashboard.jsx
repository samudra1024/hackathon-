import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">AI Interview Practice Platform</h1>
        
        <div className="grid gap-6 mb-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Start New Interview</h2>
            <p className="mb-4">Practice your interview skills with our AI interviewer.</p>
            <Link
              to="/interview"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Begin Interview
            </Link>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Real-time speech recognition</li>
              <li>Natural language processing</li>
              <li>Detailed feedback</li>
              <li>Context-aware responses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
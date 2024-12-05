import React from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const InterviewUI = ({ messages, isListening, onStartListening, onStopListening }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">AI Interview Session</h1>
        
        <div className="h-96 overflow-y-auto mb-6 p-4 border rounded">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.role === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={isListening ? onStopListening : onStartListening}
            className={`p-4 rounded-full ${
              isListening
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            {isListening ? (
              <FaMicrophoneSlash size={24} />
            ) : (
              <FaMicrophone size={24} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewUI;
import React, { useState, useEffect } from 'react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import InterviewUI from './InterviewUI';
import { processResponse } from '../utils/aiUtils';

const Interview = () => {
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const { transcript, startListening, stopListening } = useSpeechRecognition();
  const { speak } = useSpeechSynthesis();

  const handleUserResponse = async (response) => {
    setMessages(prev => [...prev, { role: 'user', content: response }]);
    
    try {
      const aiResponse = await processResponse(response);
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      speak(aiResponse);
    } catch (error) {
      console.error('Error processing response:', error);
    }
  };

  useEffect(() => {
    if (transcript) {
      handleUserResponse(transcript);
    }
  }, [transcript]);

  return (
    <InterviewUI
      messages={messages}
      isListening={isListening}
      onStartListening={() => {
        setIsListening(true);
        startListening();
      }}
      onStopListening={() => {
        setIsListening(false);
        stopListening();
      }}
    />
  );
};

export default Interview;
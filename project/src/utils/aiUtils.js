import axios from 'axios';

export const processResponse = async (userInput) => {
  try {
    const response = await axios.post('/api/chat', { message: userInput });
    return response.data.reply;
  } catch (error) {
    console.error('Error processing AI response:', error);
    throw error;
  }
};
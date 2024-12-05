import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const startInterview = async (userId) => {
  const response = await axios.post(`${API_URL}/interview/start`, { userId });
  return response.data;
};

export const sendMessage = async (interviewId, message) => {
  const response = await axios.post(`${API_URL}/interview/message`, {
    interviewId,
    message
  });
  return response.data;
};

export const getInterviewHistory = async (userId) => {
  const response = await axios.get(`${API_URL}/interview/history/${userId}`);
  return response.data;
};

export const registerUser = async (name, email) => {
  const response = await axios.post(`${API_URL}/user/register`, { name, email });
  return response.data;
};

export const getUserProfile = async (userId) => {
  const response = await axios.get(`${API_URL}/user/profile/${userId}`);
  return response.data;
};

export const updateUserStats = async (userId, interviewScore) => {
  const response = await axios.put(`${API_URL}/user/stats/${userId}`, {
    interviewScore
  });
  return response.data;
};
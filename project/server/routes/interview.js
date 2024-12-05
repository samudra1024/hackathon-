import express from 'express';
import Interview from '../models/Interview.js';
import { processAIResponse } from '../services/openai.js';

const router = express.Router();

// Start new interview session
router.post('/start', async (req, res) => {
  try {
    const { userId } = req.body;
    const interview = new Interview({
      userId,
      messages: []
    });
    await interview.save();
    res.json({ interviewId: interview._id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to start interview' });
  }
});

// Process interview message
router.post('/message', async (req, res) => {
  try {
    const { interviewId, message } = req.body;
    const interview = await Interview.findById(interviewId);
    
    if (!interview) {
      return res.status(404).json({ error: 'Interview not found' });
    }

    // Add user message
    interview.messages.push({
      role: 'user',
      content: message
    });

    // Get AI response
    const aiResponse = await processAIResponse(message, interview.messages);
    
    // Add AI response
    interview.messages.push({
      role: 'assistant',
      content: aiResponse
    });

    await interview.save();
    res.json({ reply: aiResponse });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process message' });
  }
});

// Get interview history
router.get('/history/:userId', async (req, res) => {
  try {
    const interviews = await Interview.find({ userId: req.params.userId })
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch interview history' });
  }
});

export default router;
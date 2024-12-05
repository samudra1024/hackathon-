import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Create new user
router.post('/register', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Get user profile
router.get('/profile/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
});

// Update user stats
router.put('/stats/:userId', async (req, res) => {
  try {
    const { interviewScore } = req.body;
    const user = await User.findById(req.params.userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.interviewCount += 1;
    user.averageScore = (user.averageScore * (user.interviewCount - 1) + interviewScore) / user.interviewCount;
    
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user stats' });
  }
});

export default router;
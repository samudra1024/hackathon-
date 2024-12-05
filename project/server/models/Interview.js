import mongoose from 'mongoose';

const InterviewSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  messages: [{
    role: {
      type: String,
      enum: ['user', 'assistant'],
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  feedback: {
    type: String
  },
  score: {
    type: Number,
    min: 0,
    max: 100
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Interview', InterviewSchema);
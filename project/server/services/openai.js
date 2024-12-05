import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const processAIResponse = async (message, context) => {
  try {
    const messages = [
      {
        role: "system",
        content: `You are an expert technical interviewer conducting a programming interview. 
                 Provide detailed technical questions, evaluate responses, and give constructive feedback. 
                 Focus on both technical knowledge and problem-solving approach.`
      },
      ...context.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: "user",
        content: message
      }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to process AI response');
  }
};
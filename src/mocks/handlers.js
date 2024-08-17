// mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  // Mock endpoint for evaluating coursework
  rest.post('/api/evaluate', (req, res, ctx) => {
    const { title, subject, courseworkType } = req.body;

    // Mock response data
    const mockEvaluation = {
      score: 85,
      criteria: {
        A: 90,
        B: 80,
        C: 85,
      },
      date: new Date().toISOString(),
    };

    return res(
      ctx.status(200),
      ctx.json({
        title,
        subject,
        courseworkType,
        evaluation: mockEvaluation,
      })
    );
  }),
];

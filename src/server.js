const express = require('express');
const { callAI } = require('./callAI');

const app = express();
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.post('/review', async (req, res) => {
  const { code } = req.body || {};
  if (typeof code !== 'string' || code.trim().length === 0) {
    return res.status(400).json({ error: 'Provide non-empty code as a string.' });
  }

  try {
    const review = await callAI(code);
    return res.json({ review });
  } catch (error) {
    const status = error.response?.status || 502;
    const message = error.response?.data?.error?.message || error.message || 'AI request failed';
    console.error('[AI ERROR]', message);
    return res.status(status).json({ error: 'Code review request failed.' });
  }
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`Code Buddy listening on port ${port}`));

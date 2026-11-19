const fs = require('node:fs');
const path = require('node:path');
const axios = require('axios');
require('dotenv').config();

const promptPath = path.join(__dirname, '..', 'prompts', 'system-prompt.txt');
const systemPrompt = fs.readFileSync(promptPath, 'utf8').trim();
const INPUT_RATE_PER_TOKEN = 0.0000025;
const OUTPUT_RATE_PER_TOKEN = 0.00001;

async function callAI(code) {
  if (!process.env.OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY is not configured');
  }

  const response = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: code }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'Code Buddy'
      },
      timeout: 60000
    }
  );

  const usage = response.data && response.data.usage;
  if (usage) {
    const promptTokens = usage.prompt_tokens ?? 0;
    const completionTokens = usage.completion_tokens ?? 0;
    const totalTokens = usage.total_tokens ?? promptTokens + completionTokens;
    const cost = promptTokens * INPUT_RATE_PER_TOKEN + completionTokens * OUTPUT_RATE_PER_TOKEN;
    console.log(
      `[TOKEN LOG] prompt_tokens: ${promptTokens} | completion_tokens: ${completionTokens} | total: ${totalTokens} | est_cost_usd: $${cost.toFixed(4)}`
    );
  } else {
    console.warn('[TOKEN LOG] Provider response did not include usage data');
  }

  return response.data.choices?.[0]?.message?.content ?? '';
}

module.exports = { callAI };

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // ✅ Fixes CORS errors

app.get('/', (req, res) => {
  res.send('Server is live! Try /quote');
});

app.get('/quote', (req, res) => {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "Build. Break. Learn. Repeat.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

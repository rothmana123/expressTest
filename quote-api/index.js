// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/quote', (req, res) => {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "If you are working on something exciting, it will keep you motivated."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//   res.json({ quote: randomQuote });
     res.json({randomQuote });


});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

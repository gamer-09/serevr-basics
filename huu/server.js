require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', name: 'huu', message: 'Server is running' });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  const shownHost = host === '0.0.0.0' ? 'localhost' : host;
  console.log(`Server listening on http://${shownHost}:${port}`);
});

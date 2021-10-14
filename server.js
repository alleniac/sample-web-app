const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.get('/api/info', (req, res) => {
  res.send({
    name: 'Allen',
    position: 'Web Developer'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
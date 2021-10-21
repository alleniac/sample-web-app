const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');

app.get('/api/info', (req, res) => {
  res.send({
    name: 'Allen',
    position: 'Web Developer'
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
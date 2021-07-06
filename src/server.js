const express = require('express')

const app = express();
app.get('/', (req, res) => {
  res.json({
    status: 200,
    arr: [
      { title: 'this is tittle', content: 'hello node！' }
    ]
  });
});
app.listen(3000);

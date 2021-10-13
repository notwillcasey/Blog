const express = require('express');
const app = express();
const PORT = 2000;

app.use(express.static('./client/public'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
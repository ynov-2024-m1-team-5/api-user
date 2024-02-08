const express = require('express');
const app = express();
const sequelize = require('./models/index.js');
const router = require('./routes/index.js');
const port = 8001;

app.use(express.json());
app.use("/api", router);
app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`),
  sequelize.sequelize.authenticate(),
  sequelize.sequelize.sync();
});
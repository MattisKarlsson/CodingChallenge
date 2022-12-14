const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' });

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));

connectDB();
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors')
const router = require('./src/routes/router');

// Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// const corsOptions = {
//   origin: 'https://fsw-todo-list-app.vercel.app',
// };

app.use(cors());

// router
app.use(router);

app.listen(PORT, () => {
  console.log(`Server telah berjalan pada http://localhost:${PORT} `);
});
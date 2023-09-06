require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors')
const router = require('./src/routes/router');


const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// router
app.use(router);

app.listen(PORT, () => {
  console.log(`Server telah berjalan pada http://localhost:${PORT} `);
});
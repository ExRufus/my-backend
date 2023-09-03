const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(code) {
  const payload = {
    user: code
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h' })
}

module.exports = jwtGenerator; 
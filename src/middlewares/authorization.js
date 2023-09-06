const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    
    const jwtToken = req.header('token');
    
    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)

    req.user = payload.user;
    next();
  } catch (error) {

    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: 'Maaf, terjadi kegagalan pada server kami'
    });
  }
}
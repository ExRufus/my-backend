module.exports = (req, res, next) => {
  const { code } = req.body;

  function validCode(userCode) {
    return /^\d{4}$/.test(userCode);
  }

  if (req.path === "/register") {
    console.log(!code.length);
    if (![code].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!validCode(code)) {
      return res.status(401).json("Invalid code");
    }

  } else if (req.path === "/login") {
    if (![code].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!validCode(code)) {
      return res.status(401).json("Invalid code");
    }
  }

  next();
};
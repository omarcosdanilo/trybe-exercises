const generateToken = require('./generateToken');

authMiddleware = (req, res, next) => {
  const { email, password, name, phone } = req.headers;
  console.log(email, password, name, phone);
  if (!email || !password || !name || !phone) return res.status(401).json({
    message: 'missing fields'
  });

  const token = generateToken();

  req.token = {token};

  next();
}

module.exports = authMiddleware;
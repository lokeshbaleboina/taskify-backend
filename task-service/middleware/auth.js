const axios = require("axios");

module.exports = async function (req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const response = await axios.get(process.env.USER_SERVICE_VERIFY_URL, {
      headers: { authorization: token }
    });

    if (response.data.valid) {
      req.userId = response.data.userId;
      next();
    } else {
      res.status(401).json({ message: "Invalid token" });
    }

  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

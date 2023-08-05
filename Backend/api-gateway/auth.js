const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const authenticateUser = (req, res, next) => {
  try {
    const token = req.cookies.jwt
    jwt.verify(token, "qwertyuiopasdfghjklzxcvbnmqwertyui", (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      req.body.username = decoded.username;
      next();
    });

   


  }

  catch (error) {
    console.log(error)
  }
}

  module.exports = authenticateUser;
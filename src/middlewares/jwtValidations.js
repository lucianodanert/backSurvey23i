import jwt from "jsonwebtoken";

const validateJWT = (req, res, next) => {
  
  const roken = req.header("x-access-token");
  if (!token) {
    
    res.status(401).json({ message: "Need to send a token in the request" });
    
    try {
      const payload = jwt.verify(token, process.env.SECRET_JWT);
      req.id = payload.uid;
      req.name = payload.userName;
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .json({ message: "Invalid token - authentification failed" });
    }
    next();
  }
};

export default validateJWT;
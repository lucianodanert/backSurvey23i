import jwt from "jsonwebtoken";

const validateJWT = (req, res, next) => {
  
  const token = req.header("x-access-token");

  if (!token) {
    res.status(401).json({ message: "A token in the request is required to be sent" });
    
  }
    try {
      console.log("Inicio de desencriptado")
      const payload = jwt.verify(token, process.env.SECRET_JWT);
      req.id = payload.uid;
      req.username = payload.username;
      req.email = payload.email; 
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .json({ message: "Invalid token - authentification failed" });
    }
    next();
  
};

export default validateJWT
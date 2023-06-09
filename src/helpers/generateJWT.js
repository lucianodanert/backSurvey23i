import jwt from "jsonwebtoken";

const generateJWT = (uid, username, email) => {

  return new Promise((resolve, reject) => {

    const payload = { uid, username, email };
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: "30m" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Error generating token");
        }
        
        resolve(token);
      }
    );
  });
};

export default generateJWT
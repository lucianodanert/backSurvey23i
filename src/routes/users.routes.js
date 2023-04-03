import { Router } from "express";
import { login, register } from '../controllers/users.controllers';
import validateJWT from "../middlewares/jwtValidations";
import userValidations from "../middlewares/userValidations";

const router = Router();

router
  .route("/login")
  .post(validateJWT, login)
  
router
  .route("/register")
  .post([validateJWT, userValidations], register)

export default router;

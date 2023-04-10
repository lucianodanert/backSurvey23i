import { Router } from "express";

import { login, register } from '../controllers/users.controllers';
import validateJWT from "../middlewares/jwtValidations";
import userValidations from "../middlewares/userValidations";
import loginValidations from "../middlewares/loginValidations";


const router = Router();

router

  .route("/login")
  .post(loginValidations, login)
  
router
  .route("/register")
  .post(userValidations, register)


export default router;

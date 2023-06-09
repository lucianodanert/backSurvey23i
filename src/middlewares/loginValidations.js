import { check } from "express-validator";
import validationsResult from "../helpers/validationResults";

const loginValidations = [
    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isLength({ min: 6, max: 100 })
    .withMessage("El email debe tener entre 6 y 100 caracteres"),
    check("password")
    .notEmpty()
    .withMessage("El password es obligatorio")
    .isLength({ min: 8})
    .withMessage("El password debe tener mas de 8 caracteres"),
    (req, res, next) => {
      validationsResult(req, res, next);
    },
  ];
  
  export default loginValidations;
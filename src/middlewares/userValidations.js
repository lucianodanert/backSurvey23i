import { check } from "express-validator";
import validationsResult from "../helpers/validationResults";

const userValidations = [
    check("name")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del usuario debe tener entre 2 y 100 caracteres"),
    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isLength({ min: 6, max: 100 })
    .withMessage("El email debe tener entre 6 y 100 caracteres"),
    check("password")
    .notEmpty()
    .withMessage("El password es obligatorio")
    .isLength({ min: 8, max: 20 })
    .withMessage("El password debe tener entre 8 y 20 caracteres"),
    (req, res, next) => {
      validationsResult(req, res, next);
    },
  ];
  
  
  export default userValidations;
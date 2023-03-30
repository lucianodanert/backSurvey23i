import { check } from "express-validator";
import validationsResult from "../helpers/validationResults";

const surveyValidate = [
  check("surveyName")
  .notEmpty()
  .withMessage("El nombre de la encuesta es obligatorio")
  .isLength({ min: 2, max: 100 })
  .withMessage("El nombre de la encuesta debe tener entre 2 y 100 caracteres"),
  check("category")
  .notEmpty()
  .withMessage("La categoria es obligatoria")
  .isLength({ min: 2, max: 100 })
  .withMessage("La categoría debe tener entre 2 y 100 caracteres"),

  (req, res, next) => {
    validationsResult(req, res, next);
  },
];


export default surveyValidate;

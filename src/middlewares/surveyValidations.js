import { check } from "express-validator";
import validationsResult from "../helpers/validationResults";

const surveyValidate = [
  check("surveyName")
  .notEmpty()
  .withMessage("El nombre de la encuesta es obligatorio")
  .isLength({ min: 5, max: 50 })
  .withMessage("El nombre de la encuesta debe tener entre 2 y 100 caracteres"),
  check("category")
  .notEmpty()
  .isLength({ min: 1, max: 50 })
  .withMessage("La categoria es obligatoria"),

  (req, res, next) => {
    validationsResult(req, res, next);
  },
];


export default surveyValidate;

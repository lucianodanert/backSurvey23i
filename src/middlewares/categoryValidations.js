import { check } from "express-validator";
import validationsResult from "../helpers/validationResults";

const categoryValidate = [
  check("categoryName")
  .notEmpty()
  .withMessage("El nombre de la categoria es obligatorio")
  .isLength({ min: 2, max: 100 }),

  (req, res, next) => {
    validationsResult(req, res, next);
  },
];


export default categoryValidate;

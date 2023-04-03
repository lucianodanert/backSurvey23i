import { Router } from "express";
import surveyValidate from "../middlewares/surveyValidations";
import {
  showSurveys,
  createSurvey,
  getOne,
  updateSurvey,
  deleteOne,
} from "../controllers/surveys.controllers";
//creamos la instancia del router

const router = Router();

//Agregar rutas
router
  .route("/")
  .get(showSurveys)
  .post(surveyValidate,createSurvey);

router.route("/:id").get(getOne).put(updateSurvey).delete(deleteOne);

export default router;

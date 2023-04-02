import { Router } from "express";
import surveyValidate from "../middlewares/surveyValidations";
import {
  showSurveys,
  createSurvey,
  getOne,
  updateSurvey,
  deleteOne,
} from "../controllers/surveys.controllers";

const router = Router();

router
  .route("/")
  .get(showSurveys)
  .post([validateJWT, surveyValidate],createSurvey);

router
.route("/:id")
.get(getOne)
.put([validateJWT, surveyValidate],updateSurvey)
.delete(validateJWT, deleteOne);

export default router;

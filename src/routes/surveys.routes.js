import { Router } from "express";
import surveyValidate from "../middlewares/surveyValidations";
import {
  showSurveys,
  createSurvey,
  getOne,
  updateSurvey,
  deleteOne,
  showActiveSurveys,
} from "../controllers/surveys.controllers";

import validateJWT from "../middlewares/jwtValidations";


const router = Router();

router
  .route("/")
  .get(validateJWT, showSurveys)
  .post([ validateJWT,  surveyValidate],createSurvey);


router
.route("/showActive").get(showActiveSurveys);

router
.route("/:id")
.get(getOne)
.put([validateJWT, surveyValidate],updateSurvey)
.delete( validateJWT,  deleteOne);


export default router;
import { Router } from "express";
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
router.route("/").get(showSurveys).post(createSurvey);

router.route("/:id").get(getOne).put(updateSurvey).delete(deleteOne);

export default router;

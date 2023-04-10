import { Router } from "express";
import categoryValidate from "../middlewares/categoryValidations";
import { createCategory, showCategorys, deleteOneCategory, updateCategory,getOneCategory } from "../controllers/category.controllers";
//creamos la instancia del router

const routerCategory = Router();

//Agregar rutas
routerCategory
  .route("/")
  .get(showCategorys) 
  .post(categoryValidate, createCategory)
routerCategory
  .route("/:id") 
  .delete(deleteOneCategory) 
  .put(updateCategory)
  .get(getOneCategory)

export default routerCategory;

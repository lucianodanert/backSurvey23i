import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./database";
import router from "./routes/surveys.routes";
import auth from './routes/users.routes'
import * as dotenv from 'dotenv'
import routerCategory from "./routes/category.routes";


const app = express();

console.log("Desde mi backend");

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("=====================================");
  console.log("estoy en el puerto " + app.get("port"));
  console.log("=====================================");
});

dotenv.config()
app.use(morgan("dev")); 
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")))

app.use("/apiSurveys", router);
app.use('/apiSurveys/auth', auth);
app.use("/apiCategorys", routerCategory);


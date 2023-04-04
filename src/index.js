import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./database";
import router from "./routes/surveys.routes";


//crear la instancia de express
const app = express();

console.log("Desde mi backend");

//crear un puerto, en variable de entorno PORT

app.set("port", process.env.PORT || 4000);

//Obtener el puerto

app.listen(app.get("port"), () => {
  console.log("=====================================");
  console.log("estoy en el puerto " + app.get("port"));
  console.log("=====================================");
});
//middlewares
app.use(morgan("dev")); //nos da información de la consulta tipo status tiempo de ejecucion
app.use(cors()); //no permite recibir peticiones remotas a nuestra API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//generando rutas

app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, "../public")))

app.use("/apiSurveys", router);

/* app.get("/", (req, res) => {
  res.send("Esta es una prueba desde mi backend");
});

app.delete("/borrarProducto", (req, res) => {
  res.send("Se borró el producto");
});
 */
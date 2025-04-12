/*importamos al framework express */

import express from "express";
import categoriasRoutes from "./routers/categorias.routes.js"
import cors from "cors"

/*Asignamos a app toda funcionalidad para mi server web */

const app = express();

/*setear un puerto ami web server */
app.set("port",5000);

app.use(cors());

/*routers */

app.use("/api/categorias",categoriasRoutes)

export default app;
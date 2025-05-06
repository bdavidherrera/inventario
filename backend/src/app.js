/*importamos al framework express */

import express from "express";
import categoriasRoutes from "./routers/categorias.routes.js"
import cors from "cors"

/*Asignamos a app toda funcionalidad para mi server web */

const app = express();

/*setear un puerto ami web server */
app.set("port",5000);

/* Elemento entre la request y la responsive*/
app.use(express.json());

app.use(cors());

/*routers */

app.use("/api/categorias",categoriasRoutes)


app.get("/",(req,res)=>{
    res.send("REST API EN RENDER WITHOUT DATABASE ENDPOINTS-----Herrera Barajas Brayan David B191")
});

export default app;
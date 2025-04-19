import {Router} from "express";
import {methodHTPP as categoriaController} from "../controllers/categorias.controllers.js";
/*Creamos el enrutador */
const router = Router();

/*get */
/*Configuramos respuesta desde server metodo http get */
router.get("/", categoriaController.getCategorias); /*Parra CRUD - read */
router.post("/", categoriaController.postCategorias);/*para crud - create */

/*Ruta que resive un parametro */

router.get("/:id", categoriaController.getCategory);/* para crud - read 1 solo fila */
/*Resive para metro id de categoria a borrar */
router.delete("/:id", categoriaController.deleteCategory);/* para crud - read 1 solo fila para ser borrada */

/*Ruta que resive como parametro tanto el cuerpo como del id a actualizar*/
router.put("/:id", categoriaController.updateCategorias);/* para crud - read 1 solo fila para ser actualizada */



export default router;

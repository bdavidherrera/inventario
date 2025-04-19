import getConnection from "../db/database.js"

const getCategorias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result= await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias ")
        res.json(result) 
    } catch (error) {
        console.error("ERROR 500");
    }
    
}

const postCategorias = async (req, res)=>{
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body/* Destructurar es extraer las propiedades de un objecto y convertirlas en variables*/

        const category = {
            CategoriaNombre, Descripcion, Imagen
        }

        const connection = await getConnection()

        const result= await connection.query("INSERT INTO categorias SET ?", category)

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");/* Errores de los servidores*/
    }
}



/*Devolución de una sola fila */
const getCategory = async (req, res)=>{
    try {
        console.log(req.params.id);
        const {id} =req.params
        const connection = await getConnection();
        const result= await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", id)
        res.json(result) 
        
    } catch (error) {
        console.error("ERROR 500");
    }
    
}

const deleteCategory = async (req, res)=>{
    try {
        console.log("Id categoria a borrar", req.params.id);
        const {id} =req.params
        const connection = await getConnection();
        const result= await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", id)
        res.json(result) 
        
    } catch (error) {
        console.error("ERROR 500");
    }
    
}


/*Update categorias */


const updateCategorias = async (req, res)=>{
    try {

        const{id} = req.params

        const {CategoriaNombre, Descripcion, Imagen} = req.body/* Destructurar es extraer las propiedades de un objecto y convertirlas en variables*/

        const category = {
            CategoriaNombre, Descripcion, Imagen
        }

        const connection = await getConnection()

        const result= await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?", [category, id])

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");/* Errores de los servidores*/
    }
}




export const methodHTPP = {
    getCategorias,
    postCategorias,
    getCategory,
    deleteCategory,
    updateCategorias
}


/*async, wait (Promesas) */

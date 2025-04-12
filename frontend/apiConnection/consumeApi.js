const url = "http://localhost:5000/api/categorias"
/*API = Apliccation programa interface */

export const obtainCategories = async ()=>{
    try {
        const resultado = await fetch(url); //primer then garantiza conección al recurso
        const categorias = await resultado.json(); //Segundo then
        return categorias
    } catch (error) {
        console.error("error");

    }
}




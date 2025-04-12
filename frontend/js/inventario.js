import {obtainCategories} from "./../apiConnection/consumeApi.js"

/* Escuchador de eventos*/

document.addEventListener("DOMContentLoaded", ()=>{
    getCategories();
})

async function getCategories(){
const categoriesObtained = await obtainCategories();
/*Se identifica un etiqueta en el html*/ 
const container = document.querySelector('tbody')
/*Recorrer*/ 
categoriesObtained.forEach((category)=>{
/*Destructurar convertimos las propiedades de un literal object y se convierte en variables*/ 
const{CategoriaID, CategoriaNombre, Descripcion, Imagen} = category
/*Destructurar cada unas de sus columnas para insertar dinamicamente */
const row = document.createElement('tr')
row.innerHTML=`
<td>
${CategoriaID}
</td>
<td>
${CategoriaNombre}
</td>
<td>
${Descripcion}
</td>
<td>
<img src="${Imagen}" width="100px" class= "cuenta">
</td>
<td>
<button class="btn color3">Details</button>
</td>
<td>
<button class="btn color2">Edit</button>
</td>
<td>
<button class="btn color5">Delete</button>
</td>
`;
/*Container tu vas a tener un hijo que es row*/container.appendChild(row);
})
}

let listaNombresGastos = [];
let listaValoresGastos = [];

//Esta funcion se inicia al momento de el que usuario hace click en el boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
 
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
     alert('clik del usuario');

document.getElementById('nombreGasto').value=""  
document.getElementById('valorGasto').value=""
}

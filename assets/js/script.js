let listaNombresGastos = [];
let listaValoresGastos = [];

let totalGastoGeneral=0
let bandera2=false
var bandera=false
function clickBoton(){ 
  const anterioElementos = document.getElementById('GastoAnterior');
  
let nombregasto = document.getElementById('nombreGasto').value;
let valorGasto = document.getElementById('valorGasto').value;
listaNombresGastos.push(nombregasto);
listaValoresGastos.push(valorGasto);
actualizarListaGastos()
anterioElementos.innerHTML=totalGastoGeneral
unAlert()

}


function actualizarListaGastos(){

  const listaElementos = document.getElementById('listaDeGastos');
const totalElementos = document.getElementById('totalGastos');
let htmlLista = '';
let totalGasto = 0;
          //  dot to iterar onto unordered list 
listaNombresGastos.forEach((elemento,posicion) => {
    const valorGasto = Number(listaValoresGastos [posicion]);
          // add variables to invoke from callback   
    htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
    </li>`;
    // Calculamos El Total Gasto
    totalGasto += Number(valorGasto);
    
});
listaElementos.innerHTML = htmlLista;
totalElementos.innerHTML = totalGasto.toFixed(2);
//limpiar();
totalGastoGeneral=totalGasto;

}







function unAlert() {
let personasUnicas =listaNombresGastos.reduce((unique, item) => {
        if (!unique.some(obj => obj.nombreGasto === item.nombreGasto)) {
            unique.push(item);
        bandera=false
        }
        else{
        bandera=true
       }
return unique 
},[]);
        console.log(personasUnicas)
//return bandera
}













// usando librerias 
const alertas=({objeto})=>{
const listaElementos = document.getElementById('listaDeGastos');
Swal.fire({
    title: 'nombre\n\ del\n\ gasto\n\n\ Repetido!',
    text: 'Do you want to continue',
    icon: 'question',
    showDenyButton: true,
    confirmButtonText: "Save",
     }).then((result) => {
    if (result.isConfirmed) {
   bandera2=true
   __listaNombresGastos.push({objeto});
    }
    else if (result.isDenied) {
    __listaNombresGastos.splice({objeto}, 1);
    bandera2=false
    } 
    })
    console.log(bandera)
    console.log(bandera2)
}
function limpiar(){
  document.getElementById('nombreGasto').value = "";
  document.getElementById('valorGasto').value = "";

}

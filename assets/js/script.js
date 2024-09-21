
let __listaNombresGastos = [];
let __listaNombresGastos1 = [];
let bandera2=false
var bandera=false
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    const objeto ={
          nombreGasto,
          valorGasto,
          }

__listaNombresGastos.push({nombreGasto,valorGasto});
          unAlert() 
if(bandera==true){
  alertas(objeto)
}
          console.log(__listaNombresGastos)
}

function unAlert() {
let personasUnicas = __listaNombresGastos.reduce((unique, item) => {
        if (!unique.some(obj => obj.nombreGasto === item.nombreGasto)) {
            unique.push(item);
        bandera=false
        }
        else{
        bandera=true
       }
return unique 
},[]);
        limpiar()
        console.log(personasUnicas)
return bandera
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

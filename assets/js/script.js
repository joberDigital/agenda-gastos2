let __listaNombresGastos = [];
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    const objeto ={
        nombreGasto,
        valorGasto,
            }
    __listaNombresGastos.push({nombreGasto,valorGasto});
    console.log(__listaNombresGastos);
     alert('clik del usuario');

document.getElementById('nombreGasto').value=""  
document.getElementById('valorGasto').value=""
}


let listaNombresGastos = [];
let listaValoresGastos = [];

let __lista = [];
let totalGastoGeneral=0;
let bandera2=false
var bandera=false

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

     listaNombresGastos.push(nombreGasto);
     listaValoresGastos.push(valorGasto);

    unAlert() 
    if(bandera==true){
      alertas({nombreGasto})
    }
      console.log(listaNombresGastos)
      console.log(listaValoresGastos)
  
      //const mostrarTotal=
      actualizarListaGastos()
}


const actualizarListaGastos=()=>{
  const totalElementos = document.getElementById('totalGastos');



  totalElementos.innerHTML=valorGasto
console.log()
}




function unAlert() {
let personasUnicas = listaNombresGastos.reduce((unique, item) => {
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
//        console.log(personasUnicas)
return bandera
}
                // usando librerias 
const alertas=({nombreGasto})=>{
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
   listaNombresGastos.push({nombreGasto});
    }
    else if (result.isDenied) {
    listaNombresGastos.splice(nombreGasto, 1);
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

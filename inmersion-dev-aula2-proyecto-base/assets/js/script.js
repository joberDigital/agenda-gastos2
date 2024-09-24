let bandera2=false
var bandera=false
let confirmar

const arrayAlmacen =[]
let personasUnicas =[]
let __listaNombresGastos =[];
let totalGastoGeneral=0;
let gastoActual = -1;


function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    const objeto ={
          nombreGasto,
          valorGasto,
          }

<<<<<<< HEAD
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
=======
          if (gastoActual === -1) {
            __listaNombresGastos.push({nombreGasto,valorGasto});

          } else {
            arrayAlmacen[gastoActual] = nombreGasto;
            arrayAlmacen[gastoActual] = valorGasto;
            gastoActual = -1; 
            document.getElementById('botonActualizar').style.display = 'none';
            document.getElementById('botonFormulario').style.display = 'block';
        }

          unAlert(valorGasto) 
                 if(bandera){
          alertas()
          }
          actualizarListaGastos()
        }
function unAlert({valorGasto}) {

         personasUnicas = __listaNombresGastos.reduce((unique, item) => {
        if (!unique.some(obj => obj.nombreGasto === item.nombreGasto)) {
        unique.push(item);
        unique.concat(valorGasto)
          bandera=false
        }
        else{
        confirmar=item
        bandera=true
       }
        return unique
},[]);
if(bandera2){
        arrayAlmacen.push(confirmar)
        arrayAlmacen.concat(personasUnicas)  

      }
        else if(bandera2==false){
          confirmar=""
        }
        return bandera
}
function actualizarListaGastos(){
        const listaElementos = document.getElementById('listaDeGastos');
        const totalElementos = document.getElementById('totalGastos');
        let htmlLista = '';
        let totalGasto = 0;
          //  dot to iterar onto unordered list 
        arrayAlmacen.forEach((elemento,posicion) => {
        const valorGasto = Number(arrayAlmacen[posicion].valorGasto);
          // add variables to invoke from callback   
htmlLista += `<li>${arrayAlmacen[posicion].nombreGasto} - USD ${valorGasto.toFixed(2)}
<button onclick="eliminarGasto(${posicion});">Eliminar</button>
<button onclick="modificarGasto(${posicion});">Modificar</button>
</li>`;
    // Calculamos El Total Gasto
    totalGasto += Number(valorGasto);
});
        listaElementos.innerHTML = htmlLista;
        totalElementos.innerHTML = totalGasto.toFixed(2);
        totalGastoGeneral=totalGasto.toFixed(2);
        limpiar();
}
// usando librerias 

const alertas=()=>{
>>>>>>> step_4
Swal.fire({
    title: 'nombre\n\ del\n\ gasto\n\n\ Repetido!',
    text: 'Do you want to continue',
    icon: 'question',
    showDenyButton: true,
    confirmButtonText: "Save",
     }).then((result) => {
    if (result.isConfirmed) {
   bandera2=true
<<<<<<< HEAD
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
=======
}
  else if (result.isDenied) {
    bandera2=false
    } 
    console.log(bandera2)
  })
   return bandera2
}
function eliminarGasto(posicion){
        const totalAnterior = document.getElementById('totalAnterior');
        arrayAlmacen.splice(posicion,1);
        totalAnterior.innerHTML=totalGastoGeneral
        actualizarListaGastos();
}
function limpiar(){
        document.getElementById('nombreGasto').value = "";
        document.getElementById('valorGasto').value = "";
}
function modificarGasto(posicion){
        document.getElementById('nombreGasto').value = arrayAlmacen[posicion].nombreGasto
        document.getElementById('valorGasto').value = arrayAlmacen[posicion].valorGasto
          gastoActual = posicion;
        document.getElementById('botonActualizar').style.display = 'block';
        document.getElementById('botonFormulario').style.display = 'none';
        console.log(posicion)
}
function actualizarGasto(){
        clickBoton();
}
>>>>>>> step_4

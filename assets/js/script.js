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
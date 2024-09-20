let __listaNombresGastos = [];
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
const objeto ={
        nombreGasto,
        valorGasto,
            }
__listaNombresGastos.push({nombreGasto,valorGasto});
let personasUnicas = __listaNombresGastos.reduce((unique, item) => {
        if (!unique.some(obj => obj.nombreGasto === item.nombreGasto)) {
            unique.push(item);
        }
        return unique;
    }, []);
    console.log(personasUnicas);
 alert('clik del usuario');
document.getElementById('nombreGasto').value=""  
document.getElementById('valorGasto').value=""
}

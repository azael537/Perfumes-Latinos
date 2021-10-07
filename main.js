var perfumesJuana = [];
var perfumesPedro = [];
var aquaJ = [];
var emocionJ = [];
var alegriaJ = [];
var frescuraJ = [];
var aquaP = [];
var emocionP = [];
var alegriaP = [];
var frescuraP = [];
var btnAgregar = document.getElementById("btn-add");
btnAgregar.onclick = agregarArticulo;
document.getElementById("btn-juana").onclick = enviarCuentaJuana;
document.getElementById("btn-pedro").onclick = enviarCuentaPedro;
document.getElementById("btn-mes").onclick = vendedorMes;
function agregarArticulo() {
        let empleado = document.getElementById("empleado").value;
        let perfume = document.getElementById("perfume").value;
        let cantidad = document.getElementById("cantidad").value;
        let precio = document.getElementById("precio").value;
        document.getElementById("empleado").value = "";
        document.getElementById("perfume").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("precio").value = "";
    let articuloJuana = {
        emp: empleado,
        perf: perfume,
        cant: cantidad,
        prec: precio
    }
    let articuloPedro = {
        emp: empleado,
        perf: perfume,
        cant: cantidad,
        prec: precio
    }
    if (empleado === "Juana") {
        perfumesJuana.push(articuloJuana);
            if (perfume === "Aqua"){
                aquaJ.push(cantidad);
            }
            if (perfume === "Emocion"){
                emocionJ.push(cantidad);
            }
            if (perfume === "Alegria"){
                alegriaJ.push(cantidad);
            }
            else if (perfume === "Frescura"){
                frescuraJ.push(cantidad);
            }
    }
    else if(empleado === "Pedro") {
        perfumesPedro.push(articuloPedro);
            if (perfume === "Aqua"){
                aquaP.push(cantidad);
            }
            if (perfume === "Emocion"){
                emocionP.push(cantidad);
            }
            if (perfume === "Alegria"){
                alegriaP.push(cantidad);
            }
            else if (perfume === "Frescura"){
                frescuraP.push(cantidad);
            } 
        }  
}
function enviarCuentaJuana(){
    let totalJuana = 0;
    for (let index = 0; index < perfumesJuana.length; index++) {
        totalJuana += Number(perfumesJuana[index].prec) * parseInt(perfumesJuana[index].cant);
    }
    let sumAqua = 0;
    for (let i = 0; i < aquaJ.length; i++) {
    sumAqua += Number(aquaJ[i]);
    }
    let sumEmocion = 0;
    for (let i = 0; i < emocionJ.length; i++) {
    sumEmocion += Number(emocionJ[i]);
    }
    let sumAlegria = 0;
    for (let i = 0; i < alegriaJ.length; i++) {
    sumAlegria += Number(alegriaJ[i]);
    }
    let sumFrescura = 0;
    for (let i = 0; i < frescuraJ.length; i++) {
    sumFrescura += Number(frescuraJ[i]);
    }
    alert(`Juana vendio: $${totalJuana}.00 pesos`);
    document.write(`Juana vendio los sigueintes perfumes, Aqua: ${sumAqua}, Emocion: ${sumEmocion}, Alegria: ${sumAlegria} y Frescura: ${sumFrescura}`);
}
function enviarCuentaPedro(){
    let totalPedro = 0;
    for (let index = 0; index < perfumesPedro.length; index++) {
        totalPedro += Number(perfumesPedro[index].prec) * parseInt(perfumesPedro[index].cant);
    }
    let sumAqua = 0;
    for (let i = 0; i < aquaP.length; i++) {
    sumAqua += Number(aquaP[i]);
    }
    let sumEmocion = 0;
    for (let i = 0; i < emocionP.length; i++) {
    sumEmocion += Number(emocionP[i]);
    }
    let sumAlegria = 0;
    for (let i = 0; i < alegriaP.length; i++) {
    sumAlegria += Number(alegriaP[i]);
    }
    let sumFrescura = 0;
    for (let i = 0; i < frescuraP.length; i++) {
    sumFrescura += Number(frescuraP[i]);
    }
    alert(`Pedro vendio: $${totalPedro}.00 pesos`);
    document.write(`Pedro vendio los sigueintes perfumes, Aqua: ${sumAqua}, Emocion: ${sumEmocion}, Alegria: ${sumAlegria} y Frescura: ${sumFrescura}`);
}
function vendedorMes(){
    let vendedorJ = 0;
    for (let index = 0; index < perfumesJuana.length; index++) {
        vendedorJ += Number(perfumesJuana[index].prec) * parseInt(perfumesJuana[index].cant);
    }
    let vendedorP = 0;
    for (let index = 0; index < perfumesPedro.length; index++) {
        vendedorP += Number(perfumesPedro[index].prec) * parseInt(perfumesPedro[index].cant);
    }
    if (vendedorJ > vendedorP) {
        alert(`Juana es la vendedora del mes, con un total de : $${vendedorJ}.00 pesos en ventas`);
    }
    if (vendedorJ < vendedorP) {
        alert(`Pedro es la vendedor del mes, con un total de : $${vendedorP}.00 pesos en ventas`);
    }
    else if (vendedorJ === vendedorP){
    }
    alert(`Existe un empate, Juana vendio: $${vendedorJ}.00 pesos y Pedro vendio: $${vendedorP}.00 pesos`);
}




let hora = document.getElementById("hora");
let fecha = document.getElementById("fecha");
let zonaHoraria = document.getElementById("zonaHoraria");


function mostrarHora() {
  let tiempo = dayjs();
  zonaHoraria.innerText = tiempo.format("[America/Argentina]");
  hora.innerText = tiempo.format("hh:mm:ss");
  fecha.innerText = tiempo.format("dddd, D MMMM, YYYY ");
}

setInterval( mostrarHora,1000)

let hora = document.getElementById("hora");
let fecha = document.getElementById("fecha");
let zonaHoraria = document.getElementById("zonaHoraria");
let contenedor = document.querySelector(".contenedor");         

function mostrarHora() {
  let tiempo = dayjs();
  zonaHoraria.innerText = tiempo.format("[America/Argentina]");
  hora.innerText = tiempo.format("hh:mm:ss");
  fecha.innerText = tiempo.format("dddd, D MMMM, YYYY ");
}

setInterval(mostrarHora, 1000);

function obtenerColor() {
  let red = Math.round(Math.random()*255)
  let green = Math.round(Math.random()*255)
  let blue = Math.round(Math.random()*255)
  return `rgb(${red},${green},${blue})`
}

function cambiarColores() {
  contenedor.style.backgroundColor = obtenerColor();
}

setInterval(cambiarColores, 300);
const cuadro = document.querySelectorAll(".cuadro");
const tiempoFaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoActual = tiempoFaltante.textContent;

function cuadroAzar() {
  cuadro.forEach((nombreDeClase) => {
    nombreDeClase.classList.remove("topo");
  })
}

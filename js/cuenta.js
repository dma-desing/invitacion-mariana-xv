// Fecha objetivo: 24 de mayo de 2025 a medianoche
const targetDate = new Date("2025-05-24T00:00:00").getTime();

function actualizarCuenta() {
  const ahora = new Date().getTime();
  const diferencia = targetDate - ahora;

  if (diferencia <= 0) {
    document.getElementById("countdown").innerHTML = "¡El gran día ha llegado!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(dias).padStart(2, '0');
  document.getElementById("hours").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutos).padStart(2, '0');
  document.getElementById("seconds").textContent = String(segundos).padStart(2, '0');
}

setInterval(actualizarCuenta, 1000);
actualizarCuenta();

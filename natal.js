const dataFinal = new Date("Aug 4, 2026 00:00:00").getTime();

function atualizarRelogio() {
  const agora = new Date().getTime();
  const diferenca = dataFinal - agora;

  if (diferenca <= 0) {
    document.querySelector(".relogio").innerHTML = "Chegou!!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").textContent = `${dias}D-`;
  document.getElementById("horas").textContent = `${horas}H-`;
  document.getElementById("minutos").textContent =
    `${String(minutos).padStart(2, "0")}M-`;
  document.getElementById("segundos").textContent =
    `${String(segundos).padStart(2, "0")}s`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

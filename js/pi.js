// Problema 3: Estimación de Pi (for)
const MAX_ITERACIONES = 10000000;

const formPi = document.getElementById("form-pi");
const salidaPi = document.getElementById("resultado-pi");

// Pi ≈ raíz de (6 · suma de 1/k² para k = 1..n)
function estimarPi(n) {
  let suma = 0;
  for (let k = 1; k <= n; k++) {
    suma += 1 / (k * k);
  }
  return Math.sqrt(6 * suma);
}

formPi.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const n = leerNumero("limite");

  if (!Number.isInteger(n) || n < 1 || n > MAX_ITERACIONES) {
    mostrarMensaje(salidaPi, "Escribe un número entero entre 1 y " + MAX_ITERACIONES + ".", "error");
    return;
  }

  const estimado = estimarPi(n);
  const diferencia = Math.abs(Math.PI - estimado);

  mostrarMensaje(salidaPi,
    "Valor estimado: " + estimado.toFixed(10) + "\n" +
    "Valor real de π: " + Math.PI.toFixed(10) + "\n" +
    "Diferencia: " + diferencia.toFixed(10), "ok");
});

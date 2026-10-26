// Problema 2: El reparto de los camellos (while + if)
const MAX_CAMELLOS = 100000;

const formCamellos = document.getElementById("form-camellos");
const salidaCamellos = document.getElementById("resultado-camellos");

// Devuelve el primer múltiplo de 18 que sea mayor o igual que n
function siguienteMultiploDe18(n) {
  let total = n;
  while (total % 18 !== 0) {
    total++;
  }
  return total;
}

formCamellos.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const camellos = leerNumero("camellos");

  if (!Number.isInteger(camellos) || camellos < 1 || camellos > MAX_CAMELLOS) {
    mostrarMensaje(salidaCamellos, "Escribe un número entero de camellos entre 1 y " + MAX_CAMELLOS + ".", "error");
    return;
  }

  const total = siguienteMultiploDe18(camellos);
  const auxiliares = total - camellos;
  const mitad = total / 2;
  const tercio = total / 3;
  const novena = total / 9;
  const sobrante = total - (mitad + tercio + novena);

  const detalle =
    "Camellos auxiliares: " + auxiliares + "\n" +
    "Total ajustado: " + total + "\n" +
    "Hermano mayor (1/2): " + mitad + "\n" +
    "Hermano mediano (1/3): " + tercio + "\n" +
    "Hermano menor (1/9): " + novena + "\n" +
    "Sobrante: " + sobrante + "\n";

  if (sobrante >= auxiliares) {
    const ganancia = sobrante - auxiliares;
    mostrarMensaje(salidaCamellos, detalle + "Se devuelven los " + auxiliares + " auxiliares y el calculista gana " + ganancia + " camello(s).", "ok");
  } else {
    mostrarMensaje(salidaCamellos, detalle + "El sobrante no alcanza para devolver los " + auxiliares + " auxiliares: con esta cantidad el reparto no se puede cerrar.", "error");
  }
});

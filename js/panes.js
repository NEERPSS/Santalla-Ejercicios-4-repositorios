// Problema 1: El reparto de los panes (secuencial + if)
const MONEDAS_FORASTERO = 8;
const MAX_PANES = 1000;

const formPanes = document.getElementById("form-panes");
const salidaPanes = document.getElementById("resultado-panes");

formPanes.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const panes1 = leerNumero("panes1");
  const panes2 = leerNumero("panes2");

  if (!Number.isInteger(panes1) || !Number.isInteger(panes2) || panes1 < 1 || panes2 < 1 || panes1 > MAX_PANES || panes2 > MAX_PANES) {
    mostrarMensaje(salidaPanes, "Escribe dos números enteros de panes entre 1 y " + MAX_PANES + ".", "error");
    return;
  }

  const totalPanes = panes1 + panes2;
  // Cada pan se corta en 3 porciones; entre 3 personas, cada una come "totalPanes" porciones
  const porcionesPorPersona = totalPanes;
  const aporteNeto1 = 3 * panes1 - porcionesPorPersona; // lo que el viajero 1 le da al forastero
  const aporteNeto2 = 3 * panes2 - porcionesPorPersona;

  if (aporteNeto1 < 0 || aporteNeto2 < 0) {
    mostrarMensaje(salidaPanes, "Cada viajero debe aportar al menos un tercio del total de panes; si no, no le queda nada para el forastero.", "error");
    return;
  }

  const monedas1 = (MONEDAS_FORASTERO * aporteNeto1) / (aporteNeto1 + aporteNeto2);
  const monedas2 = MONEDAS_FORASTERO - monedas1;

  mostrarMensaje(salidaPanes,
    "Panes en total: " + totalPanes + " (" + totalPanes * 3 + " porciones)\n" +
    "Cada persona come: " + porcionesPorPersona + " porciones\n" +
    "El viajero 1 le da al forastero: " + aporteNeto1 + " porciones\n" +
    "El viajero 2 le da al forastero: " + aporteNeto2 + " porciones\n" +
    "Monedas para el viajero 1: " + formatear(monedas1, 2) + "\n" +
    "Monedas para el viajero 2: " + formatear(monedas2, 2), "ok");
});

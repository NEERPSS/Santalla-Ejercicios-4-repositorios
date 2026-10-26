// Problema 4: Ecuación cuadrática (if / else if / else)
const formCuadratica = document.getElementById("form-cuadratica");
const salidaCuadratica = document.getElementById("resultado-cuadratica");

formCuadratica.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const a = leerNumero("coef-a");
  const b = leerNumero("coef-b");
  const c = leerNumero("coef-c");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    mostrarMensaje(salidaCuadratica, "Completa a, b y c con números.", "error");
  } else if (a === 0) {
    mostrarMensaje(salidaCuadratica, "El valor de a no puede ser 0: así no es una ecuación cuadrática.", "error");
  } else {
    const discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
      const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      mostrarMensaje(salidaCuadratica, "D = " + formatear(discriminante, 4) + " (mayor que 0): hay dos raíces reales.\nx1 = " + formatear(raiz1, 4) + "\nx2 = " + formatear(raiz2, 4), "ok");
    } else if (discriminante === 0) {
      const raiz = -b / (2 * a);
      mostrarMensaje(salidaCuadratica, "D = 0: hay una raíz real doble.\nx = " + formatear(raiz, 4), "ok");
    } else {
      mostrarMensaje(salidaCuadratica, "D = " + formatear(discriminante, 4) + " (menor que 0): no hay raíces reales.", "error");
    }
  }
});

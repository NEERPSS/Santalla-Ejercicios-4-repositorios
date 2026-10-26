// Funciones compartidas por todos los problemas

// Muestra un mensaje en la página (tipo: "ok" o "error")
function mostrarMensaje(elemento, mensaje, tipo) {
  elemento.textContent = mensaje;
  elemento.className = "resultado " + tipo;
}

// Lee un campo numérico; devuelve NaN si está vacío o no es número
function leerNumero(id) {
  const texto = document.getElementById(id).value.trim();
  return texto === "" ? NaN : Number(texto);
}

// Redondea a cierta cantidad de decimales y evita mostrar -0
function formatear(valor, decimales) {
  const factor = Math.pow(10, decimales);
  return String(Math.round(valor * factor) / factor + 0);
}

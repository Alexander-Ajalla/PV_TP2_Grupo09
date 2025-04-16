import { capitalMap } from "./utils.js";
import { mostrarMensaje } from "./utils.js";
import { actualizarDesplegable } from "./utils.js";

// Seleccionar elementos
const paises = document.getElementById("paises");
const capitales = document.getElementById("capitales");

// Agregar evento de cambio
paises.addEventListener("change", () => {
    // Obtener el valor seleccionado
  const pais = paises.value;
  // Obtener la capital del país seleccionado
  actualizarDesplegable(capitales, capitalMap[pais]);
  // Mostrar el mensaje de confirmación
  mostrarMensaje(`País: ${pais}, Capital: ${capitales.value}`);
});
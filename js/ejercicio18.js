// Esta función es local al módulo, no necesita exportarse
function cambiarTexto(elemento, nuevoTexto) {
    elemento.textContent = nuevoTexto;
  }

  const boton = document.getElementById('cambiarTextoBtn');
  const parrafo = document.getElementById('miParrafo');
  
  const textoOriginal = parrafo.textContent;
  const textoNuevo = 'Estoy cursando Prog. Visual :D';
  let cambio = false; // * Bandera
  
  boton.addEventListener('click', () => {
    if (cambio) {
      parrafo.textContent = textoOriginal;
      cambio = false;
    } else {
      parrafo.textContent = textoNuevo;
      cambio = true;
    }
  });
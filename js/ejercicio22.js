const campoTexto = document.querySelector('#campoTexto');
const resultado = document.querySelector('#resultado');

const actualizarTexto = () => {
  const texto = campoTexto.value;
  resultado.textContent = texto;

  if (texto.length > 20) {
    resultado.style.backgroundColor = '#ffcccc';
  } else {
    resultado.style.backgroundColor = '#f0f0f0';
  }
};

campoTexto.addEventListener('input', actualizarTexto);

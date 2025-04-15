const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.querySelector('#resultado');

const mostrarSeleccion = (evento) => {
  const valor = evento.target.value;
  resultado.textContent = `Lenguaje seleccionado: ${valor}`;
  console.log(`Seleccionado: ${valor}`);
};

radios.forEach((radio) => {
  radio.addEventListener('change', mostrarSeleccion);
});

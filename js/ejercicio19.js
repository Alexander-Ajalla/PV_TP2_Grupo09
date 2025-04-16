const obtenerDatos = () => {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const libreta = document.querySelector('#libreta').value;
  
    alert(`Los datos ingresados son:
    Nombre: ${nombre}
    Apellido: ${apellido}
    Libreta Universitaria: ${libreta}`);
  };
  
  export { obtenerDatos };
  
  const botonMostrarDatos = document.querySelector('#mostrarDatos');
  
  botonMostrarDatos.addEventListener('click', (event) => {
    event.preventDefault();  
    obtenerDatos();  
  });
  
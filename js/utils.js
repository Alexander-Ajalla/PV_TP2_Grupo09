//mapeo de paises a capitales
export const capitalMap = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Colombia: "Bogota",
    Mexico : "Ciudad de Mexico",
    Peru: "Lima",
};

//registra el mensaje por consola
export const mostrarMensaje = (mensaje) => {
    console.log(mensaje);
};


//actualizamos el desplegable
export const actualizarDesplegable = (desplegable, valor) => {
    desplegable.value = valor;
};
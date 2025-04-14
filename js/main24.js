import { cambiarFondo } from "./ejercicio24.js";

const boton = document.getElementById('cambiarColor');
const body = document.body;

boton.addEventListener('click', () => {
    cambiarFondo(body);
});
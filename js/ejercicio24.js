export function cambiarFondo(body){
    const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = colorAleatorio;
}
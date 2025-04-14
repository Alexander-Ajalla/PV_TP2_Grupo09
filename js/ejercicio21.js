export function actualizarTexto(input, salida){
    input.addEventListener('input', () => {
        salida.textContent = input.value;
    });
}
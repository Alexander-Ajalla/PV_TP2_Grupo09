//array
const nombres = ["Ivo", "Lautaro", "Maxi", "Alex", "Mati", "Lucas"];

let largo = nombres[0];

for (i=0; i<nombres.length; i++) {
    if (nombres[i].length > largo.length) {
        largo = nombres[i];
    }
}

//mostramos
console.log(`El nombre mas largo es: ${largo}`);


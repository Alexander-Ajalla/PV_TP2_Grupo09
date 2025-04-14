//6 8 11 12
console.log("Sacar promedio de un conjunto de edades");
const edades = [1, 16, 24, 30, 47, 61, 65, 99];
let promedio = 0;
let suma = 0;

edades.forEach((e) => {
  suma = suma + e;
});
promedio = suma / edades.length;
console.log("Promedio: " + promedio);

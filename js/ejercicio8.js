//8 11 12
let numero1;
let numero2;

const calcularMayor = (numero1, numero2) => {
  alert("Averiguar el mayor entre dos numeros o si son iguales");
  const mensaje =
    numero1 === numero2
      ? "Los dos números son iguales: " + numero1 + " y " + numero2
      : "El número más grande es: " + Math.max(numero1, numero2);
  alert(mensaje);
  //console.log(mensaje);
};
calcularMayor(9, 9);
calcularMayor(4, 3);

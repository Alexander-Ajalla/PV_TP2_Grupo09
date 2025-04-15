export const contarLetraA = (palabra) =>{
    let cont = 0;
  
    for (let i = 0; i < palabra.length; i++){
      if (palabra[i] === 'a') {
        cont++;
      }
    }
    console.log("Cant. de letras 'a' encontradas: " + cont);
  }

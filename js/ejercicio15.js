export const retornarMeses = (numero) =>{
    const meses = [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Agosto",
         "Septiembre","Octumbre","Noviembre","Diciembre" ]
    
    if(numero >= 1 && numero <= 12){
        console.log(meses[numero - 1]);
    }else{
        console.log("No es un mes valido");
    }
}
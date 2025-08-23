// 🔹 Actividad 1: Calculadora paso a paso
// Objetivo

// Construir una calculadora básica usando expresiones en JavaScript.

// Consigna

// Creá una función calcular(a, b, operacion) que:

// Reciba dos números y un string que puede ser "+", "-", "*", "/".

// Use un operador ternario anidado para devolver el resultado correcto.

// Ejemplo: calcular(3, 5, "+") → 8.

// Agregá validaciones:

// Si operacion no es válida, devolvé "Operación no válida".

// Si es división y b === 0, devolvé "Error: división por cero".

// Extensión:

// Usá un array de operaciones:

// const operaciones = [
//   {a: 3, b: 4, op: "+"},
//   {a: 10, b: 2, op: "*"},
//   {a: 7, b: 0, op: "/"}
// ];


// Procesá todas con reduce, acumulando los resultados en un array.

// 👉 Practicás: expresiones, ternario, reduce, validaciones con cortocircuito (b === 0 && ...).



console.log("Bienvenidos a la primer calculadora usando javascript");

const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});



function pregunta(texto){

    //Texto es el mensaje que va a ver el usuario y respuesta es el input que se guarda
    return new Promise((resolve)=>{ 
        rl.question(texto,(respuesta) => resolve(respuesta));
    });
}

const ValidoNumero = (NumNoValidado)=>{
    Comprobacion = isNaN(NumNoValidado)?false:true;
    

    console.log("El numero es ->",NumNoValidado, Comprobacion);
    return Comprobacion
}

const ValidarOperacion = (Operacion,operacionValida)=>{
    if (operacionValida.includes(Operacion)){
        console.log("El operador esta dentro de la lista");
        return true
    }
    else
        {
            console.log("El operador NO esta dentro de la lista")
            return false}
        
}
const RealizaOperacion = (operacion,primerNumero,SegundoNumero)=>{
    NumeroA= parseInt(primerNumero); 
    NumeroB= parseInt(SegundoNumero);
    if (operacion === "+"){return NumeroA + NumeroB}
    else if (operacion === "-"){return NumeroA - NumeroB}
    else if (operacion === "*"){return NumeroA * NumeroB}
    else if ((operacion === "/")&&(NumeroA!=0)&&(NumeroB!=0)){
        
        return NumeroA / NumeroB}
    

    // Faltan realizar validaciones y descubrir como concatenar numero y la operacion para poder hacer la cuenta
    
}


async function main (){
    const operacion = await pregunta("Ingrese la operacion que desea realizar\nEjemplo:\n\t/ (para division)\n\t*(para multiplicacion)\n\tETC....")
    const PrimerNumero = await pregunta("Ingrese el primer numero")
    const SegundoNumero = await pregunta("Ingrese el segundo numero")

    const OperacionesValidas = ["+" , "-" , "*" , "/"]

    //Realizo Validaciones
    
    if ((ValidoNumero(PrimerNumero)===true) &&
     (ValidoNumero(SegundoNumero)===true) && (ValidarOperacion(operacion,OperacionesValidas)=== true)){

        const Resultado = RealizaOperacion(operacion,PrimerNumero,SegundoNumero)

        console.log("El Resultado de la cuenta es: "+Resultado)

    }
    else{
        console.log("Recuerde que deben ser numeros \tEjemplo: 2 , 3\nIntentelo Nuevamente\nAdemas recuerde las operaciones validas")
        OperacionesValidas.forEach((Objeto,Indice)=>{
            
            
            console.log(Objeto)})
    }
}

// const ValidoNumero = (NumNoValidado)=>{
//     isNaN(NumNovalidado)?true:false
// }

// const RealizaOperacion = (operacion,primerNumero,SegundoNumero)=>{

//     return ()
//     // Faltan realizar validaciones y descubrir como concatenar numero y la operacion para poder hacer la cuenta

// }
// console.log("La operacion elegida es-> "+operacion)

main()
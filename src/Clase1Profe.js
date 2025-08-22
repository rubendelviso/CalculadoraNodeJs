//funcion comun
function suma(a,b){
    return a+b;
}

const s = suma(2, 5);

console.log(s);

//funcion anonima
const resultado = (a,b) => a+b;
console.log(resultado(2,10));

//funcion mia
const oracion = (a,b) => a+b;
console.log(oracion("hola"," mundo"))

//funcion lineal
const sumaLineal = (x) => (1*x)+3
console.log(sumaLineal(1))

//otro ejercicio
const funcionLineal = (fn,x) => fn(x); //funcion de orden superior

const t1 = funcionLineal((n) => n * 5,2);

console.log("Funcion testing F(2) = " + t1);

//ESTRUCTURAS - ARRAY
const arr = [3,1,5,6,8,9,9,2]
//.some
const res1 = arr.some((e)=> e ===9)
console.log(arr);
console.log(res1);
//.every
const todosSon9 = arr.every(e => e ===9
)
console.log(todosSon9)
//.filter
const newArr = arr.filter(e => e===9)
console.log(newArr)
//map
console.log("Array original")
console.log(arr)
const newArr2 = arr.map( (e)=>{
    return e * 2;
})
console.log("Nuevo array desde .map")
console.log(newArr2);

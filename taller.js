// Ejercicio 1.1
var nombre = "Carlos";
console.log(nombre);
nombre = "Pedro";
console.log(nombre);

// Ejercicio 1.2
// Se declara la constante y se intenta reasignar:
// const nombre2 = "Carlos";
// nombre2 = "Pedro";
// Esto falla porque const no permite reasignacion
// Una vez que se declara una variable con const, su valor queda bloqueado
// y JavaScript lanza un TypeError si se intenta cambiar

// Ejercicio 1.3
let edad = 25;
if (true) {
    console.log(edad);
}
console.log(edad);
// let tiene scope de bloque, lo que significa que solo existe
// dentro del bloque donde fue declarada
// Si se declara dentro de un if, muere al cerrar las llaves
// Para poder usarla afuera, se debe declarar fuera del bloque

// Ejercicio 2.1
let texto = "Hola";
let numero = 42;
let booleano = true;
let nulo = null;
let indefinido = undefined;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof nulo);
console.log(typeof indefinido);
// typeof null devuelve "object" en lugar de "null"
// Esto es un bug historico de JavaScript desde sus inicios
// que nunca fue corregido para no romper codigo antiguo
// Para verificar si algo es null se debe usar: variable === null

// Ejercicio 2.2
let persona = { nombre: "Carlos", edad: 20 };
let hobbies = ["futbol", "musica", "leer"];

console.log(typeof persona);
console.log(typeof hobbies);
console.log(Array.isArray(hobbies));
// Tanto el objeto como el array devuelven "object" con typeof
// Esto ocurre porque en JavaScript los arrays son objetos especiales.
// Para saber si algo es un array se debe usar Array.isArray()

// Ejercicio 3.1
let numero1 = 10;
let numero2 = "5";

console.log(numero1 + numero2);
console.log(numero1 * numero2);
// Con el operador + JavaScript ve que numero2 es un string
// y convierte numero1 a string tambien, por eso concatena y da "105"
// Con el operador * JavaScript convierte el string "5" a numero
// automaticamente y realiza la multiplicacion, dando 50

// Ejercicio 3.2
console.log(String(25));
console.log(Number("100"));
console.log(Boolean(""));
console.log(Boolean("hola"));
// String(25) convierte el numero 25 al texto "25".
// Number("100") convierte el texto "100" al numero 100.
// Boolean("") devuelve false porque un string vacio es un valor falsy


// Ejercicio 4.1
console.log(10 === "10");
console.log(10 == "10");
// === es comparacion estricta: compara valor Y tipo de dato
// Como 10 es number y "10" es string, son diferentes, devuelve false
// == es comparacion flexible: solo compara el valor
// JavaScript convierte "10" a numero automaticamente y devuelve true
// Se recomienda usar siempre === para evitar resultados inesperados

// Ejercicio 4.2
let num = 7;
if (num % 2 === 0) {
    console.log(num + " es par");
} else {
    console.log(num + " es impar");
}

// Ejercicio 4.3
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Ejercicio 4.4
try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Ocurrio un error: " + error.message);
}

// Ejercicio 5.1
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(4, 5));

// Ejercicio 5.2
const multiplicar2 = (a, b) => a * b;
console.log(multiplicar2(4, 5));

// Ejercicio 5.3
const saludar = () => "Hola a todos!";
console.log(saludar());

// Ejercicio 6.1
let variableGlobal = "Soy global";

function miFuncion() {
    let variableLocal = "Soy local";
    console.log(variableGlobal);
    console.log(variableLocal);
}

miFuncion();
console.log(variableGlobal);
// variableGlobal funciona dentro y fuera de la funcion
// porque fue declarada en el ambito global
// variableLocal solo existe dentro de miFuncion
// Si se intenta acceder a ella afuera lanza un ReferenceError
// porque murio al cerrar las llaves de la funcion

// Ejercicio 6.2
const coche = {
    marca: "Toyota",
    mostrarMarca: function() {
        console.log("La marca es: " + this.marca);
    }
};
coche.mostrarMarca();
// this hace referencia al objeto que contiene el metodo
// En este caso this es el objeto coche,
// entonces this.marca es lo mismo que coche.marca

// Ejercicio 7.1
let frutas = ["Manzana", "Banana"];
console.log(frutas);
frutas.push("Naranja");
console.log(frutas);
frutas.pop();
console.log(frutas);

// Ejercicio 7.2
let numeros = [1, 2, 3];
let dobles = numeros.map(n => n * 2);
console.log(dobles);
let mayores = numeros.filter(n => n > 1);
console.log(mayores);

// Ejercicio 7.3
let frutas2 = ["Manzana", "Banana", "Naranja"];
frutas2.forEach(fruta => console.log(fruta));
let encontrada = frutas2.find(fruta => fruta === "Banana");
console.log(encontrada);
let indice = frutas2.findIndex(fruta => fruta === "Manzana");
console.log(indice);

// Ejercicio 8.1
const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupery",
    mostrarInfo: function() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
    }
};
libro.mostrarInfo();

// Ejercicio 8.2
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return "Hola, soy " + this.nombre;
    }
}
const animal = new Animal("Leon");
console.log(animal.saludar());

// Ejercicio 8.3
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}
const perro = new Perro("Rex", "Labrador");
console.log(perro.saludar());
console.log(perro.raza);
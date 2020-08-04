// Ejercicio de codificación 1
// Tenemos los siguientes datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/*
Utilizar la siguiente fórmula para calcular el IMC (Índice de Masa Corporal) de Luis y de Carlos.
El IMC es igual al peso entre la altura al cuadrado. Luego comparar e indicar si el IMC de Carlos es superior al de Luis.*/

// Solución:

var imcLuis, imcCarlos, imcMayorCarlos;
imcLuis = pesoLuis / alturaLuis ** 2;
console.log('El IMC de Luis es: ' + imcLuis);

imcCarlos = pesoCarlos / alturaCarlos ** 2;
console.log('El IMC de Carlos es: ' + imcCarlos);

imcMayorCarlos = imcCarlos > imcLuis;
console.log('¿Es el IMC de Carlos mayor que el de Luis? Respuesta: ' + imcMayorCarlos);
/****************
 * Ejercicio de codificación 3
 * 
 * Calcular cuántos años le falta a una persona para que se jubile.
 * Una persona se jubila a los 65 años de edad.
 * Enviar como datos a la función su año de nacimiento y su nombre.
 * 
 * Solución:
 */

//Declaramos la función con sus argumentos, código y salida
function cuantoFalta(nombre, año){
    var resultado = 65 - (2020 - año);
    return ('A ' + nombre + ' le faltan ' + resultado + ' años para jubilarse.');
}

//Imprimimos la función definiendo dos valores de entrada
console.log(cuantoFalta('Alberto', 1996));
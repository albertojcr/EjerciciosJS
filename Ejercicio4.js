/***************
 * Ejercicio 4
 * Implementar una función que nos permita evaluar el 
 * porcentaje de respuestas positivas y negativas de un examen
 * La función debe recibir el nombre, y la cantidad de 
 * respuestas positivas y negativa
 * 
 * La función debe calcular el porcentaje que representa cada
 * tipo de respuesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(> 90%), B(70% - 89%), C(45% - 69%), D(<45%)
 * 
 * Solución:
 */

function notaExamen(nombre, positivas, negativas){
    if(positivas >= 90){
        return (`La calificación de ${nombre} es A ya que tiene ${positivas} respuestas positivas y ${negativas} negativas.`);
    } else if(positivas >= 70 && positivas <= 89){
        return (`La calificación de ${nombre} es B ya que tiene ${positivas} respuestas positivas y ${negativas} negativas.`);
    } else if(positivas >= 45 && positivas <= 69){
        return (`La calificación de ${nombre} es C ya que tiene ${positivas} respuestas positivas y ${negativas} negativas.`);
    } else{
        return (`La calificación de ${nombre} es D ya que tiene ${positivas} respuestas positivas y ${negativas} negativas.`);
    }
}

console.log(notaExamen('Raúl', 90, 10));
console.log(notaExamen('María', 70, 30));
console.log(notaExamen('Pablo', 50, 50));
console.log(notaExamen('Jesús', 10, 90));
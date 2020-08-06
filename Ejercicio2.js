/****************
 * Ejercicio de sentencias
 */

 /********************
  * Tienes dos alumnos, Pablo y Maria.
  * Pablo tiene las siguientes notas en el curso de JavaScript: 14, 19, 16.
  * María tiene las siguientes notas en el curso de mismo curso: 12, 18, 10.
  * 
  * Calcular el promedio de cada alumno, además indicar quién tiene el promedio
  * superior, e indicar si el alumno esta aprobado, para ello su promedio 
  * debe ser superior a 13.
  */

// Calculamos el promedio de cada alumno
var promedioPablo = (14 + 19 + 16) / 2;
console.log('Nota media de Pablo en el curso: ' + promedioPablo);
var promedioMaria = (12 + 18 + 10) / 2;
console.log('Nota media de María en el curso: ' + promedioMaria);

//Indicamos quién tiene el promedio superior
if(promedioPablo > promedioMaria){
    console.log('Pablo tiene un promedio superior al de María.');
}else if(promedioMaria > promedioPablo) {
    console.log('María tiene un promedio superior al de Pablo.');
} else{
    console.log('Pablo y María tienen el mismo promedio.')
}

//Indicamos si han aprobado o suspendido
if(promedioPablo > 13){
    console.log('Pablo está aprobado.');
}else{
    console.log('Pablo está suspenso.');
}

if(promedioMaria > 13){
    console.log('María está aprobada.');
}else{
    console.log('María está suspensa.')
}
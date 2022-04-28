/*Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta.*/

let array = prompt("Escribe una frase:");
let espacios = 1;

for(let i = 0; i < array.length; i++) {
    // Si el carácter en [i] es un espacio (' ') aumentamos el contador 
    if(array.charAt(i) == ' '){
        espacios++;
    }
    } 
    alert("El número de palabras es " + espacios);

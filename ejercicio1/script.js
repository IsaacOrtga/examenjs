/*
    Solicita al usuario que elija entre la opción 1 o 2:

    Se le debe pedir dos número al usuario e indicar si son pares y múltiplos de 7 ambos, uno de ellos o ninguno.
    Se le debe pedir una palabra y comprobar si empieza o termina por a
   */

    let opcion = prompt("Pulsa 1 para la opción de números. Pulsa 2 para la opción de palabra.");
   
    
    if(opcion == 1){
        let n1 = prompt("Escribe un número:");
        let n2 = prompt("Escribe otro número:");
        {
            if(((n1 % 2 == 0) && (n1 % 7 == 0)) && ((n2 % 2 == 0) && (n2 % 7 == 0))){
                alert("Los dos números son pares y múltiplos de 7")

            }else if(((n1 % 2 !== 0) || (n1 % 7 !== 0)) && ((n2 % 2 !== 0) || (n2 % 7 !== 0))){
                alert("Ninguno es par y múltiplo de 7");
                
            
            }else if(((n1 % 2 == 0) && (n1 % 7 == 0)) && ((n2 % 2 !== 0) && (n2 % 7!== 0))){
                alert(n1 +" es par y múltiplo de 7.");

            }else if(((n1 % 2 !== 0) && (n1 % 7 !== 0)) && ((n2 % 2 == 0) && (n2 % 7 == 0))){
                alert(n2 + " es par y múltiplo de 7. ")
            }
        }
    }

    if(opcion == 2){
        let palabra = prompt("Escribe una palabra:");
        
        if(palabra.charAt(0) == "a"){
            alert("Tu palabra empieza por a");
        }
    }else(palabra.charAt(-1) == "a");{
        alert("Tu palabra termina por a");
    }
        
    
        
    

    

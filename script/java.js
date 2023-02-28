
function promedio(){
 let nota1= Number(prompt("INGRESE SU NOTA"))



 if(nota1 >= 3.0 && nota1 <= 5.0){
    document.write("FELICIDADES APROBASTE")
 }

 else if(nota1<=2.9 && nota1>=0){
    document.write("LO SIENTO HAS DESAPROBADO")
 }
 else{
    alert("INGRESASTE UNA NOTA FUERA DE RANGO")
 }
}
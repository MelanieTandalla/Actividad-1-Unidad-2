alert("EJERCICIO 2-3.  Crear un programa que permita calcular Promedio de Notas, mientras N sea diferente de 0.");
let suma= 0;
let num =1;
let cont=0-1;
let promedio=0;

do {
    num= Number(prompt("Ingrese la nota que sea diferente de cero: "));
    cont += 1;
    suma += num;
    
} while (num!=0);

promedio = suma/cont;
alert("Las notas ingresadas fueron: " + cont);
alert("El promedio de las notas ingresadas es: "+ promedio);
document.getElementById("1").innerHTML ="Las notas ingresadas fueron: " + cont
document.getElementById("2").innerHTML = "El promedio de las notas ingresadas es: "+ promedio


alert("EJERCICIO 2-Crear un algoritmo de la sumatoria de todos los números ingresados hasta que el usuario ingrese 0.");
let suma= 0;
let num;

do {
    num= Number(prompt("Ingrese el numero para hacer la sumatoria: "));
    suma += num;
} while (num!=0);

alert("El total de la suma de numeros ingresados es: "+ suma);
document.getElementById("1").innerHTML = "El total de la suma de numeros ingresados es: "+ suma;



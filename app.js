function funcionDePrueba(){//este es el nombre de la funcion
    console.log("Hola")// esta es la tarea
}
//funciondeprueba()// este es el llamado de la funcion

function saludaPersona(nombre){
    console.log(`Hola ${nombre}`)
}

//saludaPersona(`Jacobo`)

// 1.- Hacer una función que convierta de grados centígrados a Fahrenheit

// 2.- Hacer una función que muestre la tabla de multiplicar de un número

// 3.- Función que pida N parámetros y devuelva cuántos parámetros se le pasaron

// 4.- Leer un arreglo de enteros y sacar su media y promedio 
//      (ejemplo de arreglo: [5,7,10,9,9,8,6,2,3,9,7,5] )

// 5.- Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del empleado
//      que más gana (Ojo, puedes hacer el ejercicio leyendo los nombres y sueldos desde prompt  o escribiendo un arreglo que contenga los nombres y sueldos de cada empleado. Es tu decisión diseñar cómo organizar los datos para hacer las comparaciones necesarias para determinar quién es el empleado con mayor sueldo)

// 6.- Guardar en un array los 20 primeros números pares

// 7.- Hacer una función que calcule el tiempo necesario para que un automóvil que se
//     mueve con una velocidad de 73000 m/h recorra una distancia de 120 km. (TIEMPO = d/v)

// 8.- Crear una función que reciba como parámetro una oración y defina si es palindromo

// 9.- Mostrar los primeros 10 dígitos de la serie Fibonacci

// 10.- Escribe una función que halle el máximo entre dos números 

// 11.- Escribe una función que halle el máximo entre tres números

// 12.- Escribe una función que devuelva si un número es negativo, positivo o cero

// 13.- Escribe una función para verificar si un número es divisible entre 5 y 11 o no lo es

// 14.- Escriba una función para ingresar cualquier letra del alfabeto y verifique si es vocal o consonante

// 15.- Escribe una función que imprima todos los números naturales de 1 hasta n
// 16.- Escribe una función que imprima todos los números naturales en reversa, desde n hasta 1.

// 17.- Escribe una función que imprima todos los números pares entre 1 y 100

// 18.- Escribe una función que imprima todos los números nones entre 1 y 100

// 19.- Escribe una función que halle la suma de todos los números naturales entre 1 y n

// 20.- Escribe una función que imprima una pirámide de asteriscos como la siguiente:
       
//                      *
//                     * *
//                   * * *
//                   * * * *
//                  * * * * *



//1.
function grados(a){
    var b = (a * 9/5) + 32 
    console.log(b)
}
//grados(10)
//2.
function tabla(t){
    for (i=1;i<=10; i++)
    console.log(i * t)
    
}
// tabla(8)
//3.
function total(a){
    var a = prompt("Escribe una palabra")
    console.log(a + " tiene " + a.length + " parametros")
}
//total()


//10.
function maximo(a,b){
    var a = prompt(`Dime tu primer nuemro`)
    var b = prompt(`Dime tu segundo numero`)
    
    if (a > b){
        console.log(`${a} es mayor`)
    }
    else{
        console.log(`${b} es mayor`)

    }
}

//maximo()

//11.
function mayor(){
 var a = prompt(`Dime tu primer numero`)
 var b = prompt(`Dime tu segundo numero`)
 var c = prompt(`Dime tu tercer numero`)

if (a > b && a > c){
    console.log(`${a} es el mayor`)
}    
else if (b > a && b > c ){
    console.log(`${b} es el mayor`)
}
else if (c > a && c > b){
    console.log(`${c} es el mayor`)

    
}    
}
//mayor()    
//12.
function negativo(){
    var a = prompt(`Cual es tu numero`)

    if (a > 0){
    console.log(`${a} es positivo`)
    }
    else if(a < 0){
        console.log(`${a} es negativo`)
    }
    else 
        console.log(`${a} es un cero`)
    }
  

//negativo()

//15.
function cuanto(){
    var a = prompt(`Cuantos numeros quieres?`)
    for (i = 1; i <= a; i++)
    console.log(i)
}

//cuanto()

//18.
function nones(){
    for (i = 1; i <=100; i++){
    if (i % 2 != 0){
        console.log(i)
    }
    }
}
//nones()

//17.
function pares(){
    for (i = 1; i <=100; i++){
    if (i % 2 == 0){
        console.log(i)
    }
    }
}
//pares()

//13.
function divisible(numero){
    if (numero % 5==0 && numero %11==0){
    console.log(`${numero} es divisible entre 5 y 11`)
    }
    else if (numero % 5==0){
    console.log(`${numero} es divisible ente 5`)    
    }
    else if (numero %11==0){
    console.log(`${numero} es divisible entre 11`)    
    }
    else {
        console.log(`${numero} no es divisible entre 5 y 11`)
    
    }
}
//divisible()poner el numero en la consola




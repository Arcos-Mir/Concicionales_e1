/* Ejercicio 1check */

let bellisimo;
let myEjer1 = document.getElementById("myEjer1");

document.getElementById("mySub1").onclick = function () {
    bellisimo = document.getElementById("bello").value;
    if ( document.getElementById("bello").value == "si") {
        myEjer1.textContent = "Ciertamente" + " " + "😍";
    } else {
        myEjer1.textContent = "No te creo" + " "  + "🤨";
    }
}

/* Ejercicio 2 check */

let numero = 0;
let result = 0;
let myEjer2 = document.getElementById("myEjer2");

document.getElementById("mySub2").onclick = function () {
    numero = document.getElementById("num").value;
    result = numero % 2 === 0;
    if (numero % 2 === 0) {
        myEjer2.textContent = numero + " " + "es divisible entre 2";
    }else {
        myEjer2.textContent = numero + " " + " no es divisible entre 2";
    }
}

/* Ejercicio 3 check*/

let number = prompt("Escribe un número");

if (number % 2 === 0) {
    alert(number + " " + "es par");
}else {
    alert(number + " " + " no es par");
}

/* Ejercicio 4 check*/

let num ;
let myEjer4 = document.getElementById("myEjer4");

document.getElementById("mySub4").onclick = function() {
    num = document.getElementById("num2").value;
    if (num == 1000) {
        myEjer4.textContent = " 🎉 Ganaste un premio 🎊" + "🎁";
    }else {
        myEjer4.textContent = num + " " + "lo sentimos, sigue participando 👍";
    }
}

/* Ejercicio 5 funciona para imprimir en consola*/

let x = 10;
let y = 8;
let myEjer5 = document.getElementById("myEjer5");

document.getElementById("mySub5").onclick = function (x, y) {
    x = document.getElementById("n1").value;
    y = document.getElementById("n2").value;
    if (parseInt(x) < parseInt(y)) {
        console.log(x + " " + "es menor");
    }else {
        console.log(y + " " + "es menor");
    }
}

/* Ejercicio 6 funciona para imprimir en consola, 
pero cuando lo paso al div en pantalla... no funciona*/

let numb1 = 0;
let numb2 = 0;
let numb3 = 0;
let myEjer6 = document.getElementById("myEjer6");

document.getElementById("mySub6").onclick = function () {
    numb1 = document.getElementById("numb1").value;
    numb2 = document.getElementById("numb2").value;
    numb3 = document.getElementById("numb3").value;
    if (numb1 > numb2 && numb1 > numb3) {
        console.log(numb1 + " " + "es mayor")
        /* myEjer6.textContent =  numb1 + " " + "es mayor"; */
        } else if (numb2 > numb1 && numb2 > numb3) {
            console.log(numb2 + " " + "es mayor") 
            /* myEjer6.textContent =  numb2 + " " + "es mayor"; */
        } else if (numb3 > numb1 && numb3 > numb2) {
            console.log(numb3 + " " + "es mayor") 
            /* myEjer6.textContent =  numb3 + " " + "es mayor"; */
    } else {
        console.log("Los números son iguales")
        /* myEjer6.textContent =  "Los números son iguales"; */
    }
}

/* Ejercicio 7 check*/

let diaSemana;
myEjer7 = document.getElementById("myEjer7");

document.getElementById("mySub7").onclick = function () {
    diaSemana = document.getElementById("diaSem").value;
    switch (diaSemana) {
        case "lunes":
            myEjer7.textContent = "Felíz inicio de semana " + "💪";
            break;
        case "viernes":
            myEjer7.textContent = "Es viernes y el cuerpo lo sabe" + "🎊";
            break;
        case "sabado":
            myEjer7.textContent = "Sábado de party" + "💃🕺" ;
            break;
        case "domingo":
            myEjer7.textContent = "Domingo de party" + "💃🕺";
            break;
        default:
            myEjer7.textContent = "Ya casi es Viernes" + "😉";
            break;
    }
}

/* Ejercicio 8 check*/

let calificacion = 0;
myEjer8 = document.getElementById("myEjer8");

document.getElementById("mySub8").onclick = function () {
    calificacion = document.getElementById("Calific").value;

    if (calificacion >= 1 && calificacion <= 10) {

        if (calificacion < 6) {
            myEjer8.textContent = "Reprobado" + "😔";
        }else if (calificacion >=6 && calificacion <= 8) {
            myEjer8.textContent = "Regular" + "🤔";
        }else if (calificacion === 9){
            myEjer8.textContent = "Bien" + "😉";
        }else {
            myEjer8.textContent = "Aprobado" + "🥇";
        }
    }else {
        myEjer8.textContent = "Valor fuera de rango" + "🚀";
    }
}

/* Ejercicio 9 */

const toppings = ["oreo", "kitkat", "brownie"];

let total = 50;

if (toppings.length > 0) {

    for (let i = 0; i < toppings.length; i++) {

        switch (toppings[i]) {
            case "oreo":
                total += 10;
                break;
            case "kitkat":
                total += 15;
                break;
            case "brownie":
                total += 20;
                break;
            default:
                console.log("No contamos con", toppings[i], "por el momento");
                break;
        }
    }

    console.log("Total de la compra:", total);
} else {
    /* Costo sería de $50 */
    console.log("Total de la compra:", total);
}











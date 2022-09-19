var nombre = document.getElementById("nombre")

nombre.style.height="30px"
nombre.style.width="50%"

nombre.style.marginLeft="25%"

var long1 = document.getElementById("long1")
long1.style.marginRight="55%"

var mayus1 = document.getElementById("mayus1")
mayus1.style.marginRight="30%"

var primer1 = document.getElementById("primer1")
primer1.style.marginRight="-35%"




function long() {

    var nombre = document.getElementById('nombre').value;

    if (nombre.value == "") {

        document.getElementById('nombre').value = alert("El campo esta en blanco");

    } else if (!isNaN(nombre)) {
        document.getElementById('nombre').value = alert ("No puede introducir numeros")
    } else {
        numero(nombre);
    }

}

function mayus() {

    var nombre = document.getElementById('nombre').value;

    if (nombre.value == "") {

        document.getElementById('nombre').value = alert("El campo esta en blanco");

    } else if (!isNaN(nombre)) {
        document.getElementById('nombre').value = alert ("No puede introducir numeros")
    } else {
        mayuscula(nombre)
    }

}

function minus() {

    var nombre = document.getElementById('nombre').value;

    if (nombre.value == "") {

        document.getElementById('nombre').value = alert("El campo esta en blanco");

    } else if (!isNaN(nombre)) {
        document.getElementById('nombre').value = alert ("No puede introducir numeros")
    } else {
        minuscula(nombre)
    }

}

function primer() {

    var nombre = document.getElementById('nombre').value;

    if (nombre.value == "") {

        document.getElementById('nombre').value = alert("El campo esta en blanco");

    } else if (!isNaN(nombre)) {
        document.getElementById('nombre').value = alert ("No puede introducir numeros")
    } else {
        primera(nombre)
    }

}

function numero(nombre) {

    var caracter = nombre.length

    alert("La longitud de tu palabra es " + caracter)

} 

function mayuscula(nombre) {

    var may = nombre.toUpperCase()

    alert("La  palabra en mayuscula es " + may)

}

function minuscula(nombre) {

    var minusc = nombre.toLowerCase()

    alert("La  palabra en minuscula es " + minusc)

}

function primera(nombre) {

    var prim = nombre.charAt(0)

    alert("El primer caracter de tu palabra es " + prim)

}
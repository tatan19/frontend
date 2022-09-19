var resultado = document.getElementById("resultado")
resultado.style.backgroundColor="green"
resultado.style.marginLeft="20%"
resultado.style.marginRight="20%"
resultado.style.textAlign="center"
resultado.style.color="black"


var suerte = document.getElementById("suerte")
suerte.style.marginLeft="40%"
suerte.style.backgroundColor="blue"

var titulo = document.getElementById("titulo")
titulo.style.marginLeft="20%"
titulo.style.color="black"

var contenedor = document.getElementById("contenedor")
contenedor.style.marginTop = "10%"
contenedor.style.marginLeft = "25.5%"
contenedor.style.marginRight = "25.5%"
contenedor.style.backgroundColor = "green"


var formnom = document.getElementById("formnom")
formnom.style.marginLeft = "8.5%"
formnom.style.color="black"



var formape = document.getElementById("formape")
formape.style.marginLeft = "1.5%"
formape.style.color="black"

var formacti = document.getElementById("formacti")
formacti.style.marginLeft = "1.5%"
formacti.style.color="black"


var nombre = document.getElementById("nombre")
nombre.style.color="blue"
nombre.style.marginTop="5%"


var apellido = document.getElementById("apellido")
apellido.style.color="blue"


var actividad = document.getElementById("actividad")
actividad.style.color="blue"

function opcio() {
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    actividad = document.getElementById("actividad").value


    if (nombre == "Tatiana" && apellido == "Cabrera" && actividad == "Calidad" ||
        nombre == "Carolina" && apellido == "Forero" && actividad == "Proyecto" ||
        nombre == "Adriana" && apellido == "Duarte" && actividad == "Frontend" ||
        nombre == "Yaneth" && apellido == "Castillo" && actividad == "Ambiental" ||
        nombre == "Jonathan" && apellido == "Espitia" && actividad == "Backend" ||
        nombre == "Luis" && apellido == "Baquero" && actividad == "Fisica" ||
        nombre == "Fernado" && apellido == "Galindo" && actividad == "Datos") {
        document.getElementById("resultado").innerHTML = ("La respuesta es correcta, El instructor se llama " + nombre + " " + apellido + " Y orienta " + actividad)
    }
    else {
        nombre == "" && apellido == "" && actividad == ""
        document.getElementById("resultado").innerHTML = ("La respuesta es incorrecta, Tienes alguna opción mal")
    }


}
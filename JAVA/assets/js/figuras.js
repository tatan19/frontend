let cardcuadrado = document.getElementById("cardcuadrado")
cardcuadrado.style.marginTop="5%"
cardcuadrado.style.marginLeft="6%"

let cardtriangulo = document.getElementById("cardtriangulo")
cardtriangulo.style.marginLeft="29%"
cardtriangulo.style.marginTop="-15%"

let cardcirculo = document.getElementById("cardcirculo")
cardcirculo.style.marginLeft="52%"
cardcirculo.style.marginTop="-22%"

let cardrectangulo = document.getElementById("cardrectangulo")
cardrectangulo.style.marginLeft="75%"
cardrectangulo.style.marginTop="-22%"





//Cuadrado
function CalcularPerimetro(){
    const lado = document.getElementById("lado").value
    const perimetro = lado * 4;
    document.getElementById("resultado").innerHTML = "El perimetro es "+perimetro
}

function CalcularArea(){ 
    const lado = document.getElementById("ladoa").value
    const area = lado*lado
    document.getElementById("resultadoa").innerHTML= "El area es "+area
}


//Triangulo
function CalcularPerimetroT(){
    let ladotp1 = parseFloat(document.getElementById("ladotp1").value)
    let ladotp2 = parseFloat(document.getElementById("ladotp2").value)
    let ladotp3 = parseFloat(document.getElementById("ladotp3").value)
    const perimetro1 = ladotp1 + ladotp2 + ladotp3;
    document.getElementById("resultadotp").innerHTML = "El perimetro es "+perimetro1
}

function CalcularAreaT(){ 
     const baseta = document.getElementById("baseta").value
     const alturata = document.getElementById("alturata").value
    const areaT = (baseta*alturata) /2;
    document.getElementById("resultadota").innerHTML= "El area es "+areaT
 }


// CIRCULO
function CalcularPerimetroC(){
    const radio = parseFloat(document.getElementById("radio").value)
    const pi =3.14;
    const valorc = radio*pi
    document.getElementById("resultadoperimetro").innerHTML= "El perimetro es "+valorc

}

function CalcularAreaC(){
    const radio = parseFloat(document.getElementById("radio").value)
    const pi = 3.14;
    const valor = pi * radio * radio;
    document.getElementById("resultadoarea").innerHTML= "El area es "+valor



 }


// RECTANGULO

function CalcularPerimetroR(){
    let basep =parseFloat(document.getElementById("basep").value)
    let alturap =parseFloat(document.getElementById("alturap").value)
    let perimetror = 2 * basep + 2 * alturap 
    document.getElementById("resultadoperimetror").innerHTML= "El perimetro es "+perimetror
}
 
 function CalcularAreaR(){
    let baser =parseFloat(document.getElementById("baser").value)
    let alturar =parseFloat(document.getElementById("alturar").value)
    let arear = baser*alturar
    document.getElementById("resultadoarear").innerHTML= "El area es "+arear
 }
// ESTILOS
var a = document.getElementById("a")
a.style.color="blue"
a.style.textAlign="center"
a.style.marginLeft="44.5%"
a.style.height="30px"
a.style.width="100px"
a.style.backgroundColor="orange"
a.style.borderBlockColor="blue"

var b = document.getElementById("b")
b.style.color="blue"
b.style.textAlign="center"
b.style.marginLeft="29%"
b.style.marginTop="150px"
b.style.height="30px"
b.style.width="100px"
b.style.backgroundColor="orange"
b.style.borderBlockColor="blue"

var c = document.getElementById("c")
c.style.color="blue"
c.style.textAlign="center"
c.style.marginLeft="60%"
c.style.height="30px"
c.style.width="100px"
c.style.marginTop="-42px"
c.style.backgroundColor="orange"
c.style.borderBlockColor="blue"

var lad = document.getElementById("lad")
lad.style.marginLeft="37.3%"
lad.style.marginTop="70px"
lad.style.height="40px"
lad.style.width="300px"
lad.style.color="orange"
lad.style.borderBlockColor="orange"



// LOGICA
function lado(){

   var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
   var  c = parseFloat(document.getElementById('c').value);

    if(a == b && b == c){
        alert("Es un triangulo equilatero")
        
    } 
    
    else if(a == b || b == c || a == c){
        alert("Es un triangulo isoseles")
    }
    
    else{
    alert("Es un triangulo escaleno")
    }

    
}


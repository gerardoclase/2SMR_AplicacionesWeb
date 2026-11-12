// =========================================================
//  Práctica 3 — JavaScript
//  Nombre y apellidos: Gerardo Molina Bruque
//  Recuerda: cada bloque con un comentario escrito por ti
// =========================================================


// ===== A1. Mi tarjeta (se ejecuta al cargar la página, sin función) =====
var elem = document.getElementById("saludo");//Busca id saludo//
elem.innerHTML = "Hola , me llamo Gerardo y estudio 2ºSMR";//Cambiamos el texto de la variable elem//

document.getElementById("tarjeta").style.backgroundColor = "#00ff26" //Cambiamos el color del fondo de la tarjeta//
document.getElementById("tarjeta").style.color = "black";//cambiamos el color de la letra//



// ===== A2. Lista de la compra: function anadir() =====
function anadir (){
    var entrada = document.getElementById("producto").value;
    var lista = document.getElementById("lista");
    var nuevoli = document.createElement("li");
    var texto = document.createTextNode(entrada);
    nuevoli.appendChild(texto);
    lista.appendChild(nuevoli);
    document.getElementById("producto").value = "";
}



// ===== A3. Modo noche y modo día: function modoNoche() y function modoDia() =====
function modoNoche(){
    document.body.style.backgroundColor = "#000000";//Cambia el color de fondo del body a negro//
    document.body.style.color = "white";//Cambia la letra del body a blanco//
    document.getElementById("modo").innerHTML = "Modo noche activado";//Sale el mensaje de modo noche activado al pulsar el boton//
}

function modoDia(){
    document.body.style.backgroundColor = "#ffff";//Cambia el color de fondo del body a blanco//
    document.body.style.color = "black";//Cambia la letra del body a negro//
    document.getElementById("modo").innerHTML = "Modo dia activado";//Sale el mensaje de modo dia activado al pulsar el boton
}



// ===== A4. Colores de la tarjeta: function colorTarjeta(color) =====
function colorTarjeta(){
    document.getElementById("tarjeta").style.backgroundColor = "#00ff26";//Cambia el color de la tarjeta al pulsar el boton//
}

function colorNaranja(){
    document.getElementById("tarjeta").style.backgroundColor = "#ff7b00";//Cambia el color de la tarjeta al pulsar el boton//
}

function colorMorado(){
    document.getElementById("tarjeta").style.backgroundColor = "#ac05db";//Cambia el color de la tarjeta al pulsar el boton//
}




// ===== A5. Botón que saluda: function saludar() =====
function saludar(){
    alert("Hola, soy Gerardo Molina");//Crea la alerta con el texto//
    document.getElementById("botonSaludo").style.backgroundColor = "#23c8f1";//Le pone color de fondo al boton//
}


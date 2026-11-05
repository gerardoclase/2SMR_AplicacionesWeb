function anochecer(){
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "white";
}

function dia (){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function agregar (){
    var entrada = document.getElementById("cajaTexto").value;
    var lista = document.getElementById("lista");
    var nuevoli = document.createElement("li");
    var texto = document.createTextNode(entrada);
    nuevoli.appendChild(texto);
    lista.appendChild(nuevoli);
    document.getElementById("cajaTexto").value = "";
}
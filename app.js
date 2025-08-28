//Variables
let amigos = [];

function agregarAmigo() { 
    let agregarNombre = document.getElementById("amigo").value;
    if (agregarNombre == "") {  //validación de espacio vacio
        alert('Por favor, inserte un nombre');
        return;
    }
    amigos.push(agregarNombre); //Agrega el nombre
    correrArray();
    limpiarCaja();
}

function correrArray() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de volver a llenarla
            for (let i = 0; i < amigos.length; i++) {  // Recorrer el arreglo "amigos"
                let li = document.createElement("li");
                li.textContent = amigos[i]; // Asigna el nombre del amigo como texto
                lista.appendChild(li);
            }
}

function sortearAmigo() {
    if (amigos.length < 2) { //comprobar si el array amigos no está vacío.
        alert("Necesitas al menos 2 amigos para hacer un sorteo.");
        return;
    }
    let sorteo = Math.floor(Math.random() * amigos.length); //Realiza el sorteo
    let amigoSorteado = amigos[sorteo];
    document.getElementById("resultado").innerHTML = "El amigo sorteado es:" + amigoSorteado;
}

function limpiarCaja() {
    document.getElementById("amigo").value =""; //limpia la caja
}

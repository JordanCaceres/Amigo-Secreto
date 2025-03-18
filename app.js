// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    //Reconociendo valor a tomar
    let amigo = document.getElementById('amigo').value
    console.log(amigo)
    //Agregando amigo a la lista
    //Validando el que elcampo no este vacio
    if (amigo == ''){
        alert("Por favor, inserte un nombre.")
        //Empujando el nombre de entrada
    } else {
        listaAmigos.push(amigo);
        console.log(listaAmigos)
        cleanBox();
        mostrarLista();

    }



 

}


function cleanBox() {
    document.getElementById('amigo').value = '';
}

function mostrarLista() {
    // Seleccionando la lista
    let lista = document.getElementById('listaAmigos');
    // Dejándola vacía para evitar duplicados
    lista.innerHTML = "";
    
    // Iterando sobre la lista de amigos
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li'); // Cambié 'i' por 'li'
        li.textContent = listaAmigos[i]; // Asignando el nombre del amigo
        lista.appendChild(li); // Agregando el elemento a la lista
    }
}

function sortearAmigo() {
    let amigoGanador = "";
    if (listaAmigos != []) {
        let indiceGanador = Math.floor(Math.random()*listaAmigos.length);
        amigoGanador = listaAmigos[indiceGanador]
        document.getElementById("resultado").innerHTML = amigoGanador;
        
        
        console.log(amigoGanador)
    } else{
        alert("Ingresa nombres")
    }
}



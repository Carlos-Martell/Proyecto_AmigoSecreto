let amigos = [];

function agregarAmigo(){
    let ingresoAmigo = document.getElementById("amigo");
    let nombreAmigo = ingresoAmigo.value

    if(nombreAmigo == "" || nombreAmigo == null ){
        alert("Debes ingresar un nombre");
        return;
    }

    amigos.push(nombreAmigo);
    ingresoAmigo.value = "";
    ingresoAmigo.focus();
    mostrarAmigos();
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }

}

function sortearAmigo(){
   if(amigos.length === 0){
        alert("Debes ingresar amigos para iniciar el sorteo");
        return;
   } 
   let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `El amigo elegido es: ${amigoSorteado}`;

   let limpiarLista = document.getElementById("listaAmigos");
   limpiarLista.innerHTML = "";
}
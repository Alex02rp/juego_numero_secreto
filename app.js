let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 11;

function verificarIntento() {
    let numeroUsuario = document.getElementById('valorUsuario').value;
    
    if (numeroUsuario == numeroSecreto){
        asignarTextoElento('p',"acertaste el numero en "+ intentos + ((intentos==1)? " intento" : " intentos"));
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroUsuario > numeroSecreto){
        asignarTextoElento('p'," el numero secreto es menor");
        }else asignarTextoElento('p'," el numero es mayor");
        limpiarCaja();
    }
    intentos++;
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('reiniciar').setAttribute('disebled','true');

}
function limpiarCaja() {
    let valorcaja= document.querySelector('#valorUsuario').value='';
}
function asignarTextoElento(elemento,texto) {
    let titulo= document.querySelector(elemento);
titulo.innerHTML=texto;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElento('p','ya se sortearon todos los numeros posibles....')
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    numeroSecreto= generarNumeroSecreto();
    asignarTextoElento('h1',"juego del numero secreto!");
    asignarTextoElento('p',`ingrese un numero entre 1-${numeroMaximo}`);
    intentos=1;
    console.log(numeroSecreto);
}
condicionesIniciales();


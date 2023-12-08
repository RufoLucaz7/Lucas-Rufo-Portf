const visor = document.getElementById("resultado");

function insert( num ){

    visor.innerHTML += num;

};


function clean() {

    visor.innerHTML = "";
    
};


function back() {

    let numeroVisor = visor.innerHTML;

    visor.innerHTML = numeroVisor.substring(0, numeroVisor.length - 1)
};

function calcular() {
    let calculo = visor.innerHTML;
    
if (calculo.length > 2) {

    visor.innerHTML = eval(calculo)

} else {

   visor.textContent= "Erro!!!" 
}
}


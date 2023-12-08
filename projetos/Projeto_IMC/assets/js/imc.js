const form = document.getElementById("form");


form.addEventListener('submit', function (event) {

    event.preventDefault();
    const peso = document.getElementById("weight").value;

    const altura = document.getElementById("height").value;

    const imc = (peso / (altura * altura)).toFixed(2);  
    
    document.getElementById("infos").classList.remove("hidden");

    let descricao;

    const campoImc = document.getElementById("value");

    //campoImc.style = `color: red;` outra forma de stylizar class

    campoImc.classList.add("attention");

    //condições do imc

    if(imc < 18.5){
        descricao = "Você está abaixo do peso!!!"

    }
    else if((imc > 18.5) && (imc <= 25)){
        descricao = "Você está no peso Ideal"

        campoImc.style.color = "green";

        //ampoImc.classList.remove("attention")
        //campoImc.classList.add("normal")

    }
    
    else if((imc > 25) && (imc <= 30)){
        descricao = "Cuidado! Você está com sobre peso"

        campoImc.style.color = "orange";

        //ampoImc.classList.remove("attention")
        //campoImc.classList.add("normal")

    }
    
    else if((imc > 30) && (imc <= 35)){
        descricao = "Alerta! Você está com opesidade moderada"

        campoImc.style.color = "orangered";

        //ampoImc.classList.remove("attention")
        //campoImc.classList.add("normal")

    }

    else if((imc > 35) && (imc <= 40)){
        descricao = "Alerta! Você está com obesidade severa"

        campoImc.style.color = "red";

        //ampoImc.classList.remove("attention")
        //campoImc.classList.add("normal")

    }
    else{
        descricao = "Cuidado! Você está com obesidade morbida"

        campoImc.style.color = "black";

    }
    
    campoImc.textContent = imc.replace(".",",");

    document.getElementById("description").textContent = descricao;

});

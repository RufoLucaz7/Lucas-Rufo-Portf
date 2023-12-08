const horas = document.getElementById('horas')

const minutos = document.getElementById('minutos')

const segundos = document.getElementById('segundos')


const relógio = setInterval(function time () {

    let dateToday = new Date();

    let hr = dateToday.getHours();

    let min = dateToday.getMinutes();

    let seg = dateToday.getSeconds();


    if(seg < 10) seg = "0" + seg;
    if(min < 10) min = "0" + min;
    if(hr < 10) hr = "0" + hr;


    horas.textContent = hr;

    minutos.textContent = min;
     
    segundos.textContent = seg;

    }
)
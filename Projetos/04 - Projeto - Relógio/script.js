let digitalElement = document.querySelector('.digital'); // Relógio Digital
let hElement = document.querySelector('.p_h'); // Horas
let mElement = document.querySelector('.p_m'); // Minutos
let sElement = document.querySelector('.p_s'); // Segundos

function updateClock(){

    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // Relógio Analógico

    let sDeg = ((360/60) * second) - 90;
    let mDeg = ((360/60) * minute) - 90;
    let hDeg = ((360/60) * hour) - 60;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

function fixZero(time){
    if(time < 10){
        return '0' + time;
    } else {
        return time;
    }

    //return time < 10 ? `0${time}` : time

    // ? = Ele faz o que
    // : = Caso Contrário
}

setInterval(updateClock, 1000);
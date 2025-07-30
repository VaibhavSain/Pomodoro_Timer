const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
const timeVal = document.querySelector("#time");
const audio = document.querySelector("#audio");

let min = '25';
let sec = '00';
let input = false;
let speed = 1000;

localStorage = ()=> {
    min;
    sec;
    input;
    speed;
}
startBtn.onclick = () => {
    if (input == false) {
        speed = 1000;
        input = true;
        time();
    }

}
stopBtn.onclick = () => {
    input = false;
    speed = 1000;
    speed -= 500;
}
resetBtn.onclick = () => {
    input = false;
    timeVal.innerText = `25:00`;
    speed = 1000;
    min = '25';
    sec = '00';

}



function time() {

    if (min <= 1) {
        alert("congrats you have done!!!!!!!!!!!!!!!!!!!!");
        audio.play();
        min = '25';
        sec = '00';
        input = false;
    }
    if (input == true) {

        if (sec == '00') {
            min--;
            sec = 59;
        }


        if (sec < 10 && min < 10) {
            timeVal.innerText = `0${min}:0${sec}`;

        } else if (min < 10) {
            timeVal.innerText = `0${min}:${sec}`;
        }
        else if (sec < 10) {
            timeVal.innerText = `${min}:0${sec}`;

        }
        else {
            timeVal.innerText = `${min}:${sec}`;

        }

        sec--;
    }

}

setInterval(() => {
    time();
}, speed);
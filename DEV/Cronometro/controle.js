let hr = 0;
let min = 0;
let s = 0;
let ms = 0;
let cron;

function iniciar() {
    pausar();
    cron = setInterval(() => { timer(); }, 10);
}

function pausar() {
    clearInterval(cron);
}

function resetar() {
    hr = 0;
    min = 0;
    s = 0;
    ms = 0;
    document.getElementById('hr').innerText = '00';
    document.getElementById('min').innerText = '00';
    document.getElementById('s').innerText = '00';
    document.getElementById('ms').innerText = '000';
}

function timer() {
    if ((ms += 10) == 1000) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hr++;
    }

    document.getElementById('hr').innerText = returnData(hr);
    document.getElementById('min').innerText = returnData(min);
    document.getElementById('s').innerText = returnData(s);
    document.getElementById('ms').innerText = returnData(ms);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}
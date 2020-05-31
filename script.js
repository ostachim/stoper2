const buttonMain = document.querySelector(".main");
const buttonReset = document.querySelector(".reset");
const text = document.querySelector(".text div");
let active = false;
let time = 0;
let idI;

const stoper = () => {
    if(!active){
        active = !active;
        buttonMain.textContent = "Stop";
        idI = setInterval(start,10)
    }
    else{
        active = !active;
        buttonMain.textContent = "Start";
        clearInterval(idI);
    }
}
const start = () => {
    time++;
    text.textContent = (time/100).toFixed(2);
}

const reset = () => {
    time = 0;
    active = false;
    buttonMain.textContent = "Start";
    clearInterval(idI);
    text.textContent = "---";
}

buttonMain.addEventListener("click",stoper);
buttonReset.addEventListener("click",reset);
const button = document.querySelectorAll(".button-style");
const text = document.querySelectorAll(".content-button")

for (let i=0; i < button.length; i++) {
    button[i].onclick = function(){

        for (let r=0; r < button.length; r++) {
            button[r].classList.remove("active")
            text[r].classList.remove("selected")
        }

        button[i].classList.add("active")
        text[i].classList.add("selected")
    }
}


const counter = document.querySelectorAll(".counter")

const timeButtonOne = new Date("2024-03-27T00:00:00")
const timeButtonTwo = new Date("2024-05-12T00:00:00")
const timeButtonThree = new Date("2024-03-06T00:00:00")
const timeButtonFour = new Date("2024-05-13T00:00:00")
const timeButton = [timeButtonOne, timeButtonTwo, timeButtonThree, timeButtonFour]

function calcTime(timeButton){
    let currentTime = new Date();
    let endTime = timeButton - currentTime;
    let seconds = Math.floor(endTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    if (endTime > 0){
        return [days, hours, minutes, seconds];
    } else {
        return [0, 0, 0, 0];
    }
}

function updateTime(){
      for(let i=0; i < timeButton.length; i++){        
        document.getElementById("days"+i).textContent = calcTime(timeButton[i])[0];
        document.getElementById("hours"+i).textContent = calcTime(timeButton[i])[1];
        document.getElementById("minutes"+i).textContent = calcTime(timeButton[i])[2];
        document.getElementById("seconds"+i).textContent = calcTime(timeButton[i])[3];
    }
}

function starTimer(){
    updateTime()
    setInterval(updateTime, 1000)
}

starTimer()
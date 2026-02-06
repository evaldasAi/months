'use strict';

const bg = document.getElementById("bg");
const month = document.getElementsByClassName("month");
const day = document.getElementById("day");
const weekday = document.getElementById("weekDay");
let time = new Date();

month[time.getMonth()].className = "month highlight";
day.innerHTML = time.getDate() +" diena";

if (time.getDay() == 0){
    weekday.innerHTML = "7-ienis";
} else {
    weekday.innerHTML = time.getDay() + "-ienis";
};

// winter
if ([11,0,1].includes(time.getMonth())) {
    bg.style.backgroundImage = 'url("./assets/winter.jpg")';
}

// spring
if ([2,3,4].includes(time.getMonth())) {
    bg.style.backgroundImage = 'url("./assets/spring.jpg")';
}

// summer
if ([5,6,7].includes(time.getMonth())) {
    bg.style.backgroundImage = 'url("./assets/summer.jpg")';
}

//autumn
if ([8,9,10].includes(time.getMonth())) {
    bg.style.backgroundImage = 'url("./assets/autumn.jpg")';
}
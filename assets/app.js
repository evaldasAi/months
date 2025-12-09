(function() {
    'use strict';

    let app = {
        isLoading: true,
        visibleCards: {},
        spinner: document.querySelector('.loader'),
        cardTemplate: document.querySelector('.cardTemplate'),
        container: document.querySelector('#app'),
        addDialog: document.querySelector('.dialog-container'),
    };

    //main month logic
    const month = document.getElementsByClassName("month");
    const day = document.getElementById("day");
    const weekday = document.getElementById("weekDay");
    let time = new Date();

    console.log(time);

    month[time.getMonth()].className = "month highlight";
    day.innerHTML = time.getDate() +" diena";

    if (time.getDay() == 0){
        weekday.innerHTML = "7-ienis";
    } else {
        weekday.innerHTML = time.getDay() + "-ienis";
    };

    //spinner control
    if (app.isLoading) {
        app.spinner.setAttribute('hidden', true);
        app.container.removeAttribute('hidden');
        app.isLoading = false;
    }

    // TODO add service worker code here
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
//Finish function
})();
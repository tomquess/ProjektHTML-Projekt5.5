window.setInterval(function () {
    
    for (var i = 0; i < 5; i++){
        const date = new Date();
        const hours = document.querySelectorAll('.hours');
        const minutes = document.querySelectorAll('.minutes');
        const seconds = document.querySelectorAll('.seconds');

        seconds[i].style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
        minutes[i].style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
        hours[i].style.transform = `rotate(${date.getHours()+i / 12 * 360}deg)`;
    }
}, 1000);

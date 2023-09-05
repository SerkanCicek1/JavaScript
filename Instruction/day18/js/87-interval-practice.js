// DOM ELEMENTS
const hourEl = document.querySelector("#clock li:nth-child(1)");
const secondEl = document.querySelector("#clock li:nth-child(2)");
const minuteEl = document.querySelector("#clock li:nth-child(3)");

// SET CLOCK
setInterval(() => {
    //yeni bir tarih nesnesi olustur
    const dateTime = new Date();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();

    //saat ve dakika bilgisinni ilgili elementlere yaz
    hourEl.innerHTML = hour.toString().length === 1 ? `0${hour}` : hour;
    minuteEl.innerHTML = minute.toString().length === 1 ? `0${minute}` : minute;

    //saniyeyi iceren elementi goster/gizle
    secondEl.classList.toggle("hidden");
}, 1000);
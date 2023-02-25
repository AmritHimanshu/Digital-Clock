console.log("Here you can see time on Digital Clock");

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let dayTime = document.getElementById("dayTime");

function setTime() {
    time = new Date();
    let hourTime = time.getHours();
    let minuteTime = time.getMinutes();
    let secondTime = time.getSeconds();
    let timeDay = (hourTime < 12) ? "AM" : "PM";
    // console.log(hourTime);

    hourTime = (hourTime > 12) ? (hourTime - 12) : hourTime;
    hourTime = (hourTime < 10 ? "0" : "") + hourTime;
    minuteTime = (minuteTime < 10 ? "0" : "") + minuteTime;
    secondTime = (secondTime < 10 ? "0" : "") + secondTime;
    hour.innerHTML = hourTime;
    minute.innerHTML = minuteTime;
    second.innerHTML = secondTime;
    dayTime.innerHTML = timeDay;

    setTimeout(() => {
        setTime();
    }, 1000)
}

// setInterval(() => {
//     setTime();
// }, 1000)

setTime();
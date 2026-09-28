//Digital Clock

function updateDigitalClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("digital-clock").textContent = `${h}:${m}:${s}`;
}

//Analog Clock
function updateAnalogClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = hours * 30 + minutes * 0.5;

    document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
}

//Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

//Update clocks every second
setInterval(() => {
    updateDigitalClock ();
    updateAnalogClock();
}, 1000);

//Initial load
updateDigitalClock();
updateAnalogClock();
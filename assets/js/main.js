function updateTime() {
    const date = new Date();

    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    if (horas < 10) horas = '0' + horas;
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;

    let hours = document.getElementsByClassName("hours")[0];
    let minutes = document.getElementsByClassName("minutes")[0];
    let seconds = document.getElementsByClassName("seconds")[0];

    hours.innerHTML = horas;
    minutes.innerHTML = minutos;
    seconds.innerHTML = segundos;
 
}

setInterval(updateTime, 1000);
updateTime();


document.addEventListener("click", function () {
    let body = document.body;
    let themeLink = document.getElementById("theme");

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        themeLink.setAttribute("href", "./assets/css/style-light.css");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        themeLink.setAttribute("href", "./assets/css/style.css");
    }
});


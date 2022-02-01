{
    function time() {
        let newTime = new Date;
        let hr = newTime.getHours();
        let mn = newTime.getMinutes();
        let sec = newTime.getSeconds();
        document.getElementById('hour').innerHTML = hr;
        document.getElementById('minute').innerHTML = mn;
        document.getElementById('second').innerHTML = sec;
        document.getElementById('drp-hour').innerHTML = hr;
        document.getElementById('drp-minute').innerHTML = mn;
        document.getElementById('drp-second').innerHTML = sec;
    }
    setInterval(time, 1000)
} {
    let click = document.getElementById('i');
    let menu = document.getElementById('menu-for-ph');
    click.addEventListener('click', () => {
        menu.style.transform = "translateY(0)";
        menu.style.opacity = "100"
    });
    let close = document.getElementById('cross');
    close.addEventListener('click', () => {
        menu.style.transform = "translateY(-100vh)";
        menu.style.opacity = "0"
    });
} {
    let timer = document.getElementById('second');
    setInterval(() => { if (timer.style.color != "white") { timer.style.color = "white"; } else { timer.style.color = "#f39521"; } }, 1000);
}


setTimeout(swal, 10000, "This website is under Developement", "You can explore through buttons given on top", "info")
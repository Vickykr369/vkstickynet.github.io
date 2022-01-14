let contactBtn = document.getElementById('developer-contact');
let main_frm = document.getElementById('dev-cont');
let close_form = document.getElementById('cross-d-c')
let nav = document.getElementById('nav--')
let Cdeveloper = document.getElementById('developertab');
let Cmanager = document.getElementById('managertab');
let frm_manger = document.getElementById('manager')
let frm_developer = document.getElementById('developer')
let alert1 = document.getElementById('al-1');
let PhoneNo = document.getElementById('no.-d');
let alert2 = document.getElementById('al-2')
let passworD = document.getElementById('pass-d');
let alert3 = document.getElementById('al-3')
let Issues = document.getElementById('txt--area');
let submit = document.getElementById('dev-fm-submit')
let Allinputs = document.getElementsByClassName('cntd')
let show_P = document.getElementById('show-d-p')
let usrname = document.getElementById('M-username');
let phonnumber = document.getElementById('M-phone');
let passwordm__ = document.getElementById('M-password');
let txtareao = document.getElementById('M-txtarea');
let alert001 = document.getElementById('err1');
let alert002 = document.getElementById('err2');
let alert003 = document.getElementById('err3');
let alert004 = document.getElementById('err4');
let subhmmbtn = document.getElementById('M-submit')
let showMp = document.getElementById('show-M-p');
let mangerPass = document.getElementById('M-password');
let Manager_Contct = document.getElementById('manager-cntact');
let contactforPhone = document.getElementById('contact-for-phone');
let menu = document.getElementById('menu-for-ph');




contactBtn.addEventListener('click', () => {

    main_frm.style.transform = 'translateY(0)'
    nav.style.visibility = "hidden"
    Cdeveloper.style.backgroundColor = "rgba(6, 212, 6, 0.938)"
    Cmanager.style.backgroundColor = "white"
})

Manager_Contct.addEventListener('click', () => {
    nav.style.visibility = "hidden"
    main_frm.style.transform = "translateY(0)"
    Cmanager.style.backgroundColor = "rgba(6, 212, 6, 0.938)"
    frm_manger.style.display = "block"
    frm_developer.style.display = "none"
    Cdeveloper.style.backgroundColor = "white"
})

close_form.addEventListener('click', () => {
    main_frm.style.transform = 'translateY(-100vh)'
    nav.style.visibility = "visible"
    menu.style.visibility = "visible"

})

submit.addEventListener('click', () => {

    if (PhoneNo.value == "") {
        alert1.style.display = "block"
        PhoneNo.style.borderColor = "red"
    } else {
        alert1.style.display = "none"
        PhoneNo.style.borderColor = "cyan"
    }
    if (passworD.value == "") {
        alert2.style.display = "block"
        passworD.style.borderColor = "red"
    } else {
        alert2.style.display = "none"
        passworD.style.borderColor = "cyan"
    }
    if (Issues.value == "") {
        alert3.style.display = "block"
        Issues.style.borderColor = "red"
    } else {
        alert3.style.display = "none"
        Issues.style.borderColor = "cyan"
    }


})
show_P.addEventListener('click', () => {
        if (passworD.type != "text") {
            passworD.type = "text"
        } else {
            passworD.type = "password"
        }

    })
    // ---------------------------------------------------------------------------------------------//








showMp.addEventListener('click', () => {
    if (mangerPass.type != "text") {
        mangerPass.type = "text"
    } else {
        mangerPass.type = "password"
    }
})

subhmmbtn.addEventListener('click', () => {
    if (usrname.value == "") {
        alert001.style.display = "block"
        usrname.style.borderColor = "red"
    } else {
        alert001.style.display = "none"
        usrname.style.borderColor = "green"
    }
    if (phonnumber.value == "") {
        alert002.style.display = "block"
        phonnumber.style.borderColor = "red"

    } else {
        alert002.style.display = "none"
        phonnumber.style.borderColor = "green"
    }
    if (passwordm__.value == "") {
        alert003.style.display = "block"
        passwordm__.style.borderColor = "red"
    } else {
        alert003.style.display = "none"
        passwordm__.style.borderColor = "green"
    }
    if (txtareao.value == "") {
        alert004.style.display = "block"
        txtareao.style.borderColor = "red"
    } else {
        alert004.style.display = "none"
        txtareao.style.borderColor = "green"
    }

})
Cdeveloper.addEventListener('click', () => {
    Cdeveloper.style.backgroundColor = "rgba(6, 212, 6, 0.938)"
    Cmanager.style.backgroundColor = "white"
    frm_developer.style.display = "block"
    frm_manger.style.display = "none"


})
Cmanager.addEventListener('click', () => {
    Cmanager.style.backgroundColor = "rgba(6, 212, 6, 0.938)"
    Cdeveloper.style.backgroundColor = "white"
    frm_manger.style.display = "block"
    frm_developer.style.display = "none"

})



// let text = "Free Web Building Tutorials!"; let result = text.link("https://www.rmpublicschool.org"); document.getElementById("demo1").innerHTML = result;
contactforPhone.addEventListener('click', () => {
    main_frm.style.transform = "translateY(0)"
    menu.style.visibility = "hidden"
        // Cdeveloper.style.backgroundColor = "rgba(6, 212, 6, 0.938)"
})
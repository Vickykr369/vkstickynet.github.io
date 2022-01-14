{


    let name_ = document.getElementById('username-for-login');
    let number_ = document.getElementById('contact-for-login');
    let password_ = document.getElementById('password-for-login');
    let sec_1 = document.getElementById('sc-1')
    let sec_2 = document.getElementById('sc-2')
    let sec_3 = document.getElementById('sc-3')
    let btn = document.getElementById('login-btn');
    btn.addEventListener('click', () => {
        if (name_.value == "") {
            sec_1.style.display = "block"
        } else {
            sec_1.style.display = "none"

        }
        if (number_.value == "") {
            sec_2.style.display = "block"
        } else {
            sec_2.style.display = "none"

        }
        if (password_.value == "") {
            sec_3.style.display = "block"
        } else {
            sec_3.style.display = "none"

        }
    })
}



{
    let usrname = document.getElementById('inps')
    let email = document.getElementById('inps-2')
    let password = document.getElementById('inps-3')
    let phone = document.getElementById('inps-4')
    let btn = document.getElementById('btn')
    let cc1 = document.getElementById('cc-1')
    let cc2 = document.getElementById('cc-2')
    let cc3 = document.getElementById('cc-3')
    let cc4 = document.getElementById('cc-4')
    btn.addEventListener('click', () => {

        if (usrname.value == "") {
            cc1.style.display = "block"
        } else {
            cc1.style.display = "none"
        }
        if (email.value == "") {
            cc2.style.display = "block"
        } else {
            cc2.style.display = "none"
        }
        if (password.value == "") {
            cc4.style.display = "block"
        } else {
            cc4.style.display = "none"
        }
        if (phone.value == "") {
            cc3.style.display = "block"
        } else {
            cc3.style.display = "none"
        }

    })

}
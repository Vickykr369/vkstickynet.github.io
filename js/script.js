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
    click.addEventListener('click', function() {
        menu.style.transform = "translateY(0)"
    });
    let close = document.getElementById('cross');
    close.addEventListener('click', function() {
        menu.style.transform = "translateY(-90vh)"
    })



} {
    let signup = document.getElementById('sgn-up')
    let login = document.getElementById('lgn')
    let form = document.getElementById('sign-up')
    let btn = document.getElementById('btn')
    signup.addEventListener('click', function() {
        if (form.style.display != "none") {
            form.style.display = "none"
        } else {
            form.style.display = "flex"
        }
    });
    // btn.addEventListener('click', function() {
    //     form.style.display = "none"
    // });
    close_form = document.getElementById('close-form')
    close_form.addEventListener('click', function() {
        form.style.display = "none"
    });



}


// --------------------------------------------------------------------------------------------------------------

{
    let login = document.getElementById('lgn');
    let loginForm = document.getElementById('login-here');
    let close = document.getElementById('close-lgn-form');
    let sign_up = document.getElementById('sign-up')
    login.addEventListener('click', function() {
        if (loginForm.style.display = "none") {
            loginForm.style.display = "flex"
        } else {
            loginForm.style.display = "none"
        }
    })
    close.addEventListener('click', () => {
        loginForm.style.display = "none"
    });
    // ------------------------------------------------------------------------------------------------------------
    let sgnUp = document.getElementById('sgn-up-btn-opn')
    let lgin = document.getElementById('lgn-up-btn-opn')
    sgnUp.addEventListener('click', () => {
        loginForm.style.display = "none"

        if (sign_up.style.display = "none") {
            sign_up.style.display = "flex"
        }

    });
    // -------------------------------------------------------------------------------------------------------
    lgin.addEventListener('click', () => {
        sign_up.style.display = "none"

        if (loginForm.style.display = "none") {
            loginForm.style.display = "flex"
        }
    })

}



// ----------------------------------------------------------------//
{
    let timer = document.getElementById('second')
    setInterval(() => {
        if (timer.style.color != "white") {
            timer.style.color = "white"
        } else {
            timer.style.color = "#f39521"
        }

    }, 1000);
}
// ----------------------------------------------------------------------------------------------------

{


    let password_1 = document.getElementById('password-for-login');
    let password_2 = document.getElementById('inps-3');
    let seePass1 = document.getElementById('see-password-1')
    let seePass2 = document.getElementById('see-password-2')
    seePass1.addEventListener('click', () => {
        if (password_1.type != "password") {
            password_1.type = "password"
        } else {
            password_1.type = "text"
        }
    });
    seePass2.addEventListener('click', () => {
        if (password_2.type != "password") {
            password_2.type = "password"
        } else {
            password_2.type = "text"
        }
    });

}
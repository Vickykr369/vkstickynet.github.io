let Open_Form = document.getElementById('registeration-btn');let Registration_Form = document.getElementById('register_form');let Close_Registration_form = document.getElementById('Close_registeration');let Sign_Up_Naviagtor = document.getElementById('sign-up');let Login_Navigator = document.getElementById('login');let Login_Form = document.getElementById('login-form-container');let Sign_Up_Form = document.getElementById('sign_up-form-container');let Show_sign_up_password = document.getElementById('show-pass-word-btn');let show_login_password = document.getElementById('show-login-password-btn');let password_for_signUp = document.getElementById('user-password');let password_for_login = document.getElementById('user-password-for-login');let Alphabet = /^[A-Za-z_]+$/;let Valid_email = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;let valid_phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;let SignUp_username = document.getElementById('username');let SignUp_email = document.getElementById('user-email');let SignUp_phone_number = document.getElementById('phone-number');let SignUp_password = document.getElementById('user-password');let div_of_SignUp_password = document.getElementById('pass.value');let Repeat_SignUp_password = document.getElementById('user-password-repeat');let Login_username = document.getElementById('Username-for-login');let Login_phone_number = document.getElementById('phone-number-for-login');let Login_password = document.getElementById('user-password-for-login');let Login_btn = document.getElementById('login-btn');let signUp_btn = document.getElementById('sign_up-btn');let S_Nameerror = document.getElementById('NameError');let S_emailerror = document.getElementById('EmailError');let S_Phoneerror = document.getElementById('PhoneError');let S_passworderror = document.getElementById('errpass2');let S_errorRepeatpassword = document.getElementById('repeatError');Close_Registration_form.addEventListener('click', () => {Login_Navigator.style.backgroundColor = "white";Login_Form.style.display = "none";Registration_Form.style.transform = "translateX(-100vw)";Sign_Up_Form.style.display = "block"});

Open_Form.addEventListener('click', () => {Registration_Form.style.transform = "translateX(0)";Sign_Up_Naviagtor.style.backgroundColor = "rgba(24, 207, 55, 0.945)";});

Login_Navigator.addEventListener('click', () => {
    Login_Navigator.style.backgroundColor = "rgba(24, 207, 55, 0.945)";
    Sign_Up_Naviagtor.style.backgroundColor = "white";
    Login_Form.style.display = "block";
    Sign_Up_Form.style.display = "none"
});

Sign_Up_Naviagtor.addEventListener('click', () => {
    Sign_Up_Form.style.display = "block";
    Login_Form.style.display = "none";
    Sign_Up_Naviagtor.style.backgroundColor = "rgba(24, 207, 55, 0.945)";
    Login_Navigator.style.backgroundColor = "white";
});
// passsword viewer button 
Show_sign_up_password.addEventListener('click', () => {
    if (password_for_signUp.type != "text") {
        password_for_signUp.type = "text";
    } else {
        password_for_signUp.type = "password";
    }
});

show_login_password.addEventListener('click', () => {
    if (password_for_login.type != "text") {
        password_for_login.type = "text";
    } else {
        password_for_login.type = "password";
    }
});





function check_SignUp_username() {

    if (SignUp_username.value.match(Alphabet)) {
        SignUp_username.style.border = "3px solid green";
        S_Nameerror.innerHTML = ""
    } else if (SignUp_username.value == "") {
        SignUp_username.style.border = "3px solid red"
        S_Nameerror.innerHTML = 'Username cannot be blank.'

    } else {
        SignUp_username.style.border = "3px solid red"
        S_Nameerror.innerHTML = "Your name should contain Alphabets and underscores only"
    }
}

function check_SignUp_Email() {
    if (SignUp_email.value.match(Valid_email)) {
        SignUp_email.style.border = "3px solid green";
        S_emailerror.innerHTML = ""

    } else if (SignUp_email.value == "") {
        SignUp_email.style.border = "3px solid red"
        S_emailerror.innerHTML = "Email Id cannot be blank"
    } else {
        SignUp_email.style.border = "3px solid red"
        S_emailerror.innerHTML = "Invalid Email Id"

    }
}

function check_SignUp_Phone() {
    if (SignUp_phone_number.value.match(valid_phone)) {
        SignUp_phone_number.style.border = "3px solid green";
        S_Phoneerror.innerHTML = ""

    } else if (SignUp_phone_number.value == "") {
        SignUp_phone_number.style.border = "3px solid red"
        S_Phoneerror.innerHTML = "Phone number cannot be blank"

    } else {
        SignUp_phone_number.style.border = "3px solid red";
        S_Phoneerror.innerHTML = "Invalid Phone number"

    }
}
sign_up-btn.addEventListener('click', () => {
    swal('Get out of this site', '😡','info');
});


function check_password() {
    if (password_for_signUp.value == "") {
        div_of_SignUp_password.style.border = "3px solid red"
        S_passworderror.innerHTML = "Password cannot be blank"
    } else if (password_for_signUp.value.length < 10) {
        div_of_SignUp_password.style.border = "3px solid red"
        S_passworderror.innerHTML = "Your password should have more than 10 characters"
    } else {

        div_of_SignUp_password.style.border = "3px solid green"
        S_passworderror.innerHTML = ""
    }
}

function check_repeated_password() {
    if (Repeat_SignUp_password.value != SignUp_password.value) {
        Repeat_SignUp_password.style.borderColor = "red";
        S_errorRepeatpassword.style.display = "block"
    } else if (Repeat_SignUp_password.value == "") {
        Repeat_SignUp_password.style.borderColor = "red";
        S_errorRepeatpassword.style.display = "block"
    } else {
        Repeat_SignUp_password.style.borderColor = "rgb(23 150 45 / 95%)";
        S_errorRepeatpassword.style.display = "none"
    }
}
SignUp_username.addEventListener('click', () => {

    setInterval(check_SignUp_username, 1);
});
SignUp_email.addEventListener('click', () => {
    setInterval(check_SignUp_Email, 1);
});
SignUp_phone_number.addEventListener('click', () => {
    setInterval(check_SignUp_Phone, 2);
});
SignUp_password.addEventListener('click', () => {
    setInterval(check_password, 1);
});
Repeat_SignUp_password.addEventListener('click', () => {
    setInterval(check_repeated_password, 1);
});

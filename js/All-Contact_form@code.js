let Close_btn = document.getElementById('close_btn');
let Open_contact_Form = document.getElementById('cntct');
let Open_form_Phone = document.getElementById('cntact-phone');
let Contact_Form = document.getElementById('contact_page');
let Bg_Cover = document.getElementById('cover');
let register_btn = document.getElementById('registeration-btn');
let ShowPassword = document.getElementById('showP');
let PassInput = document.getElementById('password__Field');

Open_contact_Form.addEventListener('click', () => {
    Bg_Cover.style.display = "block";
    Contact_Form.style.transform = "scale(1)"
});

Open_form_Phone.addEventListener('click', () => {
    Bg_Cover.style.display = "block";
    Contact_Form.style.transform = "scale(1)"
});
Close_btn.addEventListener('click', () => {
    Bg_Cover.style.display = "none";
    Contact_Form.style.transform = "scale(0)"
});
register_btn.addEventListener('click', () => {
    Bg_Cover.style.display = "block"
});
Close_registeration.addEventListener('click', () => {
    Bg_Cover.style.display = "none"
});
ShowPassword.addEventListener('click', () => {
    ShowPassword.style.cursor = "pointer"
    if (PassInput.type != "text") {
        PassInput.type = "text"
    } else {
        PassInput.type = "password"
    }
});
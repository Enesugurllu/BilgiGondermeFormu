var nameError = document.getElementById('name-error'); 
var phoneError = document.getElementById('phone-error'); 
var emailError = document.getElementById('email-error'); 
var messageError = document.getElementById('message-error'); 
var submitError = document.getElementById('subit-error');

function validateName(){ 
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){ 
        nameError.innerHTML = 'Ad Soyad gerekli'; 
        return false; 
    } 
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){ 
        nameError.innerHTML = 'Tam adınızı yazın'; 
        return false; 
    } 
    nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>'; 
    return true; 
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){ 
        phoneError.innerHTML = 'Telfon Numarası gerekli'; 
        return false; 
    } 
    if(phone.length != 10){ 
        phoneError.innerHTML = 'Telefon numarası 10 haneli olmalıdır'; 
        return false; 
    } 
    if(!phone.match(/^[0-9]{10}$/)){ 
        phoneError.innerHTML = 'Sadece sayı lütfen.'; 
        return false; 
    } 
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;

}

function validateEmail()
{
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){ 
        emailError.innerHTML = 'E-posta gerekli' 
        return false; 
    } 
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ 
        emailError.innerHTML = 'E-posta Geçersiz' 
        return false; 
    } 
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}

function validateMessage()
{ 
    var message = document.getElementById('contact-message').value; 
    var required = 30; 
    var left = required - message.length;

    if(left > 0){ 
            messageError.innerHTML = left + ' Daha fazla karakter gerekli'; 
            return false; 
        } 
        messageError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
        return true; 
}

function validateForm(){ 
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage())
        { 
            submitError.style.display = 'block'; submitError.innerHTML = 'Lütfen göndermek için hatayı düzeltin'; 
            setTimeout(function()
            {
                submitError.style.display = 'none';
            }, 
            3000); 
            return false; 
        } 
    else {
        openPopup();
        return false; 
    }
}
let popup = document.getElementById("popup")

function openPopup()
{
popup.classList.add("open-popup");
}
function closePopup()
{
popup.classList.remove("open-popup");
location.reload();
}


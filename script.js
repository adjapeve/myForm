function validate() {
    const password = document.querySelector('input[name=pwd]');
    const confirm = document.querySelector('input[name=confirm-pwd]');
    if (password.value === confirm.value) {
        password.setCustomValidity('');
    } else {
        password.setCustomValidity('*Passwords do not match');
    }
}


const form=document.querySelector('.mainContainer-right-form-formContainer');
form.addEventListener("focusout",validate);
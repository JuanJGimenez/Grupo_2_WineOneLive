window.onload = () => {

    // inputs capturados
    let inputName = document.getElementById('user_first_name');
    let inputSurname = document.getElementById('user_last_name');
    let inputEmail = document.getElementById('user_email');
    let inputPassword = document.getElementById('user_password');

    // form capturado
    let form = document.querySelector('.formulario');

    let ulErrores = document.querySelector('.errores');

    inputName.focus();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let errores = [];

        if (inputName.value === "") {
            inputName.classList.add('is-invalid');
            errores.push("Debes introducir un nombre");
        } else {
            inputName.classList.remove('is-invalid');
            inputName.classList.add('is-valid');
        }
        if (inputSurname.value === "") {
            inputSurname.classList.add('is-invalid');
            errores.push("Debes introducir un apellido");
        }
        else {
            inputSurname.classList.remove('is-invalid');
            inputSurname.classList.add('is-valid');
        }
        if (inputEmail.value === "") {
            inputEmail.classList.add('is-invalid');
            errores.push("Debes introducir un Email");
        }
        else {
            inputEmail.classList.remove('is-invalid');
            inputEmail.classList.add('is-valid');
        }
        if (inputPassword.value === "") {
            inputPassword.classList.add('is-invalid');
            errores.push("Debes introducir una contraseña");
        } else {
            inputPassword.classList.remove('is-invalid');
            inputPassword.classList.add('is-valid');
        }
        ulErrores.innerHTML = '';
        if (errores.length > 0) {
            ulErrores.classList.add('alert-warning');
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<ol>' + errores[i] + '</ol>' + " "
            }
        } else {
            form.submit()
        }
    });
}
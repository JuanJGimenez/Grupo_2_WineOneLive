window.onload = function () {


    // inputs capturados
    let inputName = document.getElementById('user_first_name');
    let inputSurname = document.getElementById('user_last_name');
    let inputEmail = document.getElementById('user_email');
    let inputPassword = document.getElementById('user_password');
    let inputConfirmPassword = document.getElementById('password_confirm');
    const form = document.getElementById('formulario');
    const inputsTotales = document.querySelectorAll('#formulario input');

    //inputs errores
    let errorNombre = document.querySelector(".error-nombre")
    let errorApellido = document.querySelector(".error-apellido")
    let errorEmail = document.querySelector(".error-mail")
    let errorContraseña = document.querySelector(".error-contraseña")
    let errorContraseña2 = document.querySelector(".error-contraseña2")





    let ulErrores = document.querySelector('.errores');

    //inputName.focus();

    //expresiones

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,15}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const campos = {

        nombre: false,
        apellido: false,
        password: false,
        correo: false

    }





    let validarFormulario = (e) => {

        switch (e.target.name) {




            case "user_first_name":


                if (expresiones.nombre.test(e.target.value)) {
                    inputName.classList.remove('is-invalid');
                    document.querySelector(".input-nombre .fa-solid").classList.remove("fa-circle-xmark")

                    inputName.classList.add('is-valid');
                    document.querySelector(".input-nombre .fa-solid").classList.add("fa-circle-check")
                    errorNombre.style.display = "none"
                    campos["nombre"] = true
                    console.log(campos)


                }
                else {
                    inputName.classList.add('is-invalid');
                    document.querySelector(".input-nombre .fa-solid").classList.add("fa-circle-xmark")

                    document.querySelector(".input-nombre .fa-solid").classList.remove("fa-circle-check")
                    errorNombre.style.display = "block"
                    campos["nombre"] = false

                }
                break;

            case "user_last_name":

                if (expresiones.nombre.test(e.target.value)) {
                    inputSurname.classList.remove('is-invalid');
                    inputSurname.classList.add('is-valid');
                    document.querySelector(".input-apellido .fa-solid").classList.remove("fa-circle-xmark")
                    document.querySelector(".input-apellido .fa-solid").classList.add("fa-circle-check")
                    errorApellido.style.display = "none"
                    campos["apellido"] = true





                }
                else {
                    inputSurname.classList.add('is-invalid');
                    inputSurname.classList.remove('is-valid');
                    document.querySelector(".input-apellido .fa-solid").classList.add("fa-circle-xmark")
                    document.querySelector(".input-apellido .fa-solid").classList.remove("fa-circle-check")
                    errorApellido.style.display = "block"
                    campos["apellido"] = false

                }

                break

            case "user_email":

                if (expresiones.correo.test(e.target.value)) {
                    inputEmail.classList.remove('is-invalid');
                    inputEmail.classList.add('is-valid');
                    document.querySelector(".input-email .fa-solid").classList.remove("fa-circle-xmark")
                    document.querySelector(".input-email .fa-solid").classList.add("fa-circle-check")
                    errorEmail.style.display = "none"
                    campos["correo"] = true




                }
                else {
                    inputEmail.classList.add('is-invalid');
                    inputEmail.classList.remove('is-valid');
                    document.querySelector(".input-email .fa-solid").classList.add("fa-circle-xmark")
                    document.querySelector(".input-email .fa-solid").classList.remove("fa-circle-check")
                    errorEmail.style.display = "block"
                    campos["correo"] = false

                }

                break

            case "user_password":

                if (expresiones.password.test(e.target.value)) {
                    inputPassword.classList.remove('is-invalid');
                    inputPassword.classList.add('is-valid');
                    document.querySelector(".input-contraseña .fa-solid").classList.remove("fa-circle-xmark")
                    document.querySelector(".input-contraseña .fa-solid").classList.add("fa-circle-check")
                    errorContraseña.style.display = "none"
                    validarContraseña()






                }
                else {
                    inputPassword.classList.add('is-invalid');
                    inputPassword.classList.remove('is-valid');
                    document.querySelector(".input-contraseña .fa-solid").classList.add("fa-circle-xmark")
                    document.querySelector(".input-contraseña .fa-solid").classList.remove("fa-circle-check")
                    errorContraseña.style.display = "block"


                }



                break

            case "password_confirm":
                validarContraseña()

                break


        }
    }


    let validarContraseña = () => {


        if (inputPassword.value !== inputConfirmPassword.value) {

            inputConfirmPassword.classList.add('is-invalid');
            inputConfirmPassword.classList.remove('is-valid');
            document.querySelector(".input-contraseña2 .fa-solid").classList.add("fa-circle-xmark")
            document.querySelector(".input-contraseña2 .fa-solid").classList.remove("fa-circle-check")
            errorContraseña2.style.display = "block"
            campos["password"] = false


        }

        else {
            inputConfirmPassword.classList.remove('is-invalid');
            inputConfirmPassword.classList.add('is-valid');
            document.querySelector(".input-contraseña2 .fa-solid").classList.remove("fa-circle-xmark")
            document.querySelector(".input-contraseña2 .fa-solid").classList.add("fa-circle-check")
            errorContraseña2.style.display = "none"
            campos["password"] = true
            console.log(campos)

        }

    }

    inputsTotales.forEach((input) => {
        input.addEventListener("keyup", validarFormulario)

        input.addEventListener("blur", validarFormulario)


    })



    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let errores = [];

        if (inputName.value === "") {
            inputName.classList.add('is-invalid');
            errores.push("Debes introducir un nombre");
        }

        if (inputSurname.value === "") {
            inputSurname.classList.add('is-invalid');
            errores.push("Debes introducir un apellido");
        }


        if (inputEmail.value === "") {
            inputEmail.classList.add('is-invalid');
            errores.push("Debes introducir un Email");
        }




        if (inputPassword.value === "") {
            inputPassword.classList.add('is-invalid');
            errores.push("Debes introducir una contraseña");
        }


        ulErrores.innerHTML = '';
        if (errores.length > 0) {
            ulErrores.classList.add('alert-warning');
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<ol>' + errores[i] + '</ol>' + " "
            }
        }
        if (errores.length <= 0 && campos.nombre && campos.correo && campos.password && campos.apellido) {
            form.submit()
        }

    })
}
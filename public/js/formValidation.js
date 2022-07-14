window.onload = function () {

    // inputs capturados
    let inputName = document.getElementById('product_name');
    let inputPrice = document.getElementById('price');
    let inputDescription = document.getElementById('product_description');
    let inputsTotales = document.querySelectorAll('.form input');

    //inputs errores
    let errorNombre = document.querySelector(".error-nombre");
    let errorPrecio = document.querySelector(".error-precio");
    let errorEmail = document.querySelector(".error-mail");
    let errorContraseña = document.querySelector(".error-contraseña");
    let errorContraseña2 = document.querySelector(".error-contraseña2");

    // form capturado
    let form = document.querySelector('.form');

    let ulErrores = document.querySelector('.errores');

    inputName.focus();

    //expresiones
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        precio: /^.{1,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{1,14}$/ // 7 a 14 numeros.
        ///^([0-9])*$/
    }

    const campos = {
        nombre: false,
        precio: false,
    }

    let validarFormulario = (e) => {

        switch (e.target.name) {

            case "product_name":

                if (expresiones.nombre.test(e.target.value)) {
                    inputName.classList.remove('is-invalid');
                    document.querySelector(".input-nombre .fa-solid").classList.remove("fa-circle-xmark");
                    inputName.classList.add('is-valid');
                    document.querySelector(".input-nombre .fa-solid").classList.add("fa-circle-check");
                    errorNombre.style.display = "none";
                    campos["nombre"] = true;
                } else {
                    inputName.classList.add('is-invalid');
                    document.querySelector(".input-nombre .fa-solid").classList.add("fa-circle-xmark");

                    document.querySelector(".input-nombre .fa-solid").classList.remove("fa-circle-check");
                    errorNombre.style.display = "block";
                    campos["nombre"] = false;

                }
                break;

            case "price":

                if (expresiones.precio.test(e.target.value) && e.target.value != 0) {
                    inputPrice.classList.remove('is-invalid');
                    inputPrice.classList.add('is-valid');
                    document.querySelector(".input-precio .fa-solid").classList.remove("fa-circle-xmark");
                    document.querySelector(".input-precio .fa-solid").classList.add("fa-circle-check");
                    errorPrecio.style.display = "none";
                    campos["precio"] = true;
                } else {
                    inputPrice.classList.add('is-invalid');
                    inputPrice.classList.remove('is-valid');
                    document.querySelector(".input-precio .fa-solid").classList.add("fa-circle-xmark");
                    document.querySelector(".input-precio .fa-solid").classList.remove("fa-circle-check");
                    errorPrecio.style.display = "block";
                    campos["precio"] = false;
                }
                break;
                
            case "product_description":

                if (expresiones.correo.test(e.target.value)) {

                    inputDescription.classList.remove('is-invalid');
                    inputDescription.classList.add('is-valid');
                } else {
                    inputDescription.classList.add('is-invalid');
                }
                break;
        }
    }

    inputsTotales.forEach((input) => {
        input.addEventListener("keyup", validarFormulario);
        input.addEventListener("blur", validarFormulario);
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let errores = [];

        if (inputName.value === "") {
            inputName.classList.add('is-invalid');
            errores.push("Debes introducir un título");
        }

        if (inputPrice.value === "") {
            inputPrice.classList.add('is-invalid');
            errores.push("Debes introducir un precio");
        } else if (inputPrice.value < 1) {
            inputPrice.classList.add('is-invalid');
            errores.push("el precio debe ser mayor a 0");
        } else {
            inputPrice.classList.remove('is-invalid');
            inputPrice.classList.add('is-valid');
        }

        if (inputDescription.value === "") {
            inputDescription.classList.add('is-invalid');
            errores.push("Debes introducir una descripción");
        } else {
            inputDescription.classList.remove('is-invalid');
            inputDescription.classList.add('is-valid');
        }

        ulErrores.innerHTML = '';
        if (errores.length > 0) {
            ulErrores.classList.add('alert-warning');
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<ol>' + errores[i] + '</ol>' + " "
            }
        }
        if (errores.length <= 0 && campos.nombre && campos.precio) {
            form.submit()
        }
    });
}
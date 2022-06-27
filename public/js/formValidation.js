window.onload = function(){

    // inputs capturados
    let inputName = document.getElementById('product_name');
    let inputPrice = document.getElementById('price');
    let inputDescription = document.getElementById('product_description');

    // form capturado
    let form = document.querySelector('.form');

    let ulErrores = document.querySelector('.errores');

    inputName.focus();

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let errores = [];

        if(inputName.value === ""){
            inputName.classList.add('is-invalid');
            errores.push("Debes introducir un título");
        } else {
            inputName.classList.remove('is-invalid');
            inputName.classList.add('is-valid');
        }

        if(inputPrice.value === ""){
            inputPrice.classList.add('is-invalid');
            errores.push("Debes introducir un precio");
        } else if(inputPrice.value < 1 ){
            inputPrice.classList.add('is-invalid');
            errores.push("el precio debe ser mayor a 0");
            
        } 
        
        else {
            inputPrice.classList.remove('is-invalid');
            inputPrice.classList.add('is-valid');
        }        
        
        if(inputDescription.value === ""){
            inputDescription.classList.add('is-invalid');
            errores.push("Debes introducir una descripción");
        } else {
            inputDescription.classList.remove('is-invalid');
            inputDescription.classList.add('is-valid');
        }        
        
        ulErrores.innerHTML = '';
        if(errores.length > 0){
            ulErrores.classList.add('alert-warning');
            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += '<ol>' + errores[i]+ '</ol>'+" "
            }
        } else {
            form.submit()
        }
    })
}
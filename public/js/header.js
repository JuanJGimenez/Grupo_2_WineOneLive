window.onload = function(){

  

  let menu = document.querySelector("#menu")


  let hamburger = document.querySelector(".burger")

  let cierra = document.getElementById("cierra")

  

    hamburger.addEventListener("click", function(){

        menu.classList.toggle("mostrar")




    })

    cierra.addEventListener("click", function(){

        menu.classList.toggle("mostrar")




    })



    // Get the input field
var input = document.getElementById("search");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});


    
} 
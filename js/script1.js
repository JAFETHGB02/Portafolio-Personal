let nombre = document.getElementById("nombre")

let apellido = document.getElementById("apellido")

let email = document.getElementById("email")

let contra = document.getElementById("contra")

let registros = [];

btn1.addEventListener("click", (e) =>{

   
    if (nombre.value != '' && apellido.value != '' && email.value != '' && contra.value  != '') {  

    e.preventDefault()
     const data  = {

        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        contra: contra.value
     }

     registros = JSON.parse(localStorage.getItem("registro")) || [];

     registros.push(data)
     
      localStorage.setItem("registros", JSON.stringify(registros))

    
     swal({
      title: "❤️SESIÓN INICIADA❤️",
      text: "HAS CLICK",
      icon: "success",
      button: "༼ つ ◕_◕ ༽つ¡AQUI!",
   }).then((willDelete)=> {

      if (willDelete) {
          swal(window.location.href = "index3.html")

      }

   })
   return true;


   
   } else {

   alert ('Los datos estan incompletos')
   return false;
      
}})






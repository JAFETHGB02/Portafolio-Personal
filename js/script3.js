let Email = document.getElementById("Email")

let Contra = document.getElementById("Contra")

let registro = [];

btn2.addEventListener("click", (e) =>{


    if (Email.value != '' && Contra.value  != '' ) {  

        e.preventDefault()
         const data  = {
    
            Email: Email.value,
            Contra: Contra.value

         } 


    
         registro = JSON.parse(localStorage.getItem("registro")) || [];

         console.log(registro);

         encontrado = registro.find(usuario => usuario.email == Email.value && usuario.contra == Contra.value )

         console.log(encontrado)
        
         swal({
          title: "❤️SESIÓN INICIADA❤️",
          text: "HAS CLICK",
          icon: "success",
          button: "༼ つ ◕_◕ ༽つ¡AQUI!",
       }).then((willDelete)=> {
    
          if (willDelete) {
              swal(window.location.href = "index2.html")
    
          }
    
       })
       return true;
       
       } else {
    
       alert ('Los datos estan incompletos')
       return false;
      
      
}})



    /*localStorage.setItem("", JSON.stringify())
    var cat = localStorage.getItem("miGato");*/

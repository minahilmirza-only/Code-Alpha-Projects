document.addEventListener("DOMContentLoaded",function(){
    const contactform=document.getElementById("contwctform")
    const successmessage=document.getElementById("successmessage")

    if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

      
      contactForm.reset();

      
      if (successMessage) {
        successMessage.style.display = "block";

       
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 4000);
      }
    });
  }
});




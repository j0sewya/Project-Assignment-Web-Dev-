const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const name =document.getElementById("name").value.trim();
    const email =document.getElementById("email").value.trim();
    const subject =document.getElementById("subject").value.trim();
    const message =document.getElementById("message").value.trim();

    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    if(name === ""){
        errorMessage.textContent = "Please enter your name.";
        return;
    }
    if(email === ""){
        errorMessage.textContent = "Please enter your email.";
        return;
    }
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailPattern.test(email)){
        errorMessage.textContent =
            "Please enter a valid email address.";
        return;
    }
    if(subject === ""){
        errorMessage.textContent =
            "Please enter a subject.";
        return;
    }
    if(message === ""){
        errorMessage.textContent =
            "Please enter your message.";
        return;
    }

    alert("Message sent successfully!");

    form.reset();
})

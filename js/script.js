const form = document.getElementById("contactForm");


if (form){
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
}
const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}

const copyPhone = document.getElementById("phoneNumber");
const copyEmail = document.getElementById("emailAddress");

function copyText(element){
    const originalText = element.textContent;

    navigator.clipboard.writeText(originalText.trim());

    element.textContent = "✓ Copied";

        setTimeout(function(){
            element.textContent = originalText; 
        }, 2000);
}

if(copyPhone){
    copyPhone.addEventListener("click",function(){
        copyText(copyPhone);
    });
}

if(copyEmail){
    copyEmail.addEventListener("click",function(){
        copyText(copyEmail);
    });
}
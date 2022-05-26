//declarations
    const firstName = document.querySelector("#firstName")
    const lastName = document.querySelector("#lastName")
    const telephone = document.querySelector("#telephone")
    const email = document.querySelector("#email")
    const message = document.querySelector("#message")
    const success = document.querySelector("#success")
    const errorNodes = document.querySelectorAll(".error")
//validate data
    function validateForm(){
        
        clearMessages();
        let errorFlag = false
        
        if(firstName.value.length < 1){
            errorNodes[0].innerText = "Name Cannot Be Blank.";
            firstName.classList.add("error-border");
            errorFlag = true
        }

        if(!emailIsValid(email.value)){
            errorNodes[1].innerText = "E-mail Not Valid.";
            email.classList.add("error-border"); 
            errorFlag = true
        }

        if(message.value.length < 1 || message.value == ''){
            errorNodes[2].innerText = "Please Include a Message.";
            message.classList.add("error-border");
            errorFlag = true
        }

        if(!errorFlag){
            success.innerText = "Thank you we will be in touch!";
        }
}

//clearing error and success messages
    function clearMessages(){
        for(let i = 0; i < errorNodes.length; i++){
            errorNodes[i].innerText = "";
        }
        
        success.innerText = "";
        firstName.classList.remove("error-border");
        message.classList.remove("error-border");
        email.classList.remove("error-border");
    }

//checking email validity
    function emailIsValid(email){
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);
    }

//clearing input fields on refresh
    window.onload = function() {
        document.getElementById('contactForm').reset();
    }
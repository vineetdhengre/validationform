console.log("this is working");

const form = document.getElementById("form");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

//adding event to submit button
form.addEventListener( "submit", (event) => {
    event.preventDefault()
    Validate();
});


const sendData = (usernameVal, count) => {
        Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          }) ;
        
}


// final validation of success msg
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName("frmCntrlEle");

    var count = formCon.length - 1;
    sendData(usernameVal , count);
}


// more email validation in email
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 3) return false;
    if(dot == emailVal.length - 1 ) return false;
        return true;
}




// defining the validate function from event 
const Validate = () => {
    const usernameVal = username.value.trim();  // value.trim funct. removes spaces
    const phoneVal = phone.value.trim();
    const emailVal = email.value.trim();


    // validating username
    if (usernameVal == "") {
        setErrorMsg(username, "Username not be blank");
    }else if (usernameVal.length <= 3) { 
            setErrorMsg(username, " Must be greater than 3 char.");
    } else {
        setSuccessMsg (username);
    }


     // validating phone
     if (phoneVal == "") {
        setErrorMsg(phone, "Phone no. not be blank");
    }else if (phoneVal.length != 10) {  
            setErrorMsg(phone, " Not a Valid Phone No.");
    } else {
        setSuccessMsg (phone); 
    }
        

    // validating email
    if (emailVal == "") {
        setErrorMsg(email, "Email cannot be blank");
    }else if (!isEmail(emailVal)) { 
        setErrorMsg(email, " Not a Valid Email ");
    } else {
        setSuccessMsg (email); 
    }

    successMsg(usernameVal);
}
    

    function setErrorMsg (input, errormsgs){
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "frmCntrlEle error";
        small.innerText = errormsgs;            //  we can also use innerHTML in place of innerText
    }

    function setSuccessMsg (input){
        const formControl = input.parentElement;
        formControl.className = "frmCntrlEle success";
    }


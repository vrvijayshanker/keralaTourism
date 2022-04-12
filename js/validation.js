document.getElementById("login-btn").addEventListener("click", logincheck);
//Login form validation -----------------------------------------------------------------------------
function logincheck(){
    let mailid = document.getElementById("email");
    let passwd = document.getElementById("pswd");
    let login = document.getElementById("login-btn");
    let errmsg = document.getElementById("errmsg");
    
    let messages = [];
        /*Checking if any of the fields are empty
        ------------------------------------------*/

        if(mailid.value==="" && passwd.value===""){
            messages.push("Fields cannot be empty"); 
            mailid.style.boxShadow = "1px 5px 12px red";
            passwd.style.boxShadow = "1px 5px 12px red";
            mailid.focus(); //Redirect focus to email field
            errmsg.innerHTML = messages;

        }

        else if(mailid.value===""){     
            messages.push("Email cannot be empty");      
            mailid.focus(); //Redirect focus to email field
            mailid.style.boxShadow = "1px 5px 12px red";
            passwd.style.boxShadow = "none";
            errmsg.innerHTML = messages; 
        }
        else if(passwd.value===""){
            messages.push("Password cannot be empty");
            passwd.focus(); //Redirecting focus to password field
            passwd.style.boxShadow = "1px 5px 12px red";
            mailid.style.boxShadow = "none";
            errmsg.innerHTML = messages; 
        }

        /*Checking if Email format is correct
        --------------------------------------*/

        else{            
            var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,3})?$/;
            
            if(!mailid.value.match(regexp)){    
                messages.push("Invalid email");
                mailid.focus();
                mailid.style.boxShadow = "1px 5px 12px red";
                passwd.style.boxShadow = "none";
                errmsg.innerHTML = messages; 
            }
        }

        if(messages.length > 0){
            
            event.preventDefault();                   

        }
}

// signup form validation--------------------------------------------------------------------------------

function checksignup(){
    let sform = document.getElementById("signupform");
    let fnam = document.getElementById("fname");
    let email = document.getElementById("mail");
    let ph = document.getElementById("mob");
    let fnamErr = document.getElementById("fnamerr");
    let emailErr = document.getElementById("emailerr");
    let phoneErr = document.getElementById("phoneerr");
    // let addrs = document.getElementById("addr");
    // let emer = document.getElementById("emgy");
    // let pwd = document.getElementById("pwd");
    // let rpwd = document.getElementById("rpwd");
    // let sub = document.getElementById("subbtn");


    let messages = [];
    if(fnam.value==="" || email.value==="" || ph.value===""){
        messages.push("Fields cannot be empty");  
        alert("Starred fields cannot be empty");              
    }
    
    else{
        var fnameregexp = /^[0-9\.-]$/;
        var emailregexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,3})?$/;
        var phoneregexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        // var medPassregexp = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})$/
        // var strPassregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})"/;

        if(fnam.value.match(fnameregexp)){
            messages.push("Must be alphabets");
            fnamErr.style.color = "red";
            fnamErr.innerHTML = "Must be alphabets";
            fnam.focus();
        }

        if(!email.value.match(emailregexp)){
            messages.push("Invalid email");
            emailErr.style.color = "red";
            emailErr.innerHTML = "Invalid email";
            email.focus();
        }

        if(!ph.value.match(phoneregexp)){
            messages.push("Invalid phone number format");
            phoneErr.style.color = "red";
            phoneErr.innerHTML = "Invalid phone number format";
            ph.focus();
        }              

    }

    if(messages.length > 0){
        
        event.preventDefault();
        // console.log("some error occured");
        let errmsg = messages.join();
        console.log(errmsg);

    }
    
}

function passwordStrCheck(){
    const indicator = document.querySelector(".indicator");
    const weak = document.querySelector(".weak");
    const medium = document.querySelector(".medium");
    const strong = document.querySelector(".strong");
    const passalert = document.querySelector(".passalert");
    const passinput = document.getElementById("pwd");

    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    if(passinput.value !=""){
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if((passinput.value.length <=3) && ((passinput.value.match(regExpWeak)) || (passinput.value.match(regExpMedium)) || (passinput.value.match(regExpStrong))))no=1;
        if(((passinput.value.length >3) && (passinput.value.length <8)) && ((passinput.value.match(regExpWeak)) && (passinput.value.match(regExpMedium))) || ((passinput.value.match(regExpMedium)) && (passinput.value.match(regExpWeak))) || (passinput.value.match(regExpStrong)))no=2;
        if(((passinput.value.length >=8) && (passinput.value.length <=20)) && (passinput.value.match(regExpWeak)) && (passinput.value.match(regExpMedium)) && (passinput.value.match(regExpStrong)))no=3;

        if(no == 1){
            weak.classList.add("active");
            passalert.style.display = "block";
            passalert.textContent = "Your password is too weak";
            passalert.classList.add("weak");
        }

        if(no == 2){
            medium.classList.add("active");
            // passalert.style.display = "block";
            passalert.classList.add("medium");            
            passalert.textContent = "Your password is average";
        }
        else{
            medium.classList.remove("active");
            passalert.classList.remove("medium");
        }

        if(no == 3){
            strong.classList.add("active");
            medium.classList.add("active");
            // passalert.style.display = "block";
            passalert.classList.add("strong");            
            passalert.textContent = "Your password is strong";
        }
        else{
            strong.classList.remove("active");
            passalert.classList.remove("strong");
        }
    }
    else{
        indicator.style.display = "none";
        passalert.style.display = "none";
    }
}

function repeatPassCheck(){
        
    const pwd = document.getElementById("pwd");
    const rpwd = document.getElementById("rpwd");

    if(pwd.value != rpwd.value){
        document.querySelector(".repassalert").innerHTML = "Passwords don't match";
        document.querySelector(".repassalert").style.color = "red";
        return false;
    }
    else{
        document.querySelector(".repassalert").innerHTML = "Passwords match";
        document.querySelector(".repassalert").style.color = "green";
        return true;
    }

}



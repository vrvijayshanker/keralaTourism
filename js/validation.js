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


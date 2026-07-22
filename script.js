let sign=document.querySelector(".sign");
let login=document.querySelector(".loginbox");
let browse=document.querySelector(".browse");
let popular=document.querySelector(".popular");
let heroPage=document.querySelector(".hero");
sign.addEventListener("click",
    function(){
        login.style.display="block";
    }
);
let start=document.querySelector(".start");
start.addEventListener("click",
    function(){
        let email=document.querySelector(".email").value;
        let password=document.querySelector(".password").value;
        if(email.trim()===""){
            console.log("Enter the email");
        }
        else if(password.trim()===""){
            console.log("Enter the password");
        }
        else{
        login.style.display="none";
        heroPage.style.display="none";
        browse.style.display="block";
        popular.style.display="block";
        }
    }
);

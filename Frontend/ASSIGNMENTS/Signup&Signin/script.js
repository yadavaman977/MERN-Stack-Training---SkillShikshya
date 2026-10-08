// signin
const email=document.getElementById("signinEmail");
const password=document.getElementById("signinPassword");
const signinForm=document.getElementById("signinForm");

signinForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const signinData={
        email: email.value,
        password: password.value
    };
    // Handle signin logic here
});

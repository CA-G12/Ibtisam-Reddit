const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Sign Up needed Varibale
const usernameSign = document.getElementById('sign-username');
const emailSign = document.getElementById('sign-email');
const passwordSign = document.getElementById('sign-password');
const confirmPassword = document.getElementById('confirm-password');
const signUp = document.getElementById('sign-btn');

// Login needed variables
const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');

//logout needed variables
const logout = document.getElementById('log-out-btn');
logout.addEventListener('click', ()=>{
    fetch('/logOut')
    .then((response) => {
        if (response.redirected) {
          window.location.href = response.url; 
         } 
       })
    .catch((err)=> console.log(err))
  });
  
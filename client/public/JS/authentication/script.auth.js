// Sign up operation
signUp.addEventListener('click', (e) => {
  e.preventDefault();
  if (usernameSign.value && emailSign.value && passwordSign.value && confirmPassword.value) {
    if (usernameSign.value.length === 1) {
      alert('Please enter a valid username');
    } else if (passwordSign.value !== confirmPassword.value){
      alert('The passwords must be matching');
    } else if (!regexEmail.test(emailSign.value)){
      alert('Please enter a valid email');
    }else{
      const userInfo = {
        username: usernameSign.value,
        email: emailSign.value,
        password: passwordSign.value,
        confirmPassword: confirmPassword.value,
      }
      signupFun(userInfo)
    }
  } else {
    alert('Please Fill all the information needed to Sign Up');
  }
});

function signupFun(userInfo) {
  fetch(
    '/signup', {
    headers :{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method : 'POST',
    body : JSON.stringify(userInfo),
  }
  )
  .then((response) => {
    if (response.redirected) {
      window.location.href = response.url; 
     } 
   })
  .catch((error) => { console.log(error); });
}

// Login operation
login.addEventListener('click', (e) => {
  e.preventDefault();
  if (email.value && password.value) {
    if (!regexEmail.test(email.value)){
      alert('Please enter a valid email');
    } else {
      const userInfo = {
        email: email.value,
        password: password.value,
      };    
      loginFun(userInfo);
    }
  } else {
    alert('Please Fill all the information needed to Log in');
  }
});

function loginFun(userInfo) {
  fetch(
    '/log', {
    headers :{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method : 'POST',
    body : JSON.stringify(userInfo),
  }
  )
  // .then((data)=> data.json())
  .then((response) => {
     if (response.redirected) {
       window.location.href = response.url; 
      } 
    })
  .catch((error) => { console.log(error); });
}

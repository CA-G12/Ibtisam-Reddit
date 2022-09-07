// Sign up operation
signUp.addEventListener('click', (e) => {
  e.preventDefault();
  if (usernameSign.value && emailSign.value && passwordSign.value && confirmPassword.value) {
    if (usernameSign.value.length === 1) {
     swal('Please enter a valid username');
    } else if (passwordSign.value !== confirmPassword.value){
     swal('The passwords must be matching');
    } else if (!regexEmail.test(emailSign.value)){
     swal('Please enter a valid email');
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
   swal('Please Fill all the information needed to Sign Up');
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
  .then((res) => {
    if(res.error){
     swal({
        title: '',
        text: res.error,
        icon: 'warning',
        button: 'OK',
      })
    } 
    else if(res.redirected) {
      window.location.href = res.url;
  }
  })
  .catch((error) => { 
   swal({
    title: 'Error!',
    text: error,
    icon: 'error',
    button: 'OK',
  })
});
}

// Login operation
login.addEventListener('click', (e) => {
  e.preventDefault();
  if (email.value && password.value) {
    if (!regexEmail.test(email.value)){
     swal('Please enter a valid email');
    } else {
      const userInfo = {
        email: email.value,
        password: password.value,
      };    
      loginFun(userInfo);
    }
  } else {
   swal('Please Fill all the information needed to Log in');
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
  .then((res) => {
    if(res.error){
      swal({
        title: 'res.error',
        text: '',
        icon: 'error',
        button: 'OK',
      });
    } else if(res.redirected) {
      window.location.href = res.url;
  }     
  })
  .catch((error) => { 
   swal({
    title: 'Error!',
    text: error,
    icon: 'error',
    button: 'OK',
  })
});
}

//Sign Up needed Varibale 
const usernameSign = document.getElementById('sign-username');
const emailSign = document.getElementById('sign-email');
const passwordSign = document.getElementById('sign-password');
const confirmPassword = document.getElementById('confirm-password');
const signUp = document.getElementById('sign-btn');

signUp.addEventListener('click', () => {
  const userInfo = {
    username: usernameSign.value,
    email: emailSign.value,
    password: passwordSign.value,
    confirmPassword: confirmPassword.value,
  };
  console.log(userInfo);
  fetch(
    '/users/signup',
    Headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method = 'POST',
    body = JSON.stringify(userInfo),
  )
    .then((response) => {console.log(response); })
    .catch((error) => { console.log(error); });
});

const closeLogin = document.getElementById('close-login');
const closesign = document.getElementById('close-sign');
const openLogin = document.getElementById('login-btn');
const opensign = document.getElementById('sign-up-btn');
const loginModal = document.getElementById('login-modal');
const signModal = document.getElementById('sign-modal');
const logSign = document.getElementById('log-from-sign');
const signLogin = document.getElementById('sign-from-login');

openLogin.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

opensign.addEventListener('click', () => {
  signModal.style.display = 'block';
});

closeLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

closesign.addEventListener('click', () => {
  signModal.style.display = 'none';
});

logSign.addEventListener('click', () => {
  signModal.style.display = 'none';
  loginModal.style.display = 'block';
});

signLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
  signModal.style.display = 'block';
});

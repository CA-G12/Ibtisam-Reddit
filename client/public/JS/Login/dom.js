const closeLogin = document.getElementById('close-login');
const openLogin = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');

openLogin.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

const username = document.querySelector('#usernameLogin');
const password = document.querySelector('#passwordLogin');
const login = document.querySelector('#submitLogin');
const form = document.querySelector('#formLogin');
const error = document.querySelector('#errorLogin');
const checkUsername = () => {
  if (username.validity.valueMissing) {
    error.textContent = 'username can not ne empty';
  }
};
form.addEventListener('submit', (e) => {
  checkUsername();
});

const username = document.querySelector('#usernameLogin');
const password = document.querySelector('#passwordLogin');
const login = document.querySelector('#submitLogin');
const form = document.querySelector('#formLogin');
const error = document.querySelector('#errorLogin');

const message = [];
form.addEventListener('submit', (e) => {
  if (!username.value) {
    message.push('username can\'t be empty');
  }

  if (!password.value) {
    message.push('password can\'t be empty');
  }

  if (message.length > 0) {
    e.preventDefault();
    error.textContent = '';
    error.textContent = message.join(',');
  } else {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }
});

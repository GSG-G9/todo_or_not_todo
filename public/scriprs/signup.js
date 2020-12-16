const signupForm = document.querySelector("#signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = e.target.elements[0].value;
  const email = e.target.elements[1].value;
  const password = e.target.elements[2].value;
  const confirmPassword = e.target.elements[3].value;

  fetch('/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username, email, password, confirmPassword,
    }),
  })
    .then((response) => response.json());
});

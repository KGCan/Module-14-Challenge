// reviewed

const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login');
    const password = document.querySelector('#password-login');
  
fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email: email.value, 
          password: password.value
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(function() {
        document.location.replace('/dashboard');
      })
      .catch(err => console.log(err));
      };


  document.querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
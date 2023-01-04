/* For testing purposes */
const correctEmail = 'admin@a.com';
const correctPassword = 'pass123';

// Global variables
const loginForm = document.querySelector('.login-form');
const warning = document.querySelector('.form-warning');
const loginButton = document.querySelector('.login-btn');

const login = () => {
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	const warning = document.querySelector('.form-warning');
	if(email === correctEmail && password === correctPassword) {
		alert('Sucess!');
	} else if(email !== correctEmail) {
		warning.textContent = 'This email is not registered. Please, try again.';
	} else if(password !== correctPassword) {
		warning.textContent = 'Password incorrect! Please, try again.';
	} else {
		warning.textContent = 'Error. Please, contact the support team.';
	};

}

// Prevent the default behavior of the submit event (page refresh)
loginForm.addEventListener("submit", function(event) {
	event.preventDefault();
	login();
});
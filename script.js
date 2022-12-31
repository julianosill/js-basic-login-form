const loginForm = document.querySelector('.login-form');

const login = () => {
	const email = document.querySelector('#email');
	const password = document.querySelector('#password');
	const warning = document.querySelector('.form-warning');


	console.log('Login attempted!')
}

// Prevent the default behavior of the submit event (page refresh)
loginForm.addEventListener("submit", function(event) {
	event.preventDefault();
	login();
});
/* For testing purposes */
const correctEmail = 'admin@a.com';
const correctPassword = 'pass123';

// Global variables
const loginForm = document.querySelector('.login-form');
const loginButton = document.querySelector('.login-btn');
const warning = document.querySelector('.form-warning');
// An object to get user email and password after login button is clicked
const userData = {};

// Checks user data, simulates a waiting time with a promise that returns the result after it
const loginPromise = () => {
	// Gets the value after the button is clicked and stores it in two properties
	userData.email = document.querySelector('#email').value;
	userData.password = document.querySelector('#password').value;
	// Disables the button during the attempt
	loginButton.setAttribute('disabled', '');

	// Generates a random waiting time
	const delay = (Math.random() * 1.5) * 1000;

	return new Promise((resolve, reject) => {
		// setTimeout() simulates requesting and waiting the server response
		setTimeout(() => {
			if(userData.email === correctEmail && userData.password === correctPassword) {
				resolve('You\'re logged in!');
			} else {
				reject('Email or password incorrect.');
			}
		}, delay);
	});
};

// Gets the successful message, then alerts the user
const loginSuccessful = (successfulMessage) => {
	alert(successfulMessage);
};

// Gets the failed message from the promise, then shows it in the ".warning" div
const loginFailed = () => {
	if(userData.email !== correctEmail) {
		warning.textContent = 'Email is not valid. Please, try again';
	} else if (userData.password !== correctPassword) {
		warning.textContent = 'Password is incorrect. Please, try again.'
	} else {
		warning.textContent = 'Login failed. Please, contact our support team.'
	};
};

const enableLoginButton = () => {
	loginButton.removeAttribute('disabled');
};

const loginAttempt = () => {
	// Removes any warning each time the login is attempted
	warning.textContent = '';
	loginPromise()
	// If the promise returns a success attempt, then calls "loginSuccessful()"
	.then(loginSuccessful)
	// If there's an error, then calls "loginFailed()"
	.catch(loginFailed)
	// .finally() calls the function as the last one in the queue. It doesn't matter if it was a successful or failed attempt, it'll run anyway.
	.finally(enableLoginButton);
};

// Prevent the default behavior of the submit event (page refresh)
loginForm.addEventListener("submit", function(event) {
	event.preventDefault();
	loginAttempt();
});
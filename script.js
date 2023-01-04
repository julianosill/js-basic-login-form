/* For testing purposes */
const correctEmail = 'admin@a.com';
const correctPassword = 'pass123';

// Global variables
const loginForm = document.querySelector('.login-form');
const warning = document.querySelector('.form-warning');
const loginButton = document.querySelector('.login-btn');

// Checks user data, simulates a waiting time with a promise that returns the result after it
const loginPromise = () => {
	// Gets the value after the button is clicked
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	// Disables the button during the attempt
	loginButton.setAttribute('disabled', '');

	// Generates a random waiting time
	const delay = (Math.random() * 1.5) * 1000;

	return new Promise((resolve, reject) => {
		// setTimeout() simulates requesting and waiting the server response
		setTimeout(() => {
			if(email === correctEmail && password === correctPassword) {
				resolve('You\'re logged in!');
			} else {
				reject('Email or password incorrect. Please, try again.')
			}
		}, delay);
	});
};

// Gets the successful message, then alerts the user
const loginSuccessful = (successfulMessage) => {
	alert(successfulMessage);
};

// Gets the failed message from the promise, then shows it in the ".warning" div
const loginFailed = (failedMessage) => {
	warning.textContent = failedMessage;
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
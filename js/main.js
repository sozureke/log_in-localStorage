document.addEventListener('DOMContentLoaded', () => {
	// Get references to HTML elements
	const emailInput = document.getElementById('email')
	const passwordInput = document.getElementById('password')
	const checkbox = document.getElementById('checkbox_button')
	const button = document.getElementsByTagName('button')[0]
	const message = document.querySelector('.message')

	// Regular expression for Latin characters
	const latinRegex = /[a-zA-Z]/

	// Messages for different scenarios
	const messages = {
		success: 'Your data has been saved in localStorage!',
		error: 'Error! Please try again.',
		nosave: 'You chose not to save your data.',
	}

	// Set initial state of checkbox from localStorage
	function setCheckboxState() {
		checkbox.checked = localStorage.getItem('isChecked') === 'true'

		// Update localStorage when checkbox is clicked
		checkbox.addEventListener('click', () => {
			localStorage.setItem('isChecked', checkbox.checked)
		})
	}

	// Display temporary message
	function showMessage(text, duration = 3000) {
		message.innerHTML = text
		message.style.opacity = 1

		// Hide the message after the specified duration
		setTimeout(() => {
			message.style.opacity = 0
		}, duration)
	}

	// Handle saving user info
	function saveUserInfo() {
		button.addEventListener('click', event => {
			event.preventDefault()

			if (
				checkbox.checked &&
				validateUserInput(emailInput.value) &&
				validateUserInput(passwordInput.value)
			) {
				// Save user data in localStorage
				localStorage.setItem('email', emailInput.value)
				localStorage.setItem('password', passwordInput.value)
				clearInputs()
				showMessage(messages.success)
			} else if (
				!checkbox.checked &&
				validateUserInput(emailInput.value) &&
				validateUserInput(passwordInput.value)
			) {
				clearInputs()
				showMessage(messages.nosave)
			} else {
				clearInputs()
				showMessage(messages.error)
			}
		})
	}

	// Validate user input using the Latin regex
	function validateUserInput(inputValue) {
		return inputValue && latinRegex.test(inputValue)
	}

	// Display a confirmation message when leaving the page
	function clearLocalStorageOnReload() {
		window.addEventListener('beforeunload', event => {
			event.returnValue =
				'Are you sure you want to leave? Your changes may not be saved.'
		})
	}

	// Clear input fields
	function clearInputs() {
		emailInput.value = ''
		passwordInput.value = ''
	}

	// Initialize the functionality when the DOM is loaded
	setCheckboxState()
	clearLocalStorageOnReload()
	saveUserInfo()
})

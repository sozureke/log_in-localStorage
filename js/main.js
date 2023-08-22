document.addEventListener('DOMContentLoaded', () => {
	const emailInput = document.getElementById('email')
	const passwordInput = document.getElementById('password')
	const checkbox = document.getElementById('checkbox_button')
	const button = document.getElementsByTagName('button')[0]
	const message = document.querySelector('.message')
	const latinRegex = /[a-zA-Z]/
	const messages = {
		success: 'Your data saved in localStorage!',
		error: 'Error! Please try again',
		nosave: 'You chose not to save your data',
	}

	function setCheckboxState() {
		checkbox.checked = localStorage.getItem('isChecked') === 'true'
		checkbox.addEventListener('click', () => {
			localStorage.setItem('isChecked', checkbox.checked)
		})
	}

	function showMessage(text, duration = 3000) {
		message.innerHTML = text
		message.style.opacity = 1
		setTimeout(() => {
			message.style.opacity = 0
		}, duration)
	}

	function saveUserInfo() {
		button.addEventListener('click', event => {
			event.preventDefault()
			if (
				checkbox.checked &&
				validateUserInput(emailInput.value) &&
				validateUserInput(passwordInput.value)
			) {
				localStorage.setItem('email', emailInput.value)
				localStorage.setItem('password', passwordInput.value)
				clearInputs()
				showMessage(messages.success)
			} else if (!checkbox.checked) {
				clearInputs()
				showMessage(messages.nosave)
			} else {
				showMessage(messages.error)
			}
		})
	}

	function validateUserInput(inputValue) {
		return inputValue && latinRegex.test(inputValue)
	}

	function clearLocalStorageOnReload() {
		document.addEventListener('beforeunload', () => {
			localStorage.clear()
		})
	}

	function clearInputs() {
		emailInput.value = ''
		passwordInput.value = ''
	}

	setCheckboxState()
	clearLocalStorageOnReload()
	saveUserInfo()
})

# Log In Element with localStorage

This simple JavaScript application allows users to input their email and password, along with a checkbox indicating whether they want to save the data. If the user decides to save the data and inputs are valid, the information is stored in the browser's localStorage. The app provides messages for successful data saving, not saving, and errors. The checkbox state is also persisted across page reloads.

## Usage
Clone this repository or copy the code into your project.
Include the provided JavaScript code in your HTML file.
Create the necessary HTML elements (input fields, checkbox, button, message display).
Update the HTML element IDs and classes referenced in the JavaScript code to match your HTML structure.
Features
Checkbox State Persistence: The checkbox state is saved in localStorage and restored on page reload.

- User Input Validation: User input for email and password is validated using a regular expression to ensure that only Latin letters are accepted.

- Messages Display: The app displays messages for different scenarios, such as successful data saving, not saving data, and errors.

- LocalStorage Management: The app clears the localStorage when the page is reloaded or closed, ensuring that user data is not persisted beyond the session.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

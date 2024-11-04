function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Set the correct password
    const correctPassword = '203804';

    if (passwordInput === correctPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}

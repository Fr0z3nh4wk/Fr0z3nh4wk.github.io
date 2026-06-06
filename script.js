/*
   Horizon Mining Systems - A4 JavaScript
   This file keeps behaviour separate from HTML for readability and reuse.
*/

// Opens the newsletter signup form in a new browser tab or window.
function openNewsletterForm() {
    window.open('newsletter_signup.html', '_blank');
}

// Displays the welcome message required when the signup page loads.
function showWelcomeMessage() {
    alert('Welcome to the Horizon Mining Systems Ltd. - Newsletter Signup');
}

// Validates the newsletter form before it is submitted to the server.
function validateNewsletterForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    if (firstName === '') {
        alert('Please enter your first name before submitting the form.');
        document.getElementById('firstName').focus();
        return false;
    }

    if (lastName === '') {
        alert('Please enter your last name before submitting the form.');
        document.getElementById('lastName').focus();
        return false;
    }

    alert('Thank you. Your newsletter signup form is ready to be submitted.');
    return true;
}

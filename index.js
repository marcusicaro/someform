const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmField = document.getElementById('confirmation');

email.addEventListener('focusout', () => {
    if (email.validity.valueMissing) {
        email.setCustomValidity('Email field cannot be empty.');
        email.reportValidity();
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity('Emails must be in the format xxx@xxx.xxx');
        email.reportValidity();
    } else if (email.validity.tooShort) {
        email.setCustomValidity('Emails must be at least 8 characters long.')
        email.reportValidity();
    } else {
        email.setCustomValidity('');
    }
});

country.addEventListener('focusout', () => {
    if (country.validity.valueMissing) {
        country.setCustomValidity('Please enter your country name.');
        country.reportValidity();
    } else if (country.validity.patternMismatch) {
        country.setCustomValidity('Invalid country name.');
        country.reportValidity();
    }  else if (country.validity.tooShort) {
        country.setCustomValidity('Country names must be at least 4 characters long.')
        country.reportValidity();
    } else {
        country.setCustomValidity('');
    }
});

zipCode.addEventListener('focusout', () => {
    if (zipCode.validity.valueMissing) {
        zipCode.setCustomValidity('Zip code field cannot be empty.');
        zipCode.reportValidity();
    } else if (isNaN(zipCode.value)) {
        zipCode.setCustomValidity('Zip codes must only contain numbers.');
        zipCode.reportValidity();
    } else if (zipCode.validity.tooShort) {
        zipCode.setCustomValidity('Too short! Zip codes must be 5 characters long.')
        zipCode.reportValidity();
    } else if (zipCode.validity.tooLong) {
        zipCode.setCustomValidity('Too long! Zip codes must be 5 characters long.')
        zipCode.reportValidity();
    }
      else {
        zipCode.setCustomValidity('');
    }
});

password.addEventListener('focusout', () => {
    if (password.validity.valueMissing) {
        password.setCustomValidity('Please enter your password.');
        password.reportValidity();
    } else if (password.value.length < 8) {
        password.setCustomValidity('Password must contain at least 8 characters.')
        password.reportValidity();
    }
      else if (password.validity.patternMismatch) {
        password.setCustomValidity('Password must contain capital letter, lower case letter and number.');
        password.reportValidity();
    } else {
        password.setCustomValidity('');
    }
});


confirmField.addEventListener('blur', () => {
    if (confirmField.value !== password.value) {
        confirmField.setCustomValidity('Password does not match.');
        confirmField.reportValidity();
    } else {
        password.setCustomValidity('');
    }
})
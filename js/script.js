//Set Focus on First Text Field
document.addEventListener('DOMContentLoaded', () => {
    const firstInput = document.querySelector('#name'); 
    firstInput.focus();
}); 

//Other Job Role Functionality
const otherJobRole = () => {
    const jobRole = document.querySelector('select[id=title]');
    const otherJob = document.querySelector('#other-title');

    //Set Other Job Input to Display None by Default
    otherJob.style.display = 'none';

    jobRole.addEventListener('change', e => {
        e.target.value === 'other' ? otherJob.style.display = 'block' : otherJob.style.display = 'none';
    });
}

otherJobRole();

//T-shirt info section
const design = document.querySelector('#design');
const colorOptions = document.querySelectorAll('#color > option');
const defaultColorOption = document.createElement('option');   

//Set Option to be Hidden
const selectOption = document.querySelector('.select-theme'); 

const notClickable = option => {
    option.hidden = 'true';
}

//Set Color Option Which Appears by Default
const setDefaultColor = () => {
    defaultColorOption.textContent = 'Please select a T-shirt theme'; 
    defaultColorOption.setAttribute('selected', 'selected');
    color.prepend(defaultColorOption); 
}

//Set Color Options and Label to Display None by Default
const colorContainer = document.querySelector('#colors-js-puns');
colorContainer.style.display = 'none';

//Set Condition to Switch Color Option Based on Theme
const switchTheme = (designValue, designContent, colorOption, index) => {
    if(design.value === designValue) {
        if(colorOption.textContent.includes(designContent)) {
            colorOption.removeAttribute('hidden');
            colorOptions[index].setAttribute('selected', 'selected');
        } else {
            colorOption.hidden = 'true'; 
            colorOptions[index].removeAttribute('selected');
        }
    }
}

notClickable(selectOption);
setDefaultColor();

//Switch Color Option Based on Theme
design.addEventListener('change', e => {

    defaultColorOption.remove();
    colorContainer.style.display = 'block';

    for(let i = 0; i < colorOptions.length; i++) {
        let colorOption = colorOptions[i];
        colorOption.hidden = 'true'; 
        switchTheme('js puns','(JS Puns shirt only)',colorOption,0); 
        switchTheme('heart js','(I ♥ JS shirt only)',colorOption,3); 
    }
});

//Register for Activities - Calculate Total Cost 
const activities = document.querySelector('.activities');
const checkboxInputs = document.querySelectorAll('input[type=checkbox]'); 
const h3 = document.createElement('h3'); 
activities.appendChild(h3);

const total = [];
let totalCost = 0; 

const calculateTotalCost = clicked => {
    const clickedCost = parseInt(clicked.getAttribute('data-cost'));
    clicked.checked ? total.push(clickedCost) : total.splice(total.indexOf(clickedCost),1);
    totalCost = eval(total.join('+'));
    if(totalCost === undefined) { totalCost = 0; }
    h3.textContent = `Total Cost: $${totalCost}`;
}

//Register for Activities - Set Restrictions Based on Date and Time Attributes
activities.addEventListener('change', e => {
    const clicked = e.target; 

    for(let i = 0; i < checkboxInputs.length; i++) {
        const checkboxInput = checkboxInputs[i];
        const checkDayAndTime = checkboxInput.getAttribute('data-day-and-time'); 
        const clickedDayAndTime = clicked.getAttribute('data-day-and-time');

        if(clickedDayAndTime === checkDayAndTime && clicked != checkboxInput) {
            clicked.checked ? checkboxInput.disabled = 'true' : checkboxInput.removeAttribute('disabled');
        } 
    }
    calculateTotalCost(clicked);
});

//Payment Section
const creditCard = document.querySelector('#credit-card'); 
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
const selectPayment = document.querySelector('#payment option:nth-child(1)');

//Set Credit Card option to be Selected by Default
const paymentOptionCredit = document.querySelector('#payment option:nth-child(2)');
paymentOptionCredit.setAttribute('selected','selected');

//Set Other Payment Options to Display none by Default
paypal.style.display = 'none';
bitcoin.style.display = 'none';

notClickable(selectPayment);

document.querySelector('#payment').addEventListener('change', e => {

    let paymentOption = e.target; 

    if(paymentOption.value === 'credit card') {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none'; 
    } else if(paymentOption.value === 'paypal') {
        paypal.style.display = 'block';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';         
    } else if(paymentOption.value === 'bitcoin') {
        bitcoin.style.display = 'block';
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
    } 
});

// Form Validation 
const form = document.querySelector('form'); 
const name = document.querySelector('#name'); 
const email = document.querySelector('#mail');

//Declare Error Message Elements
const errorTextName = document.createElement('p');
const errorTextEmail = document.createElement('p');
const errorTextCredit = document.createElement('p');

//Generate Error Message
const errorMessage = (inputType, errorText) => {
    let parentNode = inputType.parentNode;
    parentNode.insertBefore(errorText,inputType);
}

//Name Validation
const nameValidation = () => {
    const nameValue = name.value; 

    if(nameValue.length > 0) {
        name.style.borderColor = 'rgb(111, 157, 220)'; 
        errorTextName.textContent = '';
        return true; 
    } else {
        name.style.borderColor = 'firebrick';
        errorTextName.textContent = 'Please enter a name.';
        return false; 
    }
}

name.addEventListener('keyup', e => {
    nameValidation();
});

errorMessage(name, errorTextName);

// Email Validation 
const emailValidation = () => {
    const emailValue = email.value; 
    const emailSymbol = emailValue.indexOf('@'); 
    const emailDot = emailValue.lastIndexOf('.'); 

    if(emailSymbol > 1 && emailDot > emailSymbol + 1) {
        email.style.borderColor = 'rgb(111, 157, 220)'; 
        errorTextEmail.textContent = '';
        return true; 
    } else {
        email.style.borderColor = 'firebrick';
        errorTextEmail.textContent = 'Please enter a valid email address.';
        return false; 
    }
}

email.addEventListener('keyup', e => {
    emailValidation();
});

errorMessage(email,errorTextEmail); 

// Checkbox Validation 
const checkboxValidation = () => {

    const activitiesLegend = document.querySelector('.activities legend');

        let checked = document.querySelectorAll('input[type=checkbox]:checked').length;

        if(checked > 0) {
            activitiesLegend.textContent = 'Register for Activities';
            activitiesLegend.style.color = 'rgba(6, 49, 68, 0.9)';
            return true;
        } else {
            activitiesLegend.textContent = 'Register for Activities - Check at least one option!';
            activitiesLegend.style.color = 'firebrick';
            return false; 
        }
}

//Credit Card Number Validation
const creditCardNumber = document.querySelector('#cc-num');

const creditValidation = () => {
    const regex = /^[0-9]{13,16}$/;
    const creditValue = creditCardNumber.value;

    if(regex.test(creditValue)) {
        creditCardNumber.style.borderColor = 'rgb(111, 157, 220)'; 
        errorTextCredit.textContent = ''; 
        return true; 
    } else if(creditValue.length === 0) {
        creditCardNumber.style.borderColor = 'firebrick'; 
        errorTextCredit.textContent = 'Please enter a credit card number';    
        return false; 
    } else if(creditValue.length < 13 || creditValue.length > 16) {
        creditCardNumber.style.borderColor = 'firebrick'; 
        errorTextCredit.textContent = 'Please enter a number that is between 13 and 16 digits long';
        return false; 
    } 
}

creditCardNumber.addEventListener('keyup', e => {
    creditValidation();
});

errorMessage(creditCard, errorTextCredit);

//Zip Code Validation 
const zipCode = document.querySelector('#zip');

const zipCodeValidation = () => {
    const regex = /^[0-9]{5}$/; 
    if(regex.test(zipCode.value)) {
        zipCode.style.borderColor = 'rgb(111, 157, 220)'; 
        return true; 
    } else {
        zipCode.style.borderColor = 'firebrick';
        return false; 
    }
}

zipCode.addEventListener('keyup', e => {
    zipCodeValidation();
});

//CVV Validation 
const cvv = document.querySelector('#cvv');

const cvvValidation = () => {
    const regex = /^[0-9]{3}$/;
    if (regex.test(cvv.value)) {
        cvv.style.borderColor = 'rgb(111, 157, 220)';
        return true; 
    } else {
        cvv.style.borderColor = 'firebrick';
        return false; 
    }
}

cvv.addEventListener('keyup', e => {
    cvvValidation();
});

// Event Listener for Submit Button
form.addEventListener('submit', e => {
    if(!nameValidation()) {
        e.preventDefault();
    }
    if(!emailValidation()) {
        e.preventDefault();
    }
    if(!checkboxValidation()) {
        e.preventDefault();
    }
    if(!creditValidation()) {
        e.preventDefault();
    }
    if(!zipCodeValidation()) {
        e.preventDefault();
    }
    if(!cvvValidation()) {
        e.preventDefault();
    }

    if(nameValidation() && emailValidation() && checkboxValidation() && creditValidation() && zipCodeValidation() && cvvValidation()) {
        setTimeout(function(){window.location.reload();},10);
    }

});
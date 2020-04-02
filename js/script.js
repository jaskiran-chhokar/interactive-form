//Set focus on first text field
document.addEventListener('DOMContentLoaded', () => {
    const firstInput = document.querySelector('#name'); 
    firstInput.focus();
}); 

//'Other' job role functionality
const otherJobRole = () => {
    const jobRole = document.querySelector('select[id=title]');
    const otherJob = document.querySelector('#other-title');

    //Set input to display none, by default
    otherJob.style.display = 'none';

    jobRole.addEventListener('change', e => {
        if(e.target.value === 'other') {
            otherJob.style.display = 'block';
        } else {
            otherJob.style.display = 'none';
        }
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
let h3 = document.createElement('h3'); 
activities.appendChild(h3);

const total = [];
let totalCost = 0; 

const calculateTotalCost = clicked => {
    let clickedCost = parseInt(clicked.getAttribute('data-cost'));
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

let errorTextName = document.createElement('p');
let errorTextEmail = document.createElement('p');

const errorMessage = (inputType, errorText) => {
    let parentNode = inputType.parentNode;
    parentNode.insertBefore(errorText,inputType);
}

// Name Validation
errorMessage(name, errorTextName);

const nameValidation = () => {

    let nameValue = name.value; 

    if(nameValue.length > 0) {
        name.style.borderColor = 'rgb(111, 157, 220)'; 
        errorTextName.textContent = '';
    } else {
        name.style.borderColor = 'firebrick';
        errorTextName.textContent = 'Please enter a name.';
    }
}

name.addEventListener('keydown', e => {
    nameValidation();
});

// Email Validation 
errorMessage(email,errorTextEmail); 

const emailValidation = () => {
    
    let emailValue = email.value; 
    let emailSymbol = emailValue.indexOf('@'); 
    let emailDot = emailValue.lastIndexOf('.'); 

    if(emailSymbol > 1 && emailDot > emailSymbol + 1) {
        email.style.borderColor = 'rgb(111, 157, 220)'; 
        errorTextEmail.textContent = '';
    } else {
        email.style.borderColor = 'firebrick';
        errorTextEmail.textContent = 'Please enter a valid email address.';
    }

}

email.addEventListener('keydown', e => {
    emailValidation();
});

// Checkbox Validation 
const checkboxValidation = () => {

    let activitiesLegend = document.querySelector('.activities legend');

    for(let i = 0; i < checkboxInputs.length; i++) {

        if(checkboxInputs[i].checked) {
            activitiesLegend.textContent = 'Register for Activities';
        } else {
            activitiesLegend.textContent = 'Register for Activities - Check at least one option!';
            activitiesLegend.style.color = 'firebrick';
        }
    }
}

//Credit Card Number Validation
const creditValidation = () => {
    let regex = /^[0-9]{13,16}$/;
    let creditCard = document.querySelector('#cc-num');
    if(regex.test(creditCard.value)) {
        creditCard.style.borderColor = 'rgb(111, 157, 220)'; 
    } else {
        creditCard.style.borderColor = 'firebrick'; 
    }
}

//Zip Code Validation 
const zipCodeValidation = () => {
    let regex = /^[0-9]{5}$/; 
    let zipCode = document.querySelector('#zip');
    if(regex.test(zipCode.value)) {
        zipCode.style.borderColor = 'rgb(111, 157, 220)';
    } else {
        zipCode.style.borderColor = 'firebrick'; 
    }
}

//CVV Validation 
const cvvValidation = () => {
    let regex = /^[0-9]{3}$/;
    let cvv = document.querySelector('#cvv');
    if(regex.test(cvv.value)) {
        cvv.style.borderColor = 'rgb(111, 157, 220)';
    } else {
        cvv.style.borderColor = 'firebrick';
    }
}


form.addEventListener('submit', e => {

    nameValidation();
    emailValidation();
    checkboxValidation();

    creditValidation();
    zipCodeValidation();
    cvvValidation();

    e.preventDefault();

});
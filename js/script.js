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

//Set Select Theme to Not be Clickable 
const selectTheme = () => {
    const selectOption = document.querySelector('.select-theme'); 
    selectOption.hidden = 'true';
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

selectTheme();
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
const total = [];
let totalCost = 0; 

const calculateTotalCost = clicked => {
    let clickedCost = parseInt(clicked.getAttribute('data-cost'));

    clicked.checked ? total.push(clickedCost) : total.splice(total.indexOf(clickedCost),1);
    totalCost = eval(total.join('+'));
    if(totalCost === undefined) { totalCost = 0; }
    
    console.log('Total Cost: ' + totalCost);
}

//Register for Activities - Set Restrictions Based on Date and Time Attributes
document.querySelector('.activities').addEventListener('change', e => {
    const checkboxInputs = document.querySelectorAll('input[type=checkbox]'); 
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


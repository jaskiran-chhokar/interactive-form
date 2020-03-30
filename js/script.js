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

selectTheme();

//Create New Color Option Which Appears by Default
defaultColorOption.textContent = 'Please select a T-shirt theme'; 
defaultColorOption.setAttribute('selected', 'selected');
color.prepend(defaultColorOption); 

design.addEventListener('change', e => {

    defaultColorOption.remove();

    for(let i = 0; i < colorOptions.length; i++) {

        let colorOption = colorOptions[i];
        colorOption.hidden = 'true'; 

        switchTheme('js puns','(JS Puns shirt only)',colorOption,0); 

        switchTheme('heart js','(I ♥ JS shirt only)',colorOption,3); 

    }

});

//Switch Color Option Based on Theme 
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






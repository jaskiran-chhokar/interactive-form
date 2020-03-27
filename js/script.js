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
const tShirtInfo = () => { 

    const design = document.querySelector('#design'); 
    const color = document.querySelector('#color');
    const colorOptions = document.querySelectorAll('#color > option');

    const selectOption = document.querySelector('.select-theme'); 
    selectOption.hidden = 'true';
    
    //Create New Color Option Which Appears by Default
    const defaultColorOption = document.createElement('option'); 
    defaultColorOption.textContent = 'Please select a T-shirt theme'; 
    color.prepend(defaultColorOption);
    defaultColorOption.setAttribute('selected', 'selected'); 

    design.addEventListener('change', e => {

        defaultColorOption.remove();

        for(let i = 0; i < colorOptions.length; i++) {

            let colorOption = colorOptions[i];
            
            colorOption.hidden = 'true'; 

            if(design.value === 'js puns') {

                if(colorOption.textContent.includes('(JS Puns shirt only)')) {
                    colorOption.removeAttribute('hidden'); 
                    colorOptions[0].setAttribute('selected', 'selected');

                } else {
                    colorOption.hidden = 'true'; 
                    colorOptions[0].removeAttribute('selected');
                }

            } 
        
            if(design.value === 'heart js') {

                if(colorOption.textContent.includes('(I ♥ JS shirt only)')) {
                    colorOption.removeAttribute('hidden');
                    colorOptions[3].setAttribute('selected', 'selected');
                } else {
                    colorOption.hidden = 'true'; 
                    colorOptions[3].removeAttribute('selected');
                }

            }
        }

    });
}

tShirtInfo();
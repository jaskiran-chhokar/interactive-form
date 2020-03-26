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
    // const selectTheme = document.querySelector('.select-theme');
    // const themeJsPuns = document.querySelector('.js-puns-theme');
    // const themeLoveJs = document.querySelector('.heart-js-theme');
    const color = document.querySelector('#color');
    const colorOptions = document.querySelectorAll('#color > option');
    


       // colorOptions[i].style.display = 'none';

        color.addEventListener('change', e => {

            for(let i = 0; i < colorOptions.length; i++) {

                if(e.target.className === 'js-puns-theme') {

                         console.log('dfasfasdf');

            //     if(colorOptions[i].textContent.includes('(JS Puns shirt only)')) {
            //         colorOptions[i].style.display = 'block';
            //         console.log(colorOptions[i]);
            //    }        

                } 

            }

        });




        // if(themeLoveJs.selected = 'true') {
        //     if(colorOptions[i].textContent.includes('(I &#9829; JS shirt only)')) {
        //         colorOptions[i].style.display = 'block';
        //    }
        // }

}

tShirtInfo();


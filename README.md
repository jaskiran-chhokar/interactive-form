# Interactive Form 

Used JavaScript to add interactivity and enhance usability for a basic web form. The JavaScript makes sure to confirm that each field contains the correct information and displays an error indication, when it does not. 

**Live Version:** https://jaskiran-chhokar.github.io/interactive-form/



## Project Requirements 

### Name Field 

- Set focus on the first text field** (When the page first loads, the first text field should be in focus by default)

### ”Job Role” section

- Include a text field that will be revealed when the "Other" option is selected** from the "Job Role" drop down menu. 

### ”T-Shirt Info” section

- When a new theme is selected from the "Design" menu, both the "Color" field and drop down menu is updated.

### ”Register for Activities” section

- Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.

- When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled. 

- As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.

### "Payment Info" section 
- Display payment sections based on the payment option chosen in the select menu.



## Form Validation Requirements 
If any of the following validation errors exist, prevent the user from submitting the form:

- Name field can't be blank.
- Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one).
- User must select at least one checkbox under the "Register for Activities" section of the form.
- If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.
- Credit Card field should only accept a number between 13 and 16 digits.
- The Zip Code field should accept a 5-digit number.
- The CVV should only accept a number that is exactly 3 digits long.



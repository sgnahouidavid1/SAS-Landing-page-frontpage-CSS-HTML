/* Here we will have some javascript code with limit comment and documentation 
because I'm stil haven't learn that much javascript at this moment, but this code will be 
used for future reference. */

// FAQ Accordion Code
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content')
    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        if (!groupHeader) return;
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toogle icon between plus and minus sign
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body (subtext answer to the FAQ questions).
        groupBody.classList.toggle('open');

        // Close other open FAQ bodies (subtext answer to the FAQ questions).
        const otherGroups = faqContainer.querySelectorAll('.faq-group'); /* this 
        give us a array of all the groups of FAQ question and answers.
        use "console.log(otherGroups)" to view the array. */
        // Looping through the FAQ groups 
        otherGroups.forEach((otherGroup) => {
            /* An if statement the make sure all the bodies showing subtext answer
            to the FAQ questions are close except the one that is clicked on. */ 
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }

        });
    });
});
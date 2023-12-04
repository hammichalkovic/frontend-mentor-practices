let signUpSection = document.querySelector('.sign-up'),
    successMessage = document.querySelector('.success-message'),
    confirmBtn = document.getElementById('sign-up-confirm'),
    returnBtn = document.getElementById('success-return'),
    emailInput = document.getElementById('email'),
    form = document.getElementById('form'),
    formChildren = form.querySelectorAll('.form-child'),
    emailRegex = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$',
    errorNtf = document.getElementById('error');

function toUndoErrorNotification() {
    emailInput.classList.remove();
    errorNtf.classList.add('hidden');
    emailInput.classList.remove('border-tomato','animate-bounce', 'bg-tomato-ht', 'text-tomato', 'placeholder:text-tomato', 'focus-within:outline-tomato');
    emailInput.classList.add('focus-within:outline-charcoal-grey')
}

confirmBtn.addEventListener('click', (e) => {
    if( !emailInput.value.match(emailRegex) || emailInput.value == '') {
        errorNtf.classList.remove('hidden');
        emailInput.classList.add('border-tomato', 'animate-bounce', 'bg-tomato-ht', 'text-tomato', 'placeholder:text-tomato', 'focus-within:outline-tomato');
        emailInput.classList.remove('focus-within:outline-charcoal-grey')
        setTimeout(toUndoErrorNotification, 1500);
    };
}); 
    


confirmBtn.addEventListener('click', (e) => {
// to edit error notification event style next time
    
    e.preventDefault();
    
    
    if (emailInput.value.match(emailRegex)) {
         
         signUpSection.classList.add('hidden');
        successMessage.classList.add('flex');
        successMessage.classList.remove('hidden');  
    } 

    
        // return valid;   
        
        
        
        // document.reload();
    

});



returnBtn.addEventListener('click', () => {
    signUpSection.classList.remove('hidden');
    successMessage.classList.add('hidden'); 
    successMessage.classList.remove('flex');
    emailInput.value = ''; 
});


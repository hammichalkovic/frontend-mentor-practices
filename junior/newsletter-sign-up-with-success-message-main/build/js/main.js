let signUpSection = document.querySelector('.sign-up'),
    successMessage = document.querySelector('.success-message'),
    confirmBtn = document.getElementById('sign-up-confirm'),
    returnBtn = document.getElementById('success-return'),
    emailInput = document.getElementById('email'),
    form = document.getElementById('form'),
    formChildren = form.querySelectorAll('.form-child'),
    emailRegex = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$',
    errorNtf = document.getElementById('error');





confirmBtn.addEventListener('click', (e) => {
// to edit error notification event style next time
    e.preventDefault();
    errorNtf.classList.remove('hidden');
    emailInput.classList.add('border-tomato');
    setTimeout(emailInput.classList.remove('border-tomato'), 2000);
    setTimeout(errorNtf.classList.add('hidden'), 2000);


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


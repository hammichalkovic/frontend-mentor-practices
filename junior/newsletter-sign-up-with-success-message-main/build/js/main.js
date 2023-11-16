let signUpSection = document.querySelector('.sign-up'),
    successMessage = document.querySelector('.success-message'),
    confirmBtn = document.getElementById('sign-up-confirm'),
    returnBtn = document.getElementById('success-return'),
    emailInput = document.getElementById('email'),
    form = document.getElementById('form'),
    formChildren = form.querySelectorAll('.form-child'),
    emailRegex = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'; 


confirmBtn.addEventListener('click', () => {
    successMessage.classList.remove('hidden');  
    signUpSection.classList.add('hidden');
    
});

returnBtn.addEventListener('click', () => {
    signUpSection.classList.remove('hidden');
    successMessage.classList.add('hidden'); 
    emailInput.value = ''; 
});


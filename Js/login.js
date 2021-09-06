function validateLoginForm(){
    let password = document.login_form.pwd.value;
    if(password.length < 8)
    {
        alert('Password must contain atleast 8 characters');
        return false;
    }
}
function validateRegistrationForm(){
    let password = document.registration_form.pwd.value;
    if(password.length < 8)
    {
        alert('Password must contain atleast 8 characters');
        return false;
    }
    let confPassword = document.registration_form.cpwd.value;
    if(confPassword != password)
    {
        alert('Both passwords must be same. Please enter again.');
        return false;
    }
    if(!document.registration_form.terms.checked)
    {
        alert('You must agree to the terms first.');
        return false;
    }
}
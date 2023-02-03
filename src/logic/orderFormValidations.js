
const regexEmail = /^[.a-zA-Z0-9_-]+@(hotmail|yahoo|gmail|outlook)\.(?:com|cl|net|es|com)(\.ar|\.mx|\.us|\.co|\.cr|\.pe|\.uy|\.ve|\.ec|\.cl|\.bo|\.br)?$/gim
const regexAddress = /^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$/gs
const regCity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/gim
export const validationsForm = (form) => {
    let errors = {};
    if (!form.email.trim())errors.email = "You must fill this field";
    if(!regexEmail.test(form.email.trim())) errors.email = 'Please enter a valid email address';

    if(!(regexAddress.test(form.address.trim()))) errors.address = 'Please enter a valid street address';
    if(!form.address.trim()) errors.address = 'You mus fill this field';
    
    if(!(regCity.test(form.city.trim()))) errors.city = 'Please enter a valid city';
    if(!form.city.trim()) errors.city = 'You mus fill this field';

    if(!(regCity.test(form.state.trim()))) errors.state = 'Please enter a valid state';
    if(!form.state.trim()) errors.state = 'You mus fill this field';
    return errors;
  };
  
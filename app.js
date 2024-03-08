// function validateForm(event) {
//   event.prevenDefault();
//   // reset pre.... error mess
// }

// const names = document.getElementById('name').value;
// const email = document.getElementById('email').value;
// const number = document.getElementById('number').value;
// const password = document.getElementById('password').value;
// const confirmPassword = document.getElementById('confirmPassword').value;


// // name validation
// if (names.trim() === ' ' || names.length < 5) {
//   document.getElementById('nameError').innerText = 'Name is required';
//   return;
// }

// //email validation              --------------------->RegExp for a pattren
// if (email.trim() === '') {
//   document.getElementById('emailError').innerText = 'Email is required';
//   return;
// }
// //num validation
// if (number.trim() === '' || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/mg) {
//   document.getElementById('emailError').innerText = 'Email is required';
//   return;
// }
// if (password.trim() === '') {
//   document.getElementById('passwordError').innerText = 'psss is required';
//   return;
// }
// //if all vali
// document.getElementById('myForm').submit();




function validateForm(event) {

  event.preventDefault();

  // Reset previous error messages
  resetErrors();

  // Get form value



  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;




  // Name validation (required)

  if (name.trim() === '' || name.length < 5) {
    document.getElementById('nameError').innerText = 'Name is required';
    return;
  }

  // Email validation (required)
  if (email.trim() === '') {
    document.getElementById('emailError').innerText = 'Email is required';
    return;
  }

  // Number validation (required)
  if (number.trim() === '' || !/^\d{10}$/.test(number)) {
    document.getElementById('numberError').innerText = 'Number should be greater than 10 digits';
    return;
  }

  // Password validation (required)
  if (password.trim() === '' || password.length < 5) {
    document.getElementById('passwordError').innerText = 'Password must be greater than 5 digits !!';
    return;
  }

  // Confirm Password validation (required)
  if (confirmPassword.trim() === '') {
    document.getElementById('confirmPasswordError').innerText = 'Confirm Password is required';
    return;
  }

  // If all validations pass, submit the form (you can replace this with your actual form submission logic)
  document.getElementById('myForm').submit();
}

function resetErrors() {
  // Reset all error messages
  const errorElements = document.getElementsByClassName('error');
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = '';
  }

}
const form = document.getElementById('contactForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneInput = document.getElementById('phone'); 
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError'); 
const messageError = document.getElementById('messageError');



function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function isValidPhone(phone) {
  return /^\+?\d{10,15}$/.test(phone);
}



function validateForm() {
  let isValid = true;



  if (fullName.value.trim().length < 3) {
    nameError.textContent = "Full Name must be at least 3 characters.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }



  if (!isValidEmail(email.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  

  const phone = phoneInput.value.trim();
  if (phone && !isValidPhone(phone)) {
    phoneError.textContent = "Enter a valid phone number.";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

 

  const msg = message.value.trim();
  if (msg.length === 0) {
    messageError.textContent = "Message is required.";
    isValid = false;
  } else if (msg.length > 500) {
    messageError.textContent = "Message cannot exceed 500 characters.";
    isValid = false;
  } else {
    messageError.textContent = "";
  }


  submitBtn.disabled = !isValid;
  return isValid;
}




[fullName, email, phoneInput, message].forEach(input => {
  input.addEventListener('input', validateForm);
});



form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validateForm()) return; 

  submitBtn.textContent = "Submitting...";
  submitBtn.disabled = true;


  setTimeout(() => {
    alert("Form submitted successfully!");
    form.reset();
    submitBtn.textContent = "Submit";
    validateForm(); 
  }, 1500);
});

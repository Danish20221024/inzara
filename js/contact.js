let form = document.querySelector("#form");
let telephoneNumber = document.querySelector("#telephoneInput");
let telephoneFormatError = document.querySelector("#telephoneFormatError");
let email = document.querySelector("#email");
let emailFormatError = document.querySelector("#emailFormatError");
let confirmationEmail = document.querySelector("#confirmationEmail");
let emailConfirmationError = document.querySelector("#emailConfirmationError");
let btnsubmit = document.querySelector("#submit");
let validation_message = document.querySelector("#validation-message");
let inputPassword = document.querySelector("input#password");
let password_format = document.querySelector("#password_format");
let btnOn = document.querySelector("#on");
let btnOff = document.querySelector("#off");
let btnOn1 = document.querySelector("#on1");
let btnOff1 = document.querySelector("#off1");

// Regex
const phoneNumberRegex = /^0[167][1-9]{8}$/;
const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

// numero de telephone
telephoneNumber.addEventListener("input", function () {
  // console.log(telephoneNumber);
  if (telephoneNumber.value.match(phoneNumberRegex) || !telephoneNumber.value) {
    // console.log("BON FORMAT !");
    telephoneNumber.style.border = "0px";
    telephoneFormatError.style.display = "none";
  } else {
    telephoneNumber.style.border = "1px solid red";
    // console.log("C'est pas bon!");
    telephoneFormatError.style.display = "block";
  }
});

// l'adresse mail
email.addEventListener("input", function () {
  if (email.value.match(emailRegex)) {
    console.log("BON FORMAT !");
    email.style.border = "0px";
    emailFormatError.style.display = "none";
  } else {
    email.style.border = "1px solid red";
    console.log("C'est pas bon!");
    emailFormatError.style.display = "block";
  }
});

//  confirmation de mail
confirmationEmail.addEventListener("input", function () {
  if (confirmationEmail.value === email.value) {
    console.log("match mail");
    emailConfirmationError.style.display = "none";
  } else {
    console.log("C'est pas bon!");
    emailConfirmationError.style.display = "block";
  }
});

// button valider
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let error = false;
  if (telephoneNumber.value && !telephoneNumber.value.match(phoneNumberRegex)) {
    telephoneFormatError.style.display = "block";
    error = true;
  }
  if (!email.value.match(emailRegex)) {
    emailFormatError.style.display = "block";
    error = true;
  }

  if (email.value !== confirmationEmail.value) {
    console.log("les mails ne correspondent pas");
    emailConfirmationError.style.display = "block";
    error = true;
  }

  // s'il y a pas d'erreur,  "votre mail a été bien envoyer"
  if (!error) {
    console.log("Votre message a été bien envoyé");
    validation_message.style.display = "block";
    form.reset();
  }
});

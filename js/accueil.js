// // popup menu burger
const burgerButton = document.querySelector("#menu");
const closeButton = document.querySelector("#buttonClose");
const popup = document.querySelector("#menu_popup");

if (burgerButton && closeButton && popup) {
  // Ouvrir le menu
  burgerButton.addEventListener("click", () => {
    popup.classList.add("active");
  });

  // Fermer le menu
  closeButton.addEventListener("click", () => {
    popup.classList.remove("active");

  });

  // Fermer si on clique en dehors du menu
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
}
// // popup display article
const buttons = document.querySelectorAll(".categories_list");
const sections = document.querySelectorAll(".collection_section");

  document.addEventListener("DOMContentLoaded", () => {
    // Au chargement : tout visible
    sections.forEach(section => {
      section.style.display = "block";
    });

    // Gestion du clic sur chaque bouton
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const className = button.classList[1];

        // Si on clique sur "all", tout réapparaît
        if (className === "all") {
          sections.forEach(section => {
            section.style.display = "block";
          });
          return;
        }

        // Sinon, on cache tout d'abord
        sections.forEach(section => {
          section.style.display = "none";
        });

        // Et on affiche seulement la bonne section
        if (className === "man-list") {
          document.querySelector(".homme").style.display = "block";
        } else if (className === "woman-list") {
          document.querySelector(".femme").style.display = "block";
        } else if (className === "childre-list") {
          document.querySelector(".enfant").style.display = "block";
        }
      });
    });
  });

//   //popup display article homme 
document.addEventListener("DOMContentLoaded", () => {
  const popupArticleDisplay = document.querySelector(".menu_article_pop");
  const articleCloseButton = document.querySelector("#article_Button_Close");
  const hommeImages = document.querySelectorAll(".homme .display_card img");
const popupImage = popupArticleDisplay.querySelector(".article_display img");

 // Ouvrir la popup au clic sur une image de la section Homme
  hommeImages.forEach(img => {
    img.addEventListener("click", () => {
      // on change la source de l'image dans la popup
      popupImage.src = img.src;
      popupImage.alt = img.alt;

      // afficher la popup
      popupArticleDisplay.style.display = "flex";
      popupArticleDisplay.style.transform = "translateY(0)";
      popupArticleDisplay.style.opacity = "1";
    });
  });

  // Fermer la popup via le bouton X
  articleCloseButton.addEventListener("click", () => {
    popupArticleDisplay.style.display = "none";
  });
});

// formulaire de contacte
const contactLink = document.querySelector("#contactLink");
const mainContent = document.querySelector("#mainContent");
const contactContainer = document.querySelector("#contactContainer");

// Quand on clique sur "Contact"
contactLink.addEventListener("click", function (e) {
  e.preventDefault(); // Empêche le rechargement

  // Cache le contenu principal
  mainContent.style.display = "none";

  // Charge la page contact.html dynamiquement
  fetch("contact.html")
    .then((response) => response.text())
    .then((html) => {
      // Insère le contenu du formulaire dans la page actuelle
      contactContainer.innerHTML = html;

      // Optionnel : fait défiler vers le formulaire
      window.scrollTo({ top: 0, behavior: "smooth" });
    })
    .catch((err) => {
      console.error("Erreur lors du chargement du formulaire :", err);
    });
});

// // formulaire de contact
// let form = document.querySelector("#form");
// let postalCode = document.querySelector("#postalCode");
// let postalCodeError = document.querySelector("#postalCodeError");
// let telephoneNumber = document.querySelector("#telephoneInput");
// let telephoneFormatError = document.querySelector("#telephoneFormatError");
// let email = document.querySelector("#email");
// let emailFormatError = document.querySelector("#emailFormatError");
// let confirmationEmail = document.querySelector("#confirmationEmail");
// let emailConfirmationError = document.querySelector("#emailConfirmationError");
// let motDePasse = document.querySelector("#password");
// let passWordFormatError = document.querySelector("#passwordFormatError");
// let passWordConfirmation = document.querySelector("#confirmationPassword");
// let passWordError = document.querySelector("#passWordError");
// let btnsubmit = document.querySelector("#submit");
// let validation_popup = document.querySelector("#validation_popup");
// let inputPassword = document.querySelector("input#password");
// let password_format = document.querySelector("#password_format");
// let btnOn = document.querySelector("#on");
// let btnOff = document.querySelector("#off");
// let btnOn1 = document.querySelector("#on1");
// let btnOff1 = document.querySelector("#off1");

// // Regex (à chercher sur internet)
// const postalCodeRegex = /^[0-9]{5}$/;
// const phoneNumberRegex =
//   /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/;
// const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
// const motDePasseRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
// // //     ^ : Indique le début de la chaîne.
// //   (?=.*[a-z]) : Au moins une lettre minuscule.
// //   (?=.*[A-Z]) : Au moins une lettre majuscule.
// //   (?=.*\d) : Au moins un chiffre.
// //   (?=.*[@$!%*?&]) : Au moins un caractère spécial parmi @$!%*?&.
// //   [A-Za-z\d@$!%*?&]{8,} : La chaîne doit contenir au moins 8 caractères avec les caractères spécifiés.
// //   $ : Indique la fin de la chaîne.

// // Code postal
// postalCode.addEventListener("input", function () {
//   if (postalCode.value.match(postalCodeRegex)) {
//     console.log("C'est bon !");
//     postalCode.style.border = "0px";
//     postalCodeError.style.display = "none";
//   } else {
//     postalCodeError.style.display = "block";
//     postalCode.style.border = "1px solid red";
//     console.log("C'est pas bon!");
//   }
// });

// // numero de telephone
// telephoneNumber.addEventListener("input", function () {
//   if (telephoneNumber.value.match(phoneNumberRegex)) {
//     console.log("BON FORMAT !");
//     telephoneNumber.style.border = "0px";
//     telephoneFormatError.style.display = "none";
//   } else {
//     telephoneNumber.style.border = "1px solid red";
//     console.log("C'est pas bon!");
//     telephoneFormatError.style.display = "block";
//   }
// });

// // l'adresse mail
// email.addEventListener("input", function () {
//   if (email.value.match(emailRegex)) {
//     console.log("BON FORMAT !");
//     email.style.border = "0px";
//     emailFormatError.style.display = "none";
//   } else {
//     email.style.border = "1px solid red";
//     console.log("C'est pas bon!");
//     emailFormatError.style.display = "block";
//   }
// });

// //  confirmation de mail
// confirmationEmail.addEventListener("input", function () {
//   if (confirmationEmail.value === email.value) {
//     console.log("match mail");
//     confirmationEmail.style.border = "0px";
//     emailConfirmationError.style.display = "none";
//   } else {
//     confirmationEmail.style.border = "1px solid red";
//     console.log("C'est pas bon!");
//     emailConfirmationError.style.display = "block";
//   }
// });

// // mot de passe
// motDePasse.addEventListener("input", function () {
//   console.log("motDePasse", motDePasse);
//   if (motDePasse.value.match(motDePasseRegex)) {
//     console.log("BON FORMAT !");
//     motDePasse.style.border = "0px";
//     passWordFormatError.style.display = "none";
//   } else {
//     motDePasse.style.border = "1px solid red";
//     console.log("C'est pas bon!");
//     passWordFormatError.style.display = "block";
//   }
// });

// // confirmation de mot de passe
// passWordConfirmation.addEventListener("input", function () {
//   if (passWordConfirmation.value === motDePasse.value) {
//     console.log("BON FORMAT !");
//     motDePasse.style.border = "0px";
//     passWordError.style.display = "none";
//   } else {
//     passWordConfirmation.style.border = "1px solid red";
//     console.log("C'est pas bon!");
//     passWordError.style.display = "block";
//   }
// });
// // button valider

// btnsubmit.addEventListener("click", function () {
//   error = false;
//   if (!postalCode.value.match(postalCodeRegex)) {
//     postalCodeError.style.display = "block";
//     error = true;
//   }
//   if (!telephoneNumber.value.match(phoneNumberRegex)) {
//     telephoneFormatError.style.display = "block";
//     error = true;
//   }
//   if (!email.value.match(emailRegex)) {
//     emailFormatError.style.display = "block";
//     error = true;
//   }
//   if (!motDePasse.value.match(motDePasseRegex)) {
//     passWordFormatError.style.display = "block";
//     error = true;
//   }

//   if (email.value !== confirmationEmail.value) {
//     console.log("les mails ne correspondent pas");
//     emailConfirmationError.style.display = "block";
//     error = true;
//   }
//   if (motDePasse.value !== confirmationPassword.value) {
//     console.log("les mots de passe ne correspond pas");
//     passWordError.style.display = "block";
//     error = true;
//   }
//   // "!"= s'il y a pas d'erreur, affichez "votre mail a été bien envoyer"
//   if (!error) {
//     console.log("Votre mail a été bien envoyé");
//     validation_popup.style.display = "block";
//   }
// });
// // let validation_popup = document.querySelector("#validation_popup");
// // btnsubmit.addEventListener("click", function () {
// //   console.log("Click sur Fermer");
// //   // validation_popup.style.display = "block";
// //   form.style.display = "none";
// // });

// inputPassword.addEventListener("mouseover", function () {
//   password_format.style.display = "block";
//   // btnOn1.style.display = "none";
//   // btnOff1.style.display = "none";
// });
// inputPassword.addEventListener("mouseout", function () {
//   password_format.style.display = "none";
//   //   btnOn1.style.display = "block";
//   //   btnOff1.style.display = "block";
// });
// // button mot de passe
// btnOn.addEventListener("click", function () {
//   console.log("click");
//   btnOn.style.display = "none";
//   btnOff.style.display = "block";
//   motDePasse.type = "text";
// });
// btnOff.addEventListener("click", function () {
//   btnOff.style.display = "none";
//   btnOn.style.display = "block";
//   motDePasse.type = "password";
// });

// // button confimation de mot de passe
// btnOn1.addEventListener("click", function () {
//   console.log("click");
//   btnOn1.style.display = "none";
//   btnOff1.style.display = "block";
//   passWordConfirmation.type = "text";
// });
// btnOff1.addEventListener("click", function () {
//   btnOff1.style.display = "none";
//   btnOn1.style.display = "block";
//   passWordConfirmation.type = "password";
// });

// // Apparition de formulaire de contacte
// let contactBtn = document.querySelector(".contact"); // le bouton "Contact"
// let contactForm = document.querySelector("#form");    // le formulaire

// if (contactBtn && contactForm) {
//   // Cacher le formulaire au chargement
//   contactForm.style.display = "none";

//   // Afficher ou cacher le formulaire quand on clique sur "Contact"
//   contactBtn.addEventListener("click", function () {
//     if (contactForm.style.display === "none" || contactForm.style.display === "") {
//       contactForm.style.display = "block";
//     } else {
//       contactForm.style.display = "none";
//     }
//   });
  
// }

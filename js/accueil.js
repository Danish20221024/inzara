// Exécute le JS que qd le HTML (DOM) est chargé
document.addEventListener("DOMContentLoaded", () => {
  // // popup display article
  const buttons = document.querySelectorAll(".categories_list");
  const sections = document.querySelectorAll(".collection_section");
  const sectionHomme = document.querySelector(".homme");
  const sectionFemme = document.querySelector(".femme");
  const sectionEnfant = document.querySelector(".enfant");
  const btnAll = document.querySelector(".all");
  // Gestion du clic sur chaque bouton
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // className est la 2ème classe de button
      const className = button.classList[1];

      // on cache tout d'abord
      sections.forEach((section) => {
        section.style.display = "none";
      });

      // Et on affiche seulement la bonne section
      if (className === "man-list") {
        sectionHomme.style.display = "block";
        btnAll.style.display = "block";
      } else if (className === "woman-list") {
        sectionFemme.style.display = "block";
        btnAll.style.display = "block";
      } else if (className === "children-list") {
        sectionEnfant.style.display = "block";
        btnAll.style.display = "block";
      } else if (className === "all") {
        // si c'est le bouton all, on affiche tout
        sections.forEach((section) => {
          section.style.display = "block";
        });
        btnAll.style.display = "none";
      }
    });
  });

  //   //popup display article homme
  const popupArticleDisplay = document.querySelector("#menu-article-popup");
  const articleCloseButton = document.querySelector("#article-display button");
  const smallImages = document.querySelectorAll(".display_card img");
  const popupImage = popupArticleDisplay.querySelector("#article-display img");
  const popupTitle = document.querySelector("#article-title");
  const popupPrice = document.querySelector("#article-price");
  const popupDescription = document.querySelector("#article-description");

  // Ouvrir la popup au clic sur une image de la section Homme
  smallImages.forEach((img) => {
    img.addEventListener("click", () => {
      // on change la source de l'image dans la popup
      popupImage.src = img.src;
      popupImage.alt = img.alt;
      popupTitle.textContent = img.dataset.title;
      popupPrice.textContent = img.dataset.price;
      popupDescription.textContent = img.dataset.description;

      // afficher la popup
      popupArticleDisplay.style.display = "flex";
    });
  });

  // Fermer la popup via le bouton X
  articleCloseButton.addEventListener("click", () => {
    popupArticleDisplay.style.display = "none";
  });
});

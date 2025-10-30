// Exécute le JS que qd le HTML (DOM) est chargé
document.addEventListener("DOMContentLoaded", () => {

  // // popup display article
  const buttons = document.querySelectorAll(".categories_list");
  const sections = document.querySelectorAll(".collection_section");

  // Au chargement : tout visible
  sections.forEach((section) => {
    section.style.display = "block";
  });

  // Gestion du clic sur chaque bouton
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const className = button.classList[1];

      // Si on clique sur "all", tout réapparaît
      if (className === "all") {
        sections.forEach((section) => {
          section.style.display = "block";
        });
        return;
      }

      // Sinon, on cache tout d'abord
      sections.forEach((section) => {
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

  //   //popup display article homme
  const popupArticleDisplay = document.querySelector("#menu-article-popup");
  const articleCloseButton = document.querySelector("#article-display button");
  const hommeImages = document.querySelectorAll(".homme .display_card img");
  const popupImage = popupArticleDisplay.querySelector("#article-display img");

  // Ouvrir la popup au clic sur une image de la section Homme
  hommeImages.forEach((img) => {
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

 
  const categories = document.querySelectorAll(
    ".man-list, .woman-list, .childre-list"
  );
  const closeBtn = document.querySelector(".all");

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      closeBtn.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
  });
});

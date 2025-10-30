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

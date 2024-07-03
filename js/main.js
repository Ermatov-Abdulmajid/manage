document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const toggleIcon = document.getElementById("toggle-icon");
  let showMenu = false;

  document.getElementById("toggle").addEventListener("click", () => {
    showMenu = !showMenu;
    toggleIcon.src = showMenu
      ? "images/icon-close.svg"
      : "images/icon-hamburger.svg";
    menu.classList.toggle("open-menu", showMenu);
  });

  let cardIndex = 1;
  const cards = document.getElementsByClassName("testimonials__item");
  const dots = document.getElementsByClassName("dot");

  const showCards = (n) => {
    cardIndex = (n > cards.length ? 1 : n < 1 ? cards.length : n) - 1;
    Array.from(cards).forEach((card, i) => {
      card.classList.toggle("testimonials__item-active", i === cardIndex);
      dots[i].classList.toggle("active", i === cardIndex);
    });
  };

  showCards(cardIndex);
});

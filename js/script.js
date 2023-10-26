    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector(".open-menu");
    const closeMenuBtn = document.querySelector(".close-menu");
    const headerOverlay = document.querySelector(".header.show-mobile-menu::before");

    // Toggle mobile menu on hamburger button click
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    // Close mobile menu on close button click
    closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
    // Close mobile menu on close button click
    headerOverlay.addEventListener("click", () => hamburgerBtn.click());



    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const searchForm = document.querySelector('.search-form');
const shoppingCart = document.querySelector('.shopping-cart');
const loginForm = document.querySelector('.login-form');
const navbar = document.querySelector('.navbar');

function toggleActive(element) {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');

  if (element) {
    element.classList.toggle('active');
  }
}

document.querySelector('#search-btn').onclick = () => {
  toggleActive(searchForm);
}

document.querySelector('#cart-btn').onclick = () => {
  toggleActive(shoppingCart);
}

document.querySelector('#login-btn').onclick = () => {
  toggleActive(loginForm);
}

document.querySelector('#menu-btn').onclick = () => {
  toggleActive(navbar);
}

window.onscroll = () => {
  toggleActive(null);
}

const swiperConfig = {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

new Swiper(".product-slider", swiperConfig);
new Swiper(".review-slider", swiperConfig);

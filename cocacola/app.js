var menuButton = document.querySelector("header>button");
const scrollToTopButton = document.querySelector("#scroll-to-top")

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({top:0, behavior: 'smooth'})
})

// menuButton.addEventListener("click, menuOpenen");

// openButton.addEventListener("click", openMenu);


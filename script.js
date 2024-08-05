const navbarLink = document.querySelector(".navbar .link");
const toggleMenuBtn = document.querySelector(".navbar .toggle-menu");
const toggleMenuIcon = document.querySelector(".navbar .toggle-menu i");
const navbarLinkItems = document.querySelectorAll(".navbar .links li a");
// TOGGLE LINK FUNCTION
const toggleLink = () => {
    navbarLink.classList.toggle('show');
    toggleMenuIcon.classList.toggle('fa-xmark');
};
// toggleMenuBtn CLICK EVENT
toggleMenuBtn.addEventListener("click", toggleLink);

//navbar link item event
navbarLinkItems.forEach((link) => {
    link.addEventListener("click", toggleLink);
});

// INITIALIZE AOS
AOS.init();
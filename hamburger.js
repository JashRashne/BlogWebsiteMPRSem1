hamburger = document.querySelector('.hamburger-menu');
hamburgerScreen = document.querySelector('.hamburger-screen-container');
hamburgerCancel = document.querySelector('.hamburger-cancel-img');



hamburger.addEventListener("click" , () => {
    hamburgerScreen.classList.toggle("active");
})

hamburgerCancel.addEventListener("click" , () => {
    hamburgerScreen.classList.remove("active");
})
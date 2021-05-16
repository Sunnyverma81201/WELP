var navbar = document.getElementById("navbar");
var menuHamburger= document.getElementById("ham");
var navigationButton = document.getElementsByClassName("nav_button");
var sticky = navbar.offsetTop;

// code for sticky navigation bar
window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// for testing purposes only
window.onload = () => {
  
  document.getElementById("myForm").style.display = "block";
}

// for hamburger menu

menuHamburger.addEventListener('click',() => {
  if(navbar.className === "main_navigation"){
    navbar.classList.add("responsive");
  } else {
    navbar.classList.remove("responsive");
  }
});

// for popup form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

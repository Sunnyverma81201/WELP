// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyB8qG3xFLp4wWCd5cQU-po2DT6WNdy6bCE",
//   authDomain: "welp-bba1e.firebaseapp.com",
//   databaseURL: "https://welp-bba1e-default-rtdb.firebaseio.com",
//   projectId: "welp-bba1e",
//   storageBucket: "welp-bba1e.appspot.com",
//   messagingSenderId: "168708457434",
//   appId: "1:168708457434:web:fedd854e09d6525c0d36e3",
//   measurementId: "G-JSF4XKPM86",
// });
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

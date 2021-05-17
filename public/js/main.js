var navbar = document.getElementById("navbar");
var menuHamburger = document.getElementById("ham");
// var navigationButton = document.getElementsByClassName("nav_button");
var sticky = navbar.offsetTop;
  
// var locationObject = locationFile
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
  // var countySel = document.getElementById("countySel"),
  //     districtSel = document.getElementById("districtSel");
  // for (var country in locationObject) {
  //   countySel.options[countySel.options.length] = new Option(country, country);
  // }
  // countySel.onchange = function () {
  //   districtSel.length = 1; // remove all options bar first
  //   if (this.selectedIndex < 1) return; // done
  //   var district = locationObject[countySel.value];
  //   for (var i = 0; i < district.length; i++) {
  //     districtSel.options[districtSel.options.length] = new Option(
  //       district[i],
  //       district[i]
  //     );
  //   }
  // };

  document.getElementById("myForm").style.display = "block";
};

// for hamburger menu

menuHamburger.addEventListener("click", () => {
  if (navbar.className === "main_navigation") {
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

// for location selectors

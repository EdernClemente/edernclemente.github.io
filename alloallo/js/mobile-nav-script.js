
function mobileNavOpen() {
  var x = document.getElementById("openMobileNav");
  if (x.className === "mobile_nav_hidden") {
    x.className = "mobile_nav";
  } else {
    x.className = "mobile_nav_hidden";
  }
}

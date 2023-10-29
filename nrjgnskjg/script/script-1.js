const toTopBtn = document.querySelector("#toTop");
// search

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// 
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("scroll-up").style.display = "block";
  } else {
    document.getElementById("navbar").style.top = "-60px";
    document.getElementById("scroll-up").style.display = "none";
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


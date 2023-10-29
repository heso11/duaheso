// hidden search
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
// 
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// scroll
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
// top nav
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//scroll animate
var scroll = window.requestAnimationFrame ||
  function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {

  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}
loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}




var myVar;
function myLoader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
// card
document.addEventListener("DOMContentLoaded", function () {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3
  });
});
// related
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card2").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];


let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;


// Nhận số lượng thẻ có thể vừa với băng chuyền cùng một lúc
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


// Chèn bản sao của một số thẻ cuối cùng vào đầu băng chuyền để cuộn
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });


// Chèn bản sao của một vài thẻ đầu tiên vào cuối băng chuyền để cuộn
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});


// Cuộn băng chuyền ở vị trí thích hợp để ẩn một số thẻ trùng lặp đầu tiên
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");


// Thêm trình xử lý sự kiện cho các nút mũi tên để cuộn băng chuyền sang trái và phải
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});


const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Ghi lại vị trí con trỏ và cuộn ban đầu của băng chuyền
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};


const dragging = (e) => {
  if (!isDragging) return; // sai thì chuyển lại
  //Cập nhật vị trí cuộn của băng chuyền dựa trên chuyển động của con trỏ
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};


const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};


const infiniteScroll = () => {
  // Nếu băng chuyền ở đầu, hãy cuộn đến cuối
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // Nếu băng chuyền ở cuối, hãy cuộn về đầu
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }


  // Xóa thời gian chờ hiện có và bắt đầu tự động phát nếu chuột không di chuột qua băng chuyền
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};


const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Trả về nếu cửa sổ nhỏ hơn 800 hoặc isAutoPlay sai
  // Autoplay 
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
// team
document.addEventListener("DOMContentLoaded", function () {
  VanillaTilt.init(document.querySelectorAll(".card3"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3
  });
});
// 
var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1
});


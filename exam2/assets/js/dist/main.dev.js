"use strict";

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var html = '';
var swiperWrap = document.getElementById('slider-news');
fetch("assets/data/data.json").then(function (resp) {
  return resp.json();
}).then(function (resp) {
  console.log(resp);
  html += "\n\n  <div class=\"swiper mySwiper2\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\">\n    \n  <img src=\"".concat(resp[0].image, "\" alt=\"trade centre\" />\n  <h3>").concat(resp[0].title, "</h3>\n  <p>").concat(resp[0].text, "</p>\n  \n  <div class=\"author\">\n  <img src=\"").concat(resp[0].author.avatar, "\" alt=\"trade centre\" />\n  <div>\n  <div class=\"name\">").concat(resp[0].author.name, "</div>\n  <div class=\"date\">").concat(resp[0].date, "</div>\n  </div>\n  </div>\n        </div>\n        <div class=\"swiper-slide\">\n        <img src=\"").concat(resp[1].image, "\" alt=\"trade centre\" />\n            <h3>").concat(resp[1].title, "</h3>\n            <p>").concat(resp[1].text, "</p>\n            <div class=\"author\">\n            <img src=\"").concat(resp[1].author.avatar, "\" alt=\"trade centre\" />\n            <div>\n            <div class=\"name\">").concat(resp[1].author.name, "</div>\n            <div class=\"date\">").concat(resp[1].date, "</div>\n            </div>\n            </div>\n        \n        </div>\n        <div class=\"swiper-slide\">\n        <img src=\"").concat(resp[2].image, "\" alt=\"trade centre\" />\n  <h3>").concat(resp[2].title, "</h3>\n  <p>").concat(resp[2].text, "</p>\n  \n  <div class=\"author\">\n  <img src=\"").concat(resp[2].author.avatar, "\" alt=\"trade centre\" />\n  <div>\n  <div class=\"name\">").concat(resp[2].author.name, "</div>\n  <div class=\"date\">").concat(resp[2].date, "</div>\n  </div>\n  </div>\n        </div>\n        <div class=\"swiper-slide\">\n        <img src=\"").concat(resp[3].image, "\" alt=\"trade centre\" />\n  <h3>").concat(resp[3].title, "</h3>\n  <p>").concat(resp[3].text, "</p>\n  \n  <div class=\"author\">\n  <img src=\"").concat(resp[3].author.avatar, "\" alt=\"trade centre\" />\n  <div>\n  <div class=\"name\">").concat(resp[3].author.name, "</div>\n  <div class=\"date\">").concat(resp[3].date, "</div>\n  </div>\n  </div>\n        </div>\n        <div class=\"swiper-slide\">\n        <img src=\"").concat(resp[4].image, "\" alt=\"trade centre\" />\n  <h3>").concat(resp[4].title, "</h3>\n  <p>").concat(resp[4].text, "</p>\n  \n  <div class=\"author\">\n  <img src=\"").concat(resp[4].author.avatar, "\" alt=\"trade centre\" />\n  <div>\n  <div class=\"name\">").concat(resp[4].author.name, "</div>\n  <div class=\"date\">").concat(resp[4].date, "</div>\n  </div>\n  </div>\n        </div>\n      </div>\n    \n      <div class=\"swiper-pagination\"></div>\n    </div>\n    <div class=\"buttons-swipe\">\n    <div class=\"swiper-button-prev\"></div>\n  \n    <div class=\"swiper-button-next\"></div>\n    \n    </div>\n  \n    ");
  swiperWrap.innerHTML = html;
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 90,
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        loopFillGroupWithBlank: true
      },
      // when window width is >= 480px
      800: {
        slidesPerView: 2,
        spaceBetween: 50,
        loop: true,
        loopFillGroupWithBlank: true
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true
      }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
lightGallery(document.getElementById('animate'), {
  plugins: [lgZoom, lgThumbnail],
  selector: '.item'
});

function initMap() {
  point = L.map("map").setView([40.6595335, -73.9672046], 15), ico = L.icon({
    iconUrl: "assets/images/Pin.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [17, -90]
  }), L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(point), L.marker([40.6595335, -73.9672046], {
    icon: ico
  }).addTo(point).bindPopup("Monticello");
}

document.getElementById('map_cover').addEventListener('click', function (event) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('map_cover').remove(); // document.getElementById('map').innerHTML = '';

  initMap();
});

function ToggleMenu() {
  $(".hamburger").toggleClass("is-active");
  $("#side-block, .page-overlay").toggleClass("open");
  $("body").toggleClass("lock");
}

$(function () {
  $(".hamburger, .page-overlay, #mobile-menu a ").on("click", function () {
    ToggleMenu();
  });
});
$(function () {
  $(".arrow").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 80
    }, 500);
  });
});
$(function () {
  $(" .main_menu a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 80
    }, 500);
  });
});
$(function () {
  $("#side-block a").on("click", function (e) {
    e.preventDefault();
    $("#side-block, .page-overlay").toggleClass("open");
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 80
    }, 500);
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    document.getElementById("header-wrap").classList.add("scroll");
  } else {
    document.getElementById("header-wrap").classList.remove("scroll");
  }
});
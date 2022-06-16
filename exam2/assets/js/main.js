
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
let html = '';
const swiperWrap = document.getElementById('slider-news');
fetch("assets/data/data.json")
  .then(resp => {
    return resp.json();
  })
  .then(resp => {
    console.log(resp);
    html += `

  <div class="swiper mySwiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
    
  <img src="${resp[0].image}" alt="trade centre" />
  <h3>${resp[0].title}</h3>
  <p>${resp[0].text}</p>
  
  <div class="author">
  <img src="${resp[0].author.avatar}" alt="trade centre" />
  <div>
  <div class="name">${resp[0].author.name}</div>
  <div class="date">${resp[0].date}</div>
  </div>
  </div>
        </div>
        <div class="swiper-slide">
        <img src="${resp[1].image}" alt="trade centre" />
            <h3>${resp[1].title}</h3>
            <p>${resp[1].text}</p>
            <div class="author">
            <img src="${resp[1].author.avatar}" alt="trade centre" />
            <div>
            <div class="name">${resp[1].author.name}</div>
            <div class="date">${resp[1].date}</div>
            </div>
            </div>
        
        </div>
        <div class="swiper-slide">
        <img src="${resp[2].image}" alt="trade centre" />
  <h3>${resp[2].title}</h3>
  <p>${resp[2].text}</p>
  
  <div class="author">
  <img src="${resp[2].author.avatar}" alt="trade centre" />
  <div>
  <div class="name">${resp[2].author.name}</div>
  <div class="date">${resp[2].date}</div>
  </div>
  </div>
        </div>
        <div class="swiper-slide">
        <img src="${resp[3].image}" alt="trade centre" />
  <h3>${resp[3].title}</h3>
  <p>${resp[3].text}</p>
  
  <div class="author">
  <img src="${resp[3].author.avatar}" alt="trade centre" />
  <div>
  <div class="name">${resp[3].author.name}</div>
  <div class="date">${resp[3].date}</div>
  </div>
  </div>
        </div>
        <div class="swiper-slide">
        <img src="${resp[4].image}" alt="trade centre" />
  <h3>${resp[4].title}</h3>
  <p>${resp[4].text}</p>
  
  <div class="author">
  <img src="${resp[4].author.avatar}" alt="trade centre" />
  <div>
  <div class="name">${resp[4].author.name}</div>
  <div class="date">${resp[4].date}</div>
  </div>
  </div>
        </div>
      </div>
    
      <div class="swiper-pagination"></div>
    </div>
    <div class="buttons-swipe">
    <div class="swiper-button-prev"></div>
  
    <div class="swiper-button-next"></div>
    
    </div>
  
    `
    swiperWrap.innerHTML = html;
    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
  });



lightGallery(document.getElementById('animate'), {
  plugins: [lgZoom, lgThumbnail],
  selector: '.item',
});





// $(".map-screen").on("click", function () {
 
// const map = L.map("map").setView([51.505, -0.09], 13);
//   $(".map-screen").remove();
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
//   .openPopup();

// })


    

// var point, ico;
// $("#map_cover").remove(),
//   point = L.map("map").setView([50.4842892,30.4621455], 15),
//   ico = L.icon({
//       iconUrl: "assets/images/Pin.png",
//       iconSize: [50, 50],
//       iconAnchor: [25, 50],
//       popupAnchor: [17, -90]
//     }), L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
//       {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       }).addTo(point), L.marker([50.4842892,30.4621455],
//         { icon: ico }).addTo(point).bindPopup("Monticello")



function initMap () {
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  };
$('.map-screen').on('click', function () {
      $('.map-screen').remove()
      initMap( );
  });
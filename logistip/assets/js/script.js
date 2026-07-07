
(function ($) {
  "use strict";

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // =======Sticky-header========>>>>>
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 90) {
      $(".sticky-navbar").removeClass("sticky");
    } else {
      $(".sticky-navbar").addClass("sticky");
    }
  });
  // =======Sticky-header========>>>>>


  $(window).on("load", function () {
    $(".preloader").delay(600).fadeOut("slow");
  });

   
 // =======Offcanvas-data-bs-dismiss="offcanvas"========>>>>>
  if($('#logisticsNavbar-2').length > 0){
    const navContentmenu = new bootstrap.Offcanvas('#logisticsNavbar-2');
    $(document).on('click', '.nav-link', function(){
      navContentmenu.hide();
    });
  }
 // =======Offcanvas-data-bs-dismiss="offcanvas"========>>>>>


  // =======Swiper .blogswiper========>>>>>
  if ($('.blogSwiper').length > 0) {
    new Swiper(".blogSwiper", {
      loop: true,
      speed: 1500,
      spaceBetween: 30,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        }
      },
      navigation: {
        nextEl: ".blogSwiper-button-next",
        prevEl: ".blogSwiper-button-prev",
      },
    });
  }
  // =======Swiper .blogswiper========>>>>>


  // =======Swiper .brandswiper========>>>>>
  if ($('.brandSwiper').length > 0) {
    new Swiper(".brandSwiper", {
      loop: true,
      speed: 1500,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        345: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 30,
        }
      },
      navigation: {
        nextEl: ".brandSwiper-button-next",
        prevEl: ".brandSwiper-button-prev",
      },
    });
  }
  // =======Swiper .brandswiper========>>>>>



  // =======Swiper .heroSwiper========>>>>>
  if ($('.heroSwiper').length > 0){
    new Swiper(".heroSwiper", {
      loop: true,
      speed:3000,
      // autoplay: {
      //   delay: 4000,
      // },    
      spaceBetween: 0,
      navigation: {
        nextEl: ".heroSwiper-button-next",
        prevEl: ".heroSwiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } 
  // =======Swiper .heroSwiper========>>>>>
  

  // =======Swiper .heroSwiper-1========>>>>>
  if ($('.heroSwiper-1').length > 0) {
    new Swiper(".heroSwiper-1", {
      // loop: true,
      speed: 500,
      spaceBetween: 30,
      grabCursor: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        }, 
        575: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },        
        768: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        }, 
        992: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        }
      },
      navigation: {
        nextEl: ".heroSwiper-1-button-next",
        prevEl: ".heroSwiper-1-button-prev",
      },
    });
  }
  // =======Swiper .heroSwiper-1========>>>>>


  // =======Swiper .testimonialSwiper-2========>>>>>
  if ($('.testimonialSwiper-2').length > 0){
    new Swiper(".testimonialSwiper-2", {
      loop: true,
      spaceBetween: 30,
      speed: 2000,
      navigation: {
        nextEl: ".testimonialSwiper-2-button-next",
        prevEl: ".testimonialSwiper-2-button-prev",
      },
    });
  } 
  // =======Swiper .testimonialSwiper-2========>>>>> 


  // =======Swiper .testimonialSwiper-3========>>>>>
  if ($('.testimonialSwiper-3').length > 0) {
    new Swiper(".testimonialSwiper-3", {
      loop: true,
      speed: 1000,
      spaceBetween: 24,
      grabCursor: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },          
        992: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 24,
        }
      },
      navigation: {
        nextEl: ".testimonialSwiper-3-button-next",
        prevEl: ".testimonialSwiper-3-button-prev",
      },
      pagination: {
        el: ".testimonialSwiper-swiper-pagination",
        clickable: true,
      },
    });
  }
  // =======Swiper .testimonialSwiper-1========>>>>>


  // =======Magnific-PopUp========>>>>>   
  if ($('.image-link').length > 0){
    $('.image-link').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function (element) {
          return element.find('img');
        }
      }
    });
  } 
  // Video popup
  if ($('.video-popup').length > 0){
    $('.video-popup').magnificPopup({
      disableOn: 200,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }  
  // =======Magnific-PopUp========>>>>>


  
  // =======Comment-Reply========>>>>>
  window.addEventListener('DOMContentLoaded', function() {
    var ulElements = document.querySelectorAll('.comment-list-wrapper ul');
    var paddingIncrement = 70;

    ulElements.forEach(function(ul, index) {
      ul.style.paddingLeft = (index * paddingIncrement) + 'px';
    });
  });
 // =======Comment-Reply========>>>>>



  // =========Leaflet map=========>>>>>
  if ($('#map').length > 0) {
    var map = L.map('map').setView([31.000000, -100.000000], 6);
    var locationsArray = [];

    function clickZoom(e) {
      map.setView(e.target.getLatLng(), 6);
    }

    $.each(logisticsLocations, function(index, location) {
      // Create Marker
      var marker = L.marker(location.markerPoint, {
        title: location.title,
        className: "marker-usa"  // Class for the marker
      }).addTo(map);

      // Bind Popup
      marker.bindPopup(`<div class="card logistics-map-card"><div class="card-body">
                          <h5 class="card-title location-title">${location.title}</h5><p class="mb-0 fw-semibold location-subtitle">${location.subtitle}</p><p class="mb-0 small location-details">${location.address}</p>                          
                        </div></div>`).on('click', clickZoom);

      // Store the location in the array
      locationsArray.push({ marker: marker, location: location });
    });


    L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
      maxZoom: 16,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    

    // Outside click event
    $(document).on('click', function(e) {
      var mapContainer = $('#map');
      var isClickInsideMap = mapContainer.has(e.target).length > 0 || mapContainer.is(e.target);    
    });
  }
  // =========Leaflet map=========>>>>>


  new WOW().init();



  // =======CounterUp JS-Odometer========>>>>>   
  if ($('.odometer').length > 0) {
  $(window).on('scroll', function () {
  let preloaderTimeout = 2000;
  function winScrollPosition() {
    var scrollPos = $(window).scrollTop(),
      winHeight = $(window).height();
    var scrollPosition = Math.round(scrollPos + (winHeight / .07));
    return scrollPosition;
  }
  var elemOffset = $('.odometer').offset().top;
  if (elemOffset < winScrollPosition()) {

    setTimeout(function () {
      $('.odometer').each(function () {
        $(this).html($(this).data('count-to'));
      });
    }, preloaderTimeout + 100);
  }
  });
  }
  // =======CounterUp JS-Odometer========>>>>>


  // =================  Sending Mail =============
  $(document).on('submit', '#contactForm, #subscriptionForm, #callRequestForm',function(e) {
    e.preventDefault();

    var form = $(this);
    var formData = form.serialize();
    var responseDiv = form.find('.response');
    form.find('[type="submit"]').prop('disabled', true); 
    formData += '&id='+form.attr('id');

    responseDiv.html('<p>Working....</p>');

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: formData,
      success: function(response) {
       var data = JSON.parse(response);
        if (data.error) {
          responseDiv.empty().html('<div class="alert alert-error">'+data.msg+'</div>');
          // You can add additional actions for success here
        } else {
          responseDiv.empty().html('<div class="alert alert-sucess">'+data.msg+'</div>');
          form.get(0).reset();
        }
        form.find('[type="submit"]').prop('disabled', false); 
      },
      error: function(error) {
        console.log('Error:', error);
        form.find('[type="submit"]').prop('disabled', false); 
      }
    });
  });
  // =================  Sending Mail =============


  // =======Comment-Reply========>>>>>
  window.addEventListener('DOMContentLoaded', function() {
    var ulElements = document.querySelectorAll('.comment-list-wrapper ul');
    var paddingIncrement = 70;

    ulElements.forEach(function(ul, index) {
      ul.style.paddingLeft = (index * paddingIncrement) + 'px';
    });
  });
  // =======Comment-Reply========>>>>>


  // =======bxSlider========>>>>>
  if ($('.bx-slider-content').length > 0) {
    $(function(){
      $('.bx-slider-content').bxSlider({
          ticker: true,
          tickerHover: true,
          speed:50000,
          pagerCustom: '.bx-wrapper-0',
          adaptiveHeight: 0,
          slideWidth: false
      });
  });
  }
  // =======bxSlider========>>>>>


  // =======Search Bar expanding========>>>>>
  if ($('.search-box').length > 0){
    document.addEventListener("DOMContentLoaded", function() {
      const searchIcon = document.getElementById('search-icon');
      const searchBar = document.getElementById('search-bar');
      const inputField = searchBar.querySelector('.search-input');  
      searchIcon.addEventListener('click', function(event) {
          event.preventDefault();
          if(!document.querySelector('.search-bar').classList.contains('expanded')){
            searchBar.classList.add('expanded');
            document.querySelector('.navbar-nav').classList.add('navbar-display');
          }
          inputField.focus();
      });  
      document.addEventListener('click', function(event) {
          if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
              searchBar.classList.remove('expanded');
              document.querySelector('.navbar-nav').classList.remove('navbar-display');
          }
      });
      // =======Offcanvas-mobile========>>>>>
      const searchIcon2 = document.getElementById('search-icon2');
      const searchBar2 = document.getElementById('search-bar2');
      const inputField2 = searchBar2.querySelector('.search-input2');  
      searchIcon2.addEventListener('click', function(event) {
          event.preventDefault();
          if(!document.querySelector('.search-bar').classList.contains('expanded')){
            searchBar2.classList.add('expanded');
            document.querySelector('.navbar-nav').classList.add('navbar-display');
          }
          inputField2.focus();
      });  
      document.addEventListener('click', function(event) {
          if (!searchBar2.contains(event.target) && !searchIcon2.contains(event.target)) {
              searchBar2.classList.remove('expanded');
              document.querySelector('.navbar-nav').classList.remove('navbar-display');
          }
      });
      // =======Offcanvas-mobile========>>>>>
    });
  }
  // =======Search Bar expanding========>>>>>


  // ======= Hover Element  ========>>>>>
  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".hover-element");
    
    sections.forEach(section => {
        const cards = section.querySelectorAll(".hover-item");
        const defaultActiveCard = section.querySelector(".hover-item.active");
      
        let activeCard = defaultActiveCard;
      
        cards.forEach(card => {
            card.addEventListener("mouseover", function() {
                if (activeCard) {
                    activeCard.classList.remove("active");
                }
                this.classList.add("active");
                activeCard = this;
            });
        });
      
        section.addEventListener("mouseleave", function() {
            if (activeCard) {
                activeCard.classList.remove("active");
            }
            if (defaultActiveCard) {
                defaultActiveCard.classList.add("active");
                activeCard = defaultActiveCard;
            }
        });
    });
  });
  // ======= Hover Element  ========>>>>>


  // ======= testimonial-thumb-swiper  ========>>>>>
  var thumbSwiper = new Swiper('.testimonial-thumb-swiper2', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.testimonialSwiper-1-button-next',
      prevEl: '.testimonialSwiper-1-button-prev',
    },
    loop: true,
    loopedSlides: 4,
    speed: 1000,

  });
  var thumbSwiper2 = new Swiper('.testimonial-thumb-swiper', {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
    speed: 1000,
  });
  thumbSwiper.controller.control = thumbSwiper2;
  thumbSwiper2.controller.control = thumbSwiper;
  // ======= testimonial-thumb-swiper  ========>>>>>


})(jQuery);



  // =================  Dropdown on Hover =============
  document.addEventListener("DOMContentLoaded", function () {    
    if (window.innerWidth > 992) {
        document.querySelectorAll('.hover-menu .nav-item.dropdown').forEach(function (everyitem) {
            everyitem.addEventListener('mouseover', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');
                if (el_link !== null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    if (nextEl !== null && this.contains(nextEl)) {
                        nextEl.classList.add('show');
                    }
                }
            }.bind(everyitem)); 
            everyitem.addEventListener('mouseleave', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');
                if (el_link !== null) {
                    let nextEl = el_link.nextElementSibling;
                    if (nextEl !== null && this.contains(nextEl)) {
                        el_link.classList.remove('show');
                        nextEl.classList.remove('show');
                    }
                }
            }.bind(everyitem)); 
        });
    }
    // end if innerWidth
  });
  // =================  Dropdown on Hover =============



  // =================  Back-To-Top =============
  if ($('.progressCounter').length > 0){
    $(".progressCounter").progressScroll();
    $(".progressCounter").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(document).ready(function() {
      var progressElements = $('.progressScroll');
      $(window).scroll(function() {          
          if ($(this).scrollTop() >= 50) {              
              progressElements.addClass('progress-scroll-opacity-1');
          } else {              
              progressElements.removeClass('progress-scroll-opacity-1');
          }
      });
    });
  }
  // =================  Back-To-Top =============
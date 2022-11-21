jQuery(document).ready(function ($) {
  // menu
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
    $(".main-navigation").toggleClass("active");
  });
  $(".main-navigation li, .stick-navigation li").each(function () {
    if ($(this).find(".dropdown").length) {
      $(this).addClass("parent");
    }
  });

  // sliders
  let swiper1Init = false;
  let swiper1;

  function initSwiper1() {
    let winWidth = $(window).width();
    if (winWidth < 640 && swiper1Init) {
      swiper1.destroy();
      swiper1Init = false;
    }
    if (winWidth >= 640 && !swiper1Init) {
      swiper1 = new Swiper(".swiper-01", {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        on: {
          init: function () {
            swiper1Init = true;
          },
        },
        breakpoints: {
          768: {
            spaceBetween: 20,
          },
        },
      });
    }
  }
  initSwiper1();

  $(window).on("resize", function () {
    initSwiper1();
  });

  const swiper2 = new Swiper(".swiper-02", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 10,
    scrollbar: {
      el: ".swiper-02-scrollbar",
      draggable: true,
      hide: false,
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
    },
  });

  $(".block-why-rocks .btn-wrap .button").on("click", function (e) {
    e.preventDefault();
    var dest = $(".block-why-rocks").next();
    $("html,body").animate({ scrollTop: dest.offset().top }, 500);
  });

  function stickMenu() {
    var scrollWin = $(window).scrollTop();
    var top = $(".page-intro").outerHeight() + $(".header").outerHeight();

    if (scrollWin > top) {
      $(".stick-navigation").addClass("active");
    } else {
      $(".stick-navigation").removeClass("active");
    }
  }
  stickMenu();

  $(window).on("scroll", function () {
    stickMenu();
  });

  function footer() {
    if ($(window).width() >= 1024) {
      $(".page-wrapper").css("padding-bottom", $(".footer-wrapper").outerHeight());
    } else {
      $(".page-wrapper").removeAttr("style");
    }
  }
  footer();
  $(window).on("resize", function () {
    footer();
  });
});

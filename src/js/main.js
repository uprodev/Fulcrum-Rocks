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
        mousewheel: {
          releaseOnEdges: true,
        },
        navigation: {
          nextEl: ".swiper-01 .swiper-button-next",
          prevEl: ".swiper-01 .swiper-button-prev",
        },
        on: {
          init: function () {
            swiper1Init = true;
          },
          reachBeginning: function () {
            $(".swiper-01 .swiper-button-prev").addClass("disabled");
            $(".swiper-01 .swiper-button-next").removeClass("disabled");
          },
          reachEnd: function () {
            $(".swiper-01 .swiper-button-next").addClass("disabled");
            $(".swiper-01 .swiper-button-prev").removeClass("disabled");
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
    mousewheel: {
      releaseOnEdges: true,
    },
    scrollbar: {
      el: ".swiper-02-scrollbar",
      draggable: true,
      hide: false,
    },
    navigation: {
      nextEl: ".swiper-02 .swiper-button-next",
      prevEl: ".swiper-02 .swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
    },
    on: {
      reachBeginning: function () {
        $(".swiper-02 .swiper-button-prev").addClass("disabled");
        $(".swiper-02 .swiper-button-next").removeClass("disabled");
      },
      reachEnd: function () {
        $(".swiper-02 .swiper-button-next").addClass("disabled");
        $(".swiper-02 .swiper-button-prev").removeClass("disabled");
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

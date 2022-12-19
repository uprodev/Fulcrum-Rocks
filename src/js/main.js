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
  if ($(".swiper-01").length) {
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
              ScrollTrigger.refresh();
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
  }

  if ($(".swiper-02").length) {
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
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });
  }

  if ($(".swiper-03").length) {
    const swiper3 = new Swiper(".swiper-03", {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 10,
      mousewheel: {
        releaseOnEdges: true,
      },
      scrollbar: {
        el: ".swiper-03-scrollbar",
        draggable: true,
        hide: false,
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      on: {
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });
  }

  if ($(".swiper-04").length) {
    const swiper4 = new Swiper(".swiper-04", {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 10,
      mousewheel: {
        releaseOnEdges: true,
      },
      scrollbar: {
        el: ".swiper-04-scrollbar",
        draggable: true,
        hide: false,
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      on: {
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });
  }

  if ($(".swiper-05").length) {
    const swiper5 = new Swiper(".swiper-05", {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 10,
      mousewheel: {
        releaseOnEdges: true,
      },
      scrollbar: {
        el: ".swiper-05-scrollbar",
        draggable: true,
        hide: false,
      },
      navigation: {
        nextEl: ".swiper-05 .swiper-button-next",
        prevEl: ".swiper-05 .swiper-button-prev",
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      on: {
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });
  }

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

  // forms

  $.jStyling.createSelect($("select.select"));

  $("[type=tel]").mask("+1 (999)-999-99-99");

  $("#contactForm").on("submit", function (e) {
    var err = false;
    var req = $(this).find("[required]");

    req.each(function () {
      if ($(this).val() === "") {
        $(this).addClass("error");
        $(this).parent().addClass("error");
        err = true;
      } else {
        $(this).removeClass("error");
        $(this).parent().removeClass("error");
      }
    });

    if (err) {
      e.preventDefault();
    }
  });

  $("#contactForm [required]").on("blur", function () {
    if ($(this).val() !== "") {
      $(this).removeClass("error");
      $(this).parent().removeClass("error");
    }
  });

  // $(".card-effect-05")
  //   .on("mouseenter", function () {
  //     var color = $(this).attr("data-color");
  //     $(this)
  //       .parents(".block-stages")
  //       .addClass("color-" + color);
  //   })
  //   .on("mouseleave", function () {
  //     var color = $(this).attr("data-color");
  //     $(this)
  //       .parents(".block-stages")
  //       .removeClass("color-" + color);
  //   });

  //tabs
  $(".tabs .tab-panel.active").show();
  $(".tab-menu a").on("click", function (e) {
    e.preventDefault();

    if (!$(this).hasClass("filter-show-more")) {
      if (!$(this).parent().hasClass("active")) {
        var $activeTab = $(".tabs .tab-panel.active");
        var $nextTab = $($(this).attr("href"));
        $(".tab-menu li.active").removeClass("active");
        $(this).parent().addClass("active");
        $activeTab.removeClass("active").hide();
        $nextTab.addClass("active").fadeIn(400);
      }
    }
  });

  function switchPos() {
    var top = $(".header").outerHeight() + $(".page-intro").outerHeight();
    $(".switch").css("top", top);
  }
  switchPos();

  $(window).on("resize", function () {
    switchPos();
  });

  $(".switch").on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(".blackout").fadeIn(200);
      $("html").css({ overflow: "scroll" });
      $("body").css({ overflow: "hidden" });
    } else {
      $(this).removeClass("active");
      $(".blackout").fadeOut(200);
      $("html").removeAttr("style");
      $("body").removeAttr("style");
    }
  });

  $(".filter-show-more").on("click", function (e) {
    e.preventDefault();
    var txt1 = "See more +";
    var txt2 = "See less +";

    if ($(this).hasClass("shown")) {
      $(this).removeClass("shown").find("span span").text(txt1);
      $(".projects-filter .tab-nav li.hidden").hide();
    } else {
      $(this).addClass("shown").find("span span").text(txt2);
      $(".projects-filter .tab-nav li.hidden").show();
    }
  });

  $(".accordion-toggler").on("click", function () {
    $(this).toggleClass("accordion-active").next(".accordion-panel").slideToggle(300);
  });
});

if (document.getElementById("contactFormMessage")) {
  var observe;
  if (window.attachEvent) {
    observe = function (element, event, handler) {
      element.attachEvent("on" + event, handler);
    };
  } else {
    observe = function (element, event, handler) {
      element.addEventListener(event, handler, false);
    };
  }
  function initTextarea() {
    var text = document.getElementById("contactFormMessage");
    function resize() {
      text.style.height = "auto";
      text.style.height = text.scrollHeight + "px";
    }
    function delayedResize() {
      window.setTimeout(resize, 0);
    }
    observe(text, "change", resize);
    observe(text, "cut", delayedResize);
    observe(text, "paste", delayedResize);
    observe(text, "drop", delayedResize);
    observe(text, "keydown", delayedResize);
    resize();
  }
  initTextarea();
}

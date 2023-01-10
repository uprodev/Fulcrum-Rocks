jQuery(document).ready(function ($) {
  // menu
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
    $(".header").toggleClass("mob-menu-opened");
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
    document.querySelectorAll(".swiper-02").forEach((el) => {
      const swiper2 = new Swiper(el, {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        mousewheel: {
          releaseOnEdges: true,
        },
        scrollbar: {
          el: el.querySelector(".swiper-02-scrollbar"),
          draggable: true,
          hide: false,
        },
        navigation: {
          nextEl: el.querySelector(".swiper-02 .swiper-button-next"),
          prevEl: el.querySelector(".swiper-02 .swiper-button-prev"),
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
    document.querySelectorAll(".swiper-05").forEach((el) => {
      const swiper5 = new Swiper(el, {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        mousewheel: {
          releaseOnEdges: true,
        },
        scrollbar: {
          el: el.querySelector(".swiper-05-scrollbar"),
          draggable: true,
          hide: false,
        },
        navigation: {
          nextEl: el.querySelector(".swiper-05 .swiper-button-next"),
          prevEl: el.querySelector(".swiper-05 .swiper-button-prev"),
        },
        breakpoints: {
          768: {
            spaceBetween: 20,
          },
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
    });
  }

  if ($(".swiper-06").length) {
    const swiper6 = new Swiper(".swiper-06", {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 10,
      mousewheel: {
        releaseOnEdges: true,
      },
      scrollbar: {
        el: ".swiper-06-scrollbar",
        draggable: true,
        hide: false,
      },
      navigation: {
        nextEl: ".swiper-06 .swiper-button-next",
        prevEl: ".swiper-06 .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 40,
          spaceBetween: 0,
          allowTouchMove: false,
        },
      },

      on: {
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });
  }

  if ($(".swiper-07").length) {
    const swiper7 = new Swiper(".swiper-07", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 150,
      mousewheel: {
        releaseOnEdges: true,
      },
      scrollbar: {
        el: ".swiper-07-scrollbar",
        draggable: true,
        hide: false,
      },
      navigation: {
        nextEl: ".swiper-07 .swiper-button-next",
        prevEl: ".swiper-07 .swiper-button-prev",
      },
      on: {
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });
  }

  customScrollOptions = {
    touchbehavior: true,
    overflowx: true,
    overflowy: false,
    cursorcolor: "#E9EEF1",
    cursorborder: "none",
    cursorwidth: "4px",
  };
  $(".scroller").niceScroll(customScrollOptions);

  function stickMenu() {
    var scrollWin = $(window).scrollTop();
    var top = $(".page-intro").outerHeight() + $(".header").outerHeight();

    if (scrollWin > top) {
      $(".stick-navigation").addClass("active");
    } else {
      $(".stick-navigation").removeClass("active");
    }

    if (scrollWin > 0) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
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

  function closeSelect(el) {
    el.removeClass("opened");
    el.find(".projects-filter-sort-dropdown-list").slideUp(0);
    var checkedInputs = el.find("input:checked");
    if (checkedInputs.length > 0) {
      el.addClass("selected");
      var selectedText = "";
      for (var i = 0; i < checkedInputs.length; i++) {
        selectedText = selectedText + checkedInputs[i].value;
        if (i < checkedInputs.length - 1) {
          selectedText = selectedText + ", ";
        }
      }
      el.find(".projects-filter-sort-dropdown-selected span").text(selectedText);
    } else {
      el.removeClass("selected");
      var selectedText = el.find(".projects-filter-sort-dropdown-selected span").attr("data-text");
      el.find(".projects-filter-sort-dropdown-selected span").text(selectedText);
    }
  }

  $(".projects-filter-sort-dropdown").on("click", function (e) {
    e.stopPropagation();
  });
  $(".projects-filter-sort-dropdown-selected").on("click", function (e) {
    e.stopPropagation();
    if ($(this).parent().hasClass("opened")) {
      closeSelect($(this).parent());
    } else {
      $(this).parent().addClass("opened");
      $(this).next().slideDown(0);
    }
  });
  $(document).on("click", function () {
    if ($(".projects-filter-sort-dropdown.opened").length) {
      closeSelect($(".projects-filter-sort-dropdown.opened"));
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

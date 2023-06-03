jQuery(document).ready(function ($) {
  // menu
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
    $(".header").toggleClass("mob-menu-opened");
    $(".main-navigation").toggleClass("active");
  });
  $(".main-navigation li").each(function () {
    if ($(this).find(".dropdown").length) {
      $(this).addClass("parent");
    }
  });

  $(".main-navigation li").each(function () {
    if ($(this).find(".submenu").length) {
      $(this).addClass("submenu-parent");
    }
  });
  $(".main-navigation .submenu-parent > a").on("click", function (e) {
    if ($(window).width() < 1024) {
      e.preventDefault();
      $(this).toggleClass("opened").next(".submenu").slideToggle(300);
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

  if ($(".swiper-11").length) {
    let swiper11Init = false;
    let swiper11;

    function initSwiper11() {
      let winWidth = $(window).width();
      if (winWidth < 640 && swiper11Init) {
        swiper11.destroy();
        swiper11Init = false;
      }
      if (winWidth >= 640 && !swiper11Init) {
        swiper11 = new Swiper(".swiper-11", {
          loop: true,
          slidesPerView: "auto",
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-11 .swiper-button-next",
            prevEl: ".swiper-11 .swiper-button-prev",
          },
          on: {
            init: function () {
              swiper11Init = true;
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
    initSwiper11();

    $(window).on("resize", function () {
      initSwiper11();
    });
  }

  if ($(".swiper-02").length) {
    document.querySelectorAll(".swiper-02").forEach((el) => {
      var loop = false;
      if (el.dataset.loop === "true") {
        loop = true;
      }
      const swiper2 = new Swiper(el, {
        loop: loop,
        slidesPerView: "auto",
        spaceBetween: 10,
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
      scrollbar: {
        el: ".swiper-03-scrollbar",
        draggable: true,
        hide: false,
      },
      navigation: {
        nextEl: ".swiper-03 .swiper-button-next",
        prevEl: ".swiper-03 .swiper-button-prev",
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
      scrollbar: {
        el: ".swiper-04-scrollbar",
        draggable: true,
        hide: false,
      },
      navigation: {
        nextEl: ".swiper-04 .swiper-button-next",
        prevEl: ".swiper-04 .swiper-button-prev",
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
        scrollbar: {
          el: el.querySelector(".swiper-05-scrollbar"),
          draggable: true,
          hide: false,
        },
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
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

  if ($(".swiper-051").length) {
    document.querySelectorAll(".swiper-051").forEach((el) => {
      const swiper51 = new Swiper(el, {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        scrollbar: {
          el: el.querySelector(".swiper-051-scrollbar"),
          draggable: true,
          hide: false,
        },
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
          768: {
            spaceBetween: 20,
          },
          1024: {
            scrollbar: false,
            navigation: false,
            loop: false,
            slidesPerView: 3,
            spaceBetween: 0,
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

  if ($(".swiper-052").length) {
    document.querySelectorAll(".swiper-052").forEach((el) => {
      const swiper52 = new Swiper(el, {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        scrollbar: {
          el: el.querySelector(".swiper-scrollbar"),
          draggable: true,
          hide: false,
        },
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
          768: {
            spaceBetween: 20,
          },
          1024: {
            scrollbar: false,
            navigation: false,
            loop: false,
            allowTouchMove: false,
            slidesPerView: 4,
            spaceBetween: 0,
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

  if ($(".swiper-07").length) {
    const swiper7 = new Swiper(".swiper-07", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 160,
      autoHeight: true,
      scrollbar: {
        el: ".swiper-07 .swiper-scrollbar",
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
        realIndexChange: function (swiper) {
          $(".swiper-07-nav [data-slide]").each(function () {
            if (parseInt($(this).attr("data-slide")) === swiper.realIndex && !$(this).hasClass("active")) {
              $(".swiper-07-nav .active").removeClass("active");
              $(this).parent().addClass("active");
            }
          });
        },
      },
    });

    $(".swiper-07-nav [data-slide]").on("click", function (e) {
      e.preventDefault();
      var slide = parseInt($(this).attr("data-slide"));
      $(".swiper-07-nav .active").removeClass("active");
      $(this).parent().addClass("active");
      swiper7.slideTo(slide, 500);
    });
  }

  if ($(".swiper-08").length) {
    let swiper8Init = false;
    let swiper8 = new Array();

    function initSwiper8(n) {
      let winWidth = $(window).width();
      if (winWidth >= 1024 && swiper8Init) {
        for (var i = 0; i < swiper8.length; i++) {
          swiper8[i].destroy();
        }
        swiper8Init = false;
      }
      if (winWidth < 1024 && !swiper8Init) {
        document.querySelectorAll(".swiper-08").forEach((el, i) => {
          swiper8[i] = new Swiper(el, {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 10,
            navigation: {
              nextEl: el.querySelector(".swiper-button-next"),
              prevEl: el.querySelector(".swiper-button-prev"),
            },
            scrollbar: {
              el: el.querySelector(".swiper-scrollbar"),
              draggable: true,
              hide: false,
            },
            on: {
              init: function () {
                swiper8Init = true;
                ScrollTrigger.refresh();
              },
            },
            breakpoints: {
              768: {
                spaceBetween: 20,
              },
            },
          });
        });
      }
    }
    initSwiper8();

    $(window).on("resize", function () {
      initSwiper8();
    });
  }

  if ($(".swiper-09").length) {
    if ($(window).width() >= 768) {
      if (!$(".swiper-09").find(".empty").length) {
        $(".swiper-09 .swiper-wrapper").append($('<div class="swiper-slide empty" />'));
      }
    } else {
      if ($(".swiper-09").find(".empty").length) {
        $(".swiper-09 ").find(".swiper-slide.empty").remove();
      }
    }

    const swiper9 = new Swiper(".swiper-09", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: ".swiper-09 .swiper-button-next",
        prevEl: ".swiper-09 .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40,
        },
      },
      on: {
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });

    $(window).on("resize", function () {
      if ($(window).width() >= 768) {
        if (!$(".swiper-09").find(".empty").length) {
          $(".swiper-09 .swiper-wrapper").append($('<div class="swiper-slide empty" />'));
        }
      } else {
        if ($(".swiper-09").find(".empty").length) {
          $(".swiper-09 ").find(".swiper-slide.empty").remove();
        }
      }
    });
  }

  if ($(".swiper-10").length) {
    const swiper10 = new Swiper(".swiper-10", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: ".swiper-10 .swiper-button-next",
        prevEl: ".swiper-10 .swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1660: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },

      on: {
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });

    $(".swiper-07-nav [data-slide]").on("click", function (e) {
      e.preventDefault();
      var slide = parseInt($(this).attr("data-slide"));
      $(".swiper-07-nav .active").removeClass("active");
      $(this).parent().addClass("active");
      swiper7.slideTo(slide, 500);
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
  $(".scrollable").niceScroll(customScrollOptions);

  // forms
  $(".contact-form-01 input").on("blur", function () {
    if ($(this).attr("aria-invalid") === "true") {
      $(this).addClass("error");
    } else {
      $(this).removeClass("error");
    }
  });

  $(".contact-form-01 form button[type=submit]").on("mouseup", function () {
    setTimeout(() => {
      $(".contact-form-01 ")
        .find("input")
        .each(function () {
          if ($(this).attr("aria-invalid") === "true" || $(this).val() === "") {
            $(this).addClass("error");
          } else {
            $(this).removeClass("error");
          }
        });
    }, 600);
  });

  $.jStyling.createSelect($("select.select"));
  $.jStyling({ fileButtonText: "Attach a file" });
  $.jStyling.createFileInput($("input.file"));

  // $("[type=tel]").mask("+1 (999)-999-99-99");

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

  $('.contact-form-01 input[type="file"]').on("change", function () {
    if ($(this).val() !== "") {
      var name = $(this).get(0).files[0].name;
      var size = $(this).get(0).files[0].size;
      var fSExt = new Array("Bytes", "KB", "MB", "GB"),
        i = 0;
      while (size > 900) {
        size /= 1024;
        i++;
      }
      var exactSize = Math.round(size * 100) / 100 + " " + fSExt[i];

      $("#fileName").text(name);
      $("#fileSize").text(exactSize);
      $(".contact-form-01 .field-file").hide();
      $(".contact-form-01 .field-file-result").show();
    }
  });

  $(".contact-form-01 .field-file-result .file-delete").on("click", function () {
    $('.contact-form-01 input[type="file"]').val("");
    $(".contact-form-01 .field-file").show();
    $(".contact-form-01 .field-file-result").hide();
  });

  $(".page-intro-product .form input").on("keyup", function () {
    var url = $(this).val();
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (url != "") {
      if (regexp.test(url)) {
        $(".page-intro-product .animation").addClass("active");
      } else {
        $(".page-intro-product .animation").removeClass("active");
      }
    } else {
      $(".page-intro-product .animation").removeClass("active");
    }
  });

  //tabs
  $(".tabs .tab-panel.active").show();
  $(".tab-menu a").on("click", function (e) {
    e.preventDefault();

    if (!$(this).hasClass("filter-show-more")) {
      var $parent = $(this).closest(".container").find(".tabs");
      var $nav = $(this).closest(".tab-menu");
      if (!$(this).parent().hasClass("active")) {
        var $activeTab = $parent.find(".tab-panel.active");
        var $nextTab = $($(this).attr("href"));
        $nav.find("li.active").removeClass("active");
        $(this).parent().addClass("active");
        $activeTab.removeClass("active").hide();
        $nextTab.addClass("active").fadeIn(400);
        eqHeight();
        ScrollTrigger.refresh();
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
        selectedText = selectedText + checkedInputs[i].dataset.value;
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

  function getScrollBarWidth() {
    var inner = document.createElement("p");
    inner.style.width = "100%";
    inner.style.height = "200px";
    var outer = document.createElement("div");
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "100%";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = "scroll";
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;
    document.body.removeChild(outer);
    return w1 - w2;
  }

  // function switchPos() {
  //   var posImage = $(".page-intro-home .image"),
  //     imgW = posImage.outerWidth(),
  //     imgH = posImage.outerHeight();
  //   var top = posImage.offset().top + imgH;
  //   var left = posImage.offset().left + imgW;
  //   var switchW = imgW * 0.323,
  //     switchH = imgH * 0.203;
  //   $(".switch").width(switchW);
  //   $(".switch").height(switchH);
  //   $(".switch").css({ top: top - switchH - imgH * 0.07, left: left - imgW * 0.213 });
  // }

  // if ($(".switch").length) {
  //   imagesLoaded("body", function () {
  //     switchPos();
  //     if ($(window).width() >= 1024) {
  //       $(".switch").show();
  //     }
  //   });

  //   $(window).on("resize", function () {
  //     switchPos();
  //     if ($(window).width() < 1024) {
  //       $(".switch").hide();
  //     }
  //   });

  //   $(".switch").on("click", function () {
  //     var scrollbar = getScrollBarWidth();
  //     // var switchRight = $(".switch").css("right");
  //     if (!$(this).hasClass("active")) {
  //       $(this).addClass("active");
  //       $("html, body").css({ overflow: "hidden" });
  //       $(".header").css({ right: scrollbar });
  //       // $(".switch").css({ right: switchRight + scrollbar });
  //       $(".page-content, .page-footer").hide();
  //       $(".blackout").fadeIn(200);
  //     } else {
  //       $(this).removeClass("active");
  //       $("html, body").removeAttr("style");
  //       $(".header").css({ right: 0 });
  //       // $(".switch").css({ right: switchRight });
  //       $(".page-content, .page-footer").show();
  //       $(".blackout").fadeOut(200);
  //     }
  //   });
  // }

  $(".block-team .btn-centered .button").on("click", function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .hide()
      .prev(".team-more-list")
      .slideDown(400, function () {
        ScrollTrigger.refresh();
      });
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

  $(".accordion-toggler-panel").on("click", function () {
    var parent = $(this);
    if (parent.hasClass("accordion-active")) {
      parent
        .removeClass("accordion-active")
        .find(".accordion-panel")
        .slideUp(300, function () {
          parent.find(".accordion-base").slideDown(100);
        });
    } else {
      parent
        .addClass("accordion-active")
        .find(".accordion-base")
        .slideUp(100, function () {
          parent.find(".accordion-panel").slideDown(300);
        });
    }
  });

  $("button.mgbutton").each(function () {
    var txt = $(this).text();
    $(this).text("").addClass("btn-small");
    var html = '<span class="btn-wrap"><span class="btn-inner">' + txt + '<span class="btn-icon"></span></span></span>';
    $(this).html(html);
  });

  $(".block-service-colored-box .colored-box form ").on("submit", function (e) {
    var err = false;
    var form = $(this);
    form.find("input[type=email]").each(function () {
      var patternMail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (!patternMail.test($(this).val()) || $(this).val() == "") {
        err = true;
        $(this).closest(".field").addClass("error");
      } else {
        $(this).closest(".field").removeClass("error");
      }
    });
    if (err) {
      e.preventDefault();
    }
  });

  $(".page-handbook .block-service-colored-box .colored-box form input ").on("input", function (e) {
    var patternMail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!patternMail.test($(this).val()) || $(this).val() == "") {
      err = true;
      $(this).closest(".field").removeClass("success");
      $(this).parents("form").find("[type=submit] .btn-text").text("Get the checklist");
    } else {
      $(this).closest(".field").addClass("success");
      $(this).parents("form").find("[type=submit] .btn-text").text("Get for FREE");
    }
  });

  $("a[data-modal]").click(function (event) {
    $(this).modal({
      showClose: false,
      fadeDuration: 100,
    });
    return false;
  });
  if ($(".modal").length) {
    $(".modal").on($.modal.BEFORE_BLOCK, function (event, modal) {
      var scrollbar = getScrollBarWidth();
      $(".header").css({ right: scrollbar });
      $(".page-wrapper").css({ "padding-right": scrollbar });
    });
    $(".modal").on($.modal.AFTER_CLOSE, function (event, modal) {
      $(".header").css({ right: 0 });
      $(".page-wrapper").css({ "padding-right": 0 });
    });
  }

  function eqHeight() {
    $(".eq-height-wrapper").each(function () {
      var text = $(this).find("p");
      if ($(this).find(".card-text").length) {
        text = $(this).find(".card-text");
      }
      text.each(function () {
        $(this).height("auto");
      });
      var eh = 0,
        eh1 = 0;
      text.each(function (i) {
        if (i < 4) {
          if ($(this).height() > eh) {
            eh = $(this).height();
          }
        } else {
          if ($(this).height() > eh1) {
            eh1 = $(this).height();
          }
        }
      });
      text.each(function (i) {
        if (i < 4) {
          $(this).height(eh);
        } else {
          $(this).height(eh1);
        }
      });
    });
  }
  function eqHeight1() {
    var eH = 0;
    $(".page-wp .block-page--wp-3 .card .text").each(function () {
      $(this).height("auto");

      if ($(this).height() > eH) {
        eH = $(this).height();
      }
    });
    $(".page-wp .block-page--wp-3 .card .text").each(function () {
      $(this).height(eH);
    });
  }
  eqHeight();
  eqHeight1();
  $(window).on("resize", function () {
    eqHeight();
    eqHeight1();
  });

  // btn-anchor
  $(".btn-anchor").on("click", function (e) {
    e.preventDefault();
    var dest = $($(this).attr("href"));
    if (dest.length) {
      $("html, body").animate({ scrollTop: dest.offset().top }, 800);
    }
  });
});

// if (document.getElementById("contactFormMessage")) {
//   var observe;
//   if (window.attachEvent) {
//     observe = function (element, event, handler) {
//       element.attachEvent("on" + event, handler);
//     };
//   } else {
//     observe = function (element, event, handler) {
//       element.addEventListener(event, handler, false);
//     };
//   }
//   function initTextarea() {
//     var text = document.getElementById("contactFormMessage");
//     function resize() {
//       text.style.height = "auto";
//       text.style.height = text.scrollHeight + "px";
//     }
//     function delayedResize() {
//       window.setTimeout(resize, 0);
//     }
//     observe(text, "change", resize);
//     observe(text, "cut", delayedResize);
//     observe(text, "paste", delayedResize);
//     observe(text, "drop", delayedResize);
//     observe(text, "keydown", delayedResize);
//     resize();
//   }
//   initTextarea();
// }

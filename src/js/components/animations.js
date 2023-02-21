jQuery(document).ready(function ($) {
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

  // headlines animation
  function animateHeadlines(splits) {
    splits.forEach((spl) => {
      if (spl.anim) {
        spl.anim.progress(1).kill();
      }

      var delay = 0;
      if (spl.dataset.delay) {
        delay = spl.dataset.delay;
      }

      Splitting({
        target: spl,
        by: "chars",
        key: null,
        whitespace: true,
      });

      var chars = spl.querySelectorAll(".char");
      spl.anim = gsap.to(chars, {
        scrollTrigger: {
          trigger: spl,
          toggleActions: "play resume resume resume",
          start: "top bottom",
        },
        delay: delay,
        duration: 0.3,
        ease: "linear",
        y: "0",
        opacity: 1,
        stagger: 0.04,
      });
    });
    splitsSet = true;
    splits.forEach((spl) => {
      spl.style.visibility = "visible";
    });
  }

  var splits = document.querySelectorAll(".split");
  // animateHeadlines(splits);

  var gradients = document.querySelectorAll(".txt-gradient");
  gsap.utils.toArray(gradients).forEach((gradient, i) => {
    var delay = 0;
    if (gradient.dataset.delay) {
      delay = gradient.dataset.delay;
    }

    var bgEnd = "linear-gradient(90deg, #0d99ff 0%, #99faf4 100%)";

    if ($(".page-services--green").length) {
      bgEnd = "linear-gradient(90deg, #30db74 0%, #E9EEF1 100%)";
    }
    if ($(".page-services--purple").length) {
      bgEnd = "linear-gradient(90deg, #695cff 0%, #E9EEF1 100%)";
    }
    if ($(".page-services--orange").length) {
      bgEnd = "linear-gradient(90deg, #ffae33 0%, #E9EEF1 100%)";
    }
    if ($(".page-services--yellow").length) {
      bgEnd = "linear-gradient(90deg, #ffd426 0%, #E9EEF1 100%)";
    }

    gsap.to(gradient, {
      scrollTrigger: {
        markers: false,
        trigger: gradient,
        scrub: false,
        toggleActions: "play resume resume resume",
        start: "top bottom",
      },
      backgroundImage: bgEnd,
      duration: 1,
      delay: delay,
    });
  });

  $(".card-effect-05")
    .on("mouseenter", function () {
      var color = $(this).attr("data-color");
      $(this)
        .parents(".block-stages")
        .addClass("color-" + color);
    })
    .on("mouseleave", function () {
      var color = $(this).attr("data-color");
      $(this)
        .parents(".block-stages")
        .removeClass("color-" + color);
    });

  // block why-rocks animations
  if (document.querySelector(".block-why-rocks")) {
    $(".block-why-rocks .button").removeAttr("href");

    ScrollTrigger.create({
      trigger: ".block-why-rocks",
      start: "top top",
      end: "bottom bottom",
      toggleClass: { targets: ".block-why-rocks .btn-centered", className: "is-fixed" },
      pin: ".block-why-rocks .text",
      pinSpacing: false,
      onEnter: function () {
        document.querySelector(".block-why-rocks").classList.add("pinned-bottom");
        document.querySelector(".block-why-rocks").classList.remove("pinned-top");

        $(".block-why-rocks .button").bind("click", function (e) {
          e.preventDefault();
          var dest = $(".block-why-rocks").next();
          $("html,body").animate({ scrollTop: dest.offset().top }, 500);
        });
      },
      onEnterBack: function () {
        document.querySelector(".block-why-rocks").classList.remove("pinned-bottom");
        document.querySelector(".block-why-rocks").classList.add("pinned-top");

        $(".block-why-rocks .button").bind("click", function (e) {
          e.preventDefault();
          var dest = $(".block-why-rocks").prev();
          $("html,body").animate({ scrollTop: dest.offset().top + dest.outerHeight() - $(window).height() }, 500);
        });
      },
      onLeave: function () {
        document.querySelector(".block-why-rocks").classList.add("pinned-bottom");
        document.querySelector(".block-why-rocks").classList.remove("pinned-top");

        $(".block-why-rocks .button").unbind("click");
      },
      onLeaveBack: function () {
        document.querySelector(".block-why-rocks").classList.remove("pinned-bottom");
        document.querySelector(".block-why-rocks").classList.add("pinned-top");

        $(".block-why-rocks .button").unbind("click");
      },
    });

    var listItems = document.querySelectorAll(".block-why-rocks .scroller li");

    gsap.utils.toArray(listItems).forEach((li, i) => {
      gsap.to(li.querySelector(".txt-lg"), {
        keyframes: {
          scale: [1, 1, 1, 1, 1, 1, 1, 1.1, 1.2, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7],
          opacity: [0, 0.1, 0.2, 0.3, 0.5, 1, 0.6, 0.4, 0, 0, 0, 0, 0, 0, 0],
        },
        transformOrigin: "center",
        ease: "none",
        scrollTrigger: {
          trigger: li,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          snap: {
            snapTo: li,
            duration: 1,
            delay: 0,
          },
        },
      });

      gsap.to(li.querySelector("p"), {
        keyframes: {
          opacity: [0, 0.5, 1, 0.8, 0.4, 0.3, 0, 0, 0, 0],
        },
        transformOrigin: "center",
        ease: "none",
        scrollTrigger: {
          trigger: li,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          snap: {
            snapTo: li,
            duration: 0.1,
            delay: 0,
          },
        },
      });
    });
  }

  // svg animation
  if (document.getElementById("svg")) {
    ScrollTrigger.create({
      trigger: "#svg",
      start: "top 90%",
      end: "bottom top",
      toggleClass: "active",
    });
  }

  // lines animations
  var lines = document.querySelectorAll(".line-animated");
  if (lines) {
    gsap.utils.toArray(lines).forEach((line, i) => {
      gsap.to(line, {
        keyframes: {
          scaleX: [0, 1],
        },
        transformOrigin: "center",
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          duration: 0.2,
          toggleActions: "restart pause resume reverse",
        },
      });
    });
  }

  // image mask overlay
  if (document.querySelector(".block-hello")) {
    var overlayContainer = document.querySelector(".block-hello .image");
    var overlay = document.querySelector(".block-hello .image .overlay");

    overlayContainer.onmousemove = (e) => {
      const rect = overlayContainer.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      overlay.style.setProperty("--mouse-x", `${x}px`);
      overlay.style.setProperty("--mouse-y", `${y}px`);
    };

    overlayContainer.ontouchmove = (e) => {
      const rect = overlayContainer.getBoundingClientRect();
      var touch = e.touches[0] || e.changedTouches[0];
      const x = touch.clientX - rect.left,
        y = touch.clientY - rect.top;

      overlay.style.setProperty("--mouse-x", `${x}px`);
      overlay.style.setProperty("--mouse-y", `${y}px`);
    };
  }

  // case page menu

  if (document.querySelector(".case-main")) {
    ScrollTrigger.create({
      trigger: ".case-main",
      start: "top top",
      end: "bottom 10%",
      toggleClass: { targets: ".stick-navigation", className: "stick-navigation--dark" },
    });
  }

  // footer visibility
  if (document.querySelector(".page-footer")) {
    ScrollTrigger.create({
      trigger: ".page-content",
      start: "bottom bottom",
      onEnter: function () {
        document.querySelector(".page-footer").classList.add("is-active");
      },
      onLeaveBack: function () {
        document.querySelector(".page-footer").classList.remove("is-active");
      },
    });

    // footer title
    function getMousePos(e) {
      var doc = document.documentElement || document.body;
      if (e.type == "touchstart" || e.type == "touchmove" || e.type == "touchend" || e.type == "touchcancel") {
        var touch = e.touches[0] || e.changedTouches[0];
        var pos = {
          x: touch.clientX,
        };
      } else if (e.type == "mousedown" || e.type == "mouseup" || e.type == "mousemove" || e.type == "mouseover" || e.type == "mouseout" || e.type == "mouseenter" || e.type == "mouseleave") {
        var pos = {
          x: e ? e.pageX : window.event.clientX + doc.scrollLeft - doc.clientLeft,
        };
      }

      return pos;
    }

    document.querySelector(".footer-title").onmousemove = moveMouse;
    document.querySelector(".footer-title").ontouchmove = moveMouse;
    document.querySelector(".footer-title").onmouseleave = function () {
      this.removeAttribute("style");
    };
  }

  function moveMouse(evt) {
    if (window.screen.width >= 1024) {
      var pos = getMousePos(evt),
        followMouse = document.querySelector(".footer-title");
      followMouseX = followMouse.clientWidth / 2;
      followMouse.style.backgroundPosition = pos.x - followMouseX + "px " + "0px";
    }
  }

  // block fulcrum way animations
  if (document.querySelector(".block-way")) {
    var images = document.querySelectorAll(".about-box-image-animated");

    gsap.utils.toArray(images).forEach((item, i) => {
      gsap.to(item, {
        transformOrigin: "center",
        ease: "none",
        y: "-80%",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "top 20%",
          scrub: 1,
        },
      });
    });
  }

  if (document.querySelector(".page-intro-case .image")) {
    var imageCase = document.querySelector(".page-intro-case .image");

    gsap.to(imageCase, {
      transformOrigin: "center",
      ease: "none",
      y: "-30%",
      scrollTrigger: {
        trigger: imageCase,
        start: "top bottom",
        scrub: 1,
      },
    });
  }

  window.addEventListener("load", function () {
    ScrollTrigger.refresh();
  });

  imagesLoaded("body", function () {
    ScrollTrigger.refresh();
  });

  $(".page-intro-home .img-animation").addClass("animated");

  if (document.querySelector(".animated-input")) {
    var n = [];
    document.querySelectorAll(".animated-input").forEach((el, i) => {
      n[i] = bodymovin.loadAnimation({
        container: el, // required
        path: "../data.json", // required
        renderer: "svg", // required
        loop: false, // optional
        autoplay: false, // optional
        name: "input" + n, // optional
      });

      el.querySelector("input").addEventListener("focus", () => {
        n[i].playSegments([0, 225], true);
      });
    });
  }

  $(".card-effect-02 .card")
    .on("mouseenter", function () {
      $(this).parent().addClass("active");
    })
    .on("mouseleave", function () {
      $(this).parent().removeClass("active");
    });

  const blackout = document.querySelector(".blackout .overlay");
  if (blackout) {
    blackout.addEventListener("mousemove", (e) => {
      blackout.style.left = e.clientX + "px";
      blackout.style.top = e.clientY + "px";
    });
  }
});

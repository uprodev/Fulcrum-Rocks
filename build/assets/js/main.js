if(jQuery(document).ready((function(e){if(e(".navbar-toggler").on("click",(function(){e(this).toggleClass("active"),e(".header").toggleClass("mob-menu-opened"),e(".main-navigation").toggleClass("active")})),e(".main-navigation li, .stick-navigation li").each((function(){e(this).find(".dropdown").length&&e(this).addClass("parent")})),e(".swiper-01").length){let i,o=!1;function t(){let t=e(window).width();t<640&&o&&(i.destroy(),o=!1),t>=640&&!o&&(i=new Swiper(".swiper-01",{loop:!1,slidesPerView:"auto",spaceBetween:10,navigation:{nextEl:".swiper-01 .swiper-button-next",prevEl:".swiper-01 .swiper-button-prev"},on:{init:function(){o=!0,ScrollTrigger.refresh()}},breakpoints:{768:{spaceBetween:20}}}))}t(),e(window).on("resize",(function(){t()}))}if(e(".swiper-02").length&&document.querySelectorAll(".swiper-02").forEach(e=>{new Swiper(e,{loop:!1,slidesPerView:"auto",spaceBetween:10,scrollbar:{el:e.querySelector(".swiper-02-scrollbar"),draggable:!0,hide:!1},navigation:{nextEl:e.querySelector(".swiper-02 .swiper-button-next"),prevEl:e.querySelector(".swiper-02 .swiper-button-prev")},breakpoints:{768:{spaceBetween:20}},on:{init:function(){ScrollTrigger.refresh()}}})}),e(".swiper-03").length){new Swiper(".swiper-03",{loop:!1,slidesPerView:"auto",spaceBetween:10,scrollbar:{el:".swiper-03-scrollbar",draggable:!0,hide:!1},navigation:{nextEl:".swiper-03 .swiper-button-next",prevEl:".swiper-03 .swiper-button-prev"},breakpoints:{768:{spaceBetween:20}},breakpoints:{1024:{slidesPerView:4,spaceBetween:20}},on:{init:function(){ScrollTrigger.refresh()}}})}if(e(".swiper-04").length){new Swiper(".swiper-04",{loop:!1,slidesPerView:"auto",spaceBetween:10,scrollbar:{el:".swiper-04-scrollbar",draggable:!0,hide:!1},navigation:{nextEl:".swiper-04 .swiper-button-next",prevEl:".swiper-04 .swiper-button-prev"},breakpoints:{768:{spaceBetween:20},1024:{slidesPerView:4,spaceBetween:20}},on:{init:function(){ScrollTrigger.refresh()}}})}if(e(".swiper-05").length&&document.querySelectorAll(".swiper-05").forEach(e=>{new Swiper(e,{loop:!1,slidesPerView:"auto",spaceBetween:10,scrollbar:{el:e.querySelector(".swiper-05-scrollbar"),draggable:!0,hide:!1},navigation:{nextEl:e.querySelector(".swiper-button-next"),prevEl:e.querySelector(".swiper-button-prev")},breakpoints:{768:{spaceBetween:20},1024:{slidesPerView:4,spaceBetween:20}},on:{init:function(){ScrollTrigger.refresh()}}})}),e(".swiper-06").length){new Swiper(".swiper-06",{loop:!1,slidesPerView:"auto",spaceBetween:10,scrollbar:{el:".swiper-06-scrollbar",draggable:!0,hide:!1},navigation:{nextEl:".swiper-06 .swiper-button-next",prevEl:".swiper-06 .swiper-button-prev"},breakpoints:{768:{slidesPerView:40,spaceBetween:0,allowTouchMove:!1}},on:{init:function(){ScrollTrigger.refresh()}}})}function i(){var t=e(window).scrollTop();t>e(".page-intro").outerHeight()+e(".header").outerHeight()?e(".stick-navigation").addClass("active"):e(".stick-navigation").removeClass("active"),t>0?e(".header").addClass("fixed"):e(".header").removeClass("fixed")}function o(){e(window).width()>=1024?e(".page-wrapper").css("padding-bottom",e(".footer-wrapper").outerHeight()):e(".page-wrapper").removeAttr("style")}function r(e){e.removeClass("opened"),e.find(".projects-filter-sort-dropdown-list").slideUp(0);var t=e.find("input:checked");if(t.length>0){e.addClass("selected");for(var i="",o=0;o<t.length;o++)i+=t[o].dataset.value,o<t.length-1&&(i+=", ");e.find(".projects-filter-sort-dropdown-selected span").text(i)}else{e.removeClass("selected");i=e.find(".projects-filter-sort-dropdown-selected span").attr("data-text");e.find(".projects-filter-sort-dropdown-selected span").text(i)}}function n(){var t=e(".page-intro-home .image"),i=t.outerWidth(),o=t.outerHeight(),r=t.offset().top+o,n=t.offset().left+i,s=.323*i,a=.203*o;e(".switch").width(s),e(".switch").height(a),e(".switch").css({top:r-a-.07*o,left:n-.213*i})}e(".swiper-051").length&&document.querySelectorAll(".swiper-051").forEach(e=>{new Swiper(e,{loop:!1,slidesPerView:"auto",spaceBetween:10,scrollbar:{el:e.querySelector(".swiper-051-scrollbar"),draggable:!0,hide:!1},navigation:{nextEl:e.querySelector(".swiper-button-next"),prevEl:e.querySelector(".swiper-button-prev")},breakpoints:{768:{spaceBetween:20},1024:{slidesPerView:3,spaceBetween:0}},on:{init:function(){ScrollTrigger.refresh()}}})}),customScrollOptions={touchbehavior:!0,overflowx:!0,overflowy:!1,cursorcolor:"#E9EEF1",cursorborder:"none",cursorwidth:"4px"},e(".scrollable").niceScroll(customScrollOptions),i(),e(window).on("scroll",(function(){i()})),o(),e(window).on("resize",(function(){o()})),e(".contact-form-01 .animated-input input").on("blur",(function(){"true"===e(this).attr("aria-invalid")?e(this).parents(".animated-input").addClass("error"):e(this).parents(".animated-input").removeClass("error")})),e(".contact-form-01 form button[type=submit]").on("mouseup",(function(){console.log("click"),setTimeout(()=>{e(".contact-form-01 ").find(".animated-input input").each((function(){console.log(e(this),e(this).attr("aria-invalid")),"true"===e(this).attr("aria-invalid")?e(this).parents(".animated-input").addClass("error"):e(this).parents(".animated-input").removeClass("error")}))},600)})),e.jStyling.createSelect(e("select.select")),e("[type=tel]").mask("+1 (999)-999-99-99"),e("#contactForm").on("submit",(function(t){var i=!1;e(this).find("[required]").each((function(){""===e(this).val()?(e(this).addClass("error"),e(this).parent().addClass("error"),i=!0):(e(this).removeClass("error"),e(this).parent().removeClass("error"))})),i&&t.preventDefault()})),e("#contactForm [required]").on("blur",(function(){""!==e(this).val()&&(e(this).removeClass("error"),e(this).parent().removeClass("error"))})),e(".tabs .tab-panel.active").show(),e(".tab-menu a").on("click",(function(t){if(t.preventDefault(),!e(this).hasClass("filter-show-more")&&!e(this).parent().hasClass("active")){var i=e(".tabs .tab-panel.active"),o=e(e(this).attr("href"));e(".tab-menu li.active").removeClass("active"),e(this).parent().addClass("active"),i.removeClass("active").hide(),o.addClass("active").fadeIn(400)}})),e(".projects-filter-sort-dropdown").on("click",(function(e){e.stopPropagation()})),e(".projects-filter-sort-dropdown-selected").on("click",(function(t){t.stopPropagation(),e(this).parent().hasClass("opened")?r(e(this).parent()):(e(this).parent().addClass("opened"),e(this).next().slideDown(0))})),e(document).on("click",(function(){e(".projects-filter-sort-dropdown.opened").length&&r(e(".projects-filter-sort-dropdown.opened"))})),e(".switch").length&&(imagesLoaded("body",(function(){n(),e(window).width()>=1024&&e(".switch").show()})),e(window).on("resize",(function(){n(),e(window).width()<1024&&e(".switch").hide()})),e(".switch").on("click",(function(){var t=function(){var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="100%",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var i=e.offsetWidth;t.style.overflow="scroll";var o=e.offsetWidth;return i==o&&(o=t.clientWidth),document.body.removeChild(t),i-o}();e(this).hasClass("active")?(e(this).removeClass("active"),e("html, body").removeAttr("style"),e(".header").css({right:0}),e(".page-content, .page-footer").show(),e(".blackout").fadeOut(200)):(e(this).addClass("active"),e("html, body").css({overflow:"hidden"}),e(".header").css({right:t}),e(".page-content, .page-footer").hide(),e(".blackout").fadeIn(200))}))),e(".block-team .btn-centered .button").on("click",(function(t){t.preventDefault(),e(this).parent().hide().next(".team-more-list").slideDown(400,(function(){ScrollTrigger.refresh()}))})),e(".filter-show-more").on("click",(function(t){t.preventDefault();e(this).hasClass("shown")?(e(this).removeClass("shown").find("span span").text("See more +"),e(".projects-filter .tab-nav li.hidden").hide()):(e(this).addClass("shown").find("span span").text("See less +"),e(".projects-filter .tab-nav li.hidden").show())})),e(".accordion-toggler").on("click",(function(){e(this).toggleClass("accordion-active").next(".accordion-panel").slideToggle(300)})),e(".accordion-toggler-panel .num, .accordion-toggler-panel .title, .accordion-toggler-panel .toggler").on("click",(function(){var t=e(this).closest(".accordion-toggler-panel");t.hasClass("accordion-active")?t.removeClass("accordion-active").find(".accordion-panel").slideUp(300,(function(){t.find(".accordion-base").slideDown(100)})):t.addClass("accordion-active").find(".accordion-base").slideUp(100,(function(){t.find(".accordion-panel").slideDown(300)}))}))})),document.getElementById("contactFormMessage")){var observe;function initTextarea(){var e=document.getElementById("contactFormMessage");function t(){e.style.height="auto",e.style.height=e.scrollHeight+"px"}function i(){window.setTimeout(t,0)}observe(e,"change",t),observe(e,"cut",i),observe(e,"paste",i),observe(e,"drop",i),observe(e,"keydown",i),t()}observe=window.attachEvent?function(e,t,i){e.attachEvent("on"+t,i)}:function(e,t,i){e.addEventListener(t,i,!1)},initTextarea()}
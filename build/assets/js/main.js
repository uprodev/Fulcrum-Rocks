jQuery(document).ready((function(e){e(".navbar-toggler").on("click",(function(){e(this).toggleClass("active"),e(".main-navigation").toggleClass("active")})),e(".main-navigation li, .stick-navigation li").each((function(){e(this).find(".dropdown").length&&e(this).addClass("parent")}));let i,n=!1;function t(){let t=e(window).width();t<640&&n&&(i.destroy(),n=!1),t>=640&&!n&&(i=new Swiper(".swiper-01",{loop:!1,slidesPerView:"auto",spaceBetween:10,mousewheel:{releaseOnEdges:!0},navigation:{nextEl:".swiper-01 .swiper-button-next",prevEl:".swiper-01 .swiper-button-prev"},on:{init:function(){n=!0},reachBeginning:function(){e(".swiper-01 .swiper-button-prev").addClass("disabled"),e(".swiper-01 .swiper-button-next").removeClass("disabled")},reachEnd:function(){e(".swiper-01 .swiper-button-next").addClass("disabled"),e(".swiper-01 .swiper-button-prev").removeClass("disabled")}},breakpoints:{768:{spaceBetween:20}}}))}t(),e(window).on("resize",(function(){t()}));new Swiper(".swiper-02",{loop:!1,slidesPerView:"auto",spaceBetween:10,mousewheel:{releaseOnEdges:!0},scrollbar:{el:".swiper-02-scrollbar",draggable:!0,hide:!1},navigation:{nextEl:".swiper-02 .swiper-button-next",prevEl:".swiper-02 .swiper-button-prev"},breakpoints:{768:{spaceBetween:20}},on:{reachBeginning:function(){e(".swiper-02 .swiper-button-prev").addClass("disabled"),e(".swiper-02 .swiper-button-next").removeClass("disabled")},reachEnd:function(){e(".swiper-02 .swiper-button-next").addClass("disabled"),e(".swiper-02 .swiper-button-prev").removeClass("disabled")}}});function s(){e(window).scrollTop()>e(".page-intro").outerHeight()+e(".header").outerHeight()?e(".stick-navigation").addClass("active"):e(".stick-navigation").removeClass("active")}function o(){e(window).width()>=1024?e(".page-wrapper").css("padding-bottom",e(".footer-wrapper").outerHeight()):e(".page-wrapper").removeAttr("style")}e(".block-why-rocks .btn-wrap .button").on("click",(function(i){i.preventDefault();var n=e(".block-why-rocks").next();e("html,body").animate({scrollTop:n.offset().top},500)})),s(),e(window).on("scroll",(function(){s()})),o(),e(window).on("resize",(function(){o()}))}));
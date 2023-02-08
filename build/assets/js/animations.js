jQuery(document).ready((function(e){!function(e){e.forEach(e=>{e.anim&&e.anim.progress(1).kill();var t=0;e.dataset.delay&&(t=e.dataset.delay),Splitting({target:e,by:"chars",key:null,whitespace:!0});var o=e.querySelectorAll(".char");e.anim=gsap.to(o,{scrollTrigger:{trigger:e,toggleActions:"play resume resume resume",start:"top bottom"},delay:t,duration:.3,ease:"linear",y:"0",opacity:1,stagger:.04})}),splitsSet=!0,e.forEach(e=>{e.style.visibility="visible"})}(document.querySelectorAll(".split"));var t=document.querySelectorAll(".txt-gradient");if(gsap.utils.toArray(t).forEach((t,o)=>{var r=0;t.dataset.delay&&(r=t.dataset.delay);var n="linear-gradient(90deg, #0d99ff 0%, #99faf4 100%)";e(".page-services--green").length&&(n="linear-gradient(90deg, #30db74 0%, #E9EEF1 100%)"),e(".page-services--purple").length&&(n="linear-gradient(90deg, #695cff 0%, #E9EEF1 100%)"),e(".page-services--orange").length&&(n="linear-gradient(90deg, #ffae33 0%, #E9EEF1 100%)"),e(".page-services--yellow").length&&(n="linear-gradient(90deg, #ffd426 0%, #E9EEF1 100%)"),gsap.to(t,{scrollTrigger:{markers:!1,trigger:t,scrub:!1,toggleActions:"play resume resume resume",start:"top bottom"},backgroundImage:n,duration:1,delay:r})}),e(".card-effect-05").on("mouseenter",(function(){var t=e(this).attr("data-color");e(this).parents(".block-stages").addClass("color-"+t)})).on("mouseleave",(function(){var t=e(this).attr("data-color");e(this).parents(".block-stages").removeClass("color-"+t)})),document.querySelector(".block-why-rocks")){e(".block-why-rocks .button").removeAttr("href"),ScrollTrigger.create({trigger:".block-why-rocks",start:"top top",end:"bottom bottom",toggleClass:{targets:".block-why-rocks .btn-centered",className:"is-fixed"},pin:".block-why-rocks .text",pinSpacing:!1,onEnter:function(){document.querySelector(".block-why-rocks").classList.add("pinned-bottom"),document.querySelector(".block-why-rocks").classList.remove("pinned-top"),e(".block-why-rocks .button").bind("click",(function(t){t.preventDefault();var o=e(".block-why-rocks").next();e("html,body").animate({scrollTop:o.offset().top},500)}))},onEnterBack:function(){document.querySelector(".block-why-rocks").classList.remove("pinned-bottom"),document.querySelector(".block-why-rocks").classList.add("pinned-top"),e(".block-why-rocks .button").bind("click",(function(t){t.preventDefault();var o=e(".block-why-rocks").prev();e("html,body").animate({scrollTop:o.offset().top+o.outerHeight()-e(window).height()},500)}))},onLeave:function(){document.querySelector(".block-why-rocks").classList.add("pinned-bottom"),document.querySelector(".block-why-rocks").classList.remove("pinned-top"),e(".block-why-rocks .button").unbind("click")},onLeaveBack:function(){document.querySelector(".block-why-rocks").classList.remove("pinned-bottom"),document.querySelector(".block-why-rocks").classList.add("pinned-top"),e(".block-why-rocks .button").unbind("click")}});var o=document.querySelectorAll(".block-why-rocks .scroller li");gsap.utils.toArray(o).forEach((e,t)=>{gsap.to(e.querySelector(".txt-lg"),{keyframes:{scale:[1,1,1,1,1,1,1,1.1,1.2,2,3,4,5,6,7,7,7,7,7],opacity:[0,.1,.2,.3,.5,1,.6,.4,0,0,0,0,0,0,0]},transformOrigin:"center",ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:1,snap:{snapTo:e,duration:1,delay:0}}}),gsap.to(e.querySelector("p"),{keyframes:{opacity:[0,.5,1,.8,.4,.3,0,0,0,0]},transformOrigin:"center",ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:1,snap:{snapTo:e,duration:.1,delay:0}}})})}document.getElementById("svg")&&ScrollTrigger.create({trigger:"#svg",start:"top 90%",end:"bottom top",toggleClass:"active"});var r=document.querySelectorAll(".line-animated");if(r&&gsap.utils.toArray(r).forEach((e,t)=>{gsap.to(e,{keyframes:{scaleX:[0,1]},transformOrigin:"center",ease:"none",scrollTrigger:{trigger:e,start:"top 80%",duration:.2,toggleActions:"restart pause resume reverse"}})}),document.querySelector(".block-hello")){var n=document.querySelector(".block-hello .image"),c=document.querySelector(".block-hello .image .overlay");n.onmousemove=e=>{const t=n.getBoundingClientRect(),o=e.clientX-t.left,r=e.clientY-t.top;c.style.setProperty("--mouse-x",o+"px"),c.style.setProperty("--mouse-y",r+"px")},n.ontouchmove=e=>{const t=n.getBoundingClientRect();var o=e.touches[0]||e.changedTouches[0];const r=o.clientX-t.left,a=o.clientY-t.top;c.style.setProperty("--mouse-x",r+"px"),c.style.setProperty("--mouse-y",a+"px")}}if(document.querySelector(".case-main")&&ScrollTrigger.create({trigger:".case-main",start:"top top",end:"bottom 10%",toggleClass:{targets:".stick-navigation",className:"stick-navigation--dark"}}),document.querySelector(".page-footer")){ScrollTrigger.create({trigger:".page-content",start:"bottom bottom",onEnter:function(){document.querySelector(".page-footer").classList.add("is-active")},onLeaveBack:function(){document.querySelector(".page-footer").classList.remove("is-active")}}),document.querySelector(".footer-title").onmousemove=a,document.querySelector(".footer-title").ontouchmove=a,document.querySelector(".footer-title").onmouseleave=function(){this.removeAttribute("style")}}function a(e){if(window.screen.width>=1024){var t=function(e){var t=document.documentElement||document.body;if("touchstart"==e.type||"touchmove"==e.type||"touchend"==e.type||"touchcancel"==e.type)var o={x:(e.touches[0]||e.changedTouches[0]).clientX};else if("mousedown"==e.type||"mouseup"==e.type||"mousemove"==e.type||"mouseover"==e.type||"mouseout"==e.type||"mouseenter"==e.type||"mouseleave"==e.type)o={x:e?e.pageX:window.event.clientX+t.scrollLeft-t.clientLeft};return o}(e),o=document.querySelector(".footer-title");followMouseX=o.clientWidth/2,o.style.backgroundPosition=t.x-followMouseX+"px 0px"}}if(document.querySelector(".block-way")){var s=document.querySelectorAll(".about-box-image-animated");gsap.utils.toArray(s).forEach((e,t)=>{gsap.to(e,{transformOrigin:"center",ease:"none",y:"-80%",scrollTrigger:{trigger:e,start:"top bottom",end:"top 20%",scrub:1}})})}if(document.querySelector(".page-intro-case .image")){var l=document.querySelector(".page-intro-case .image");gsap.to(l,{transformOrigin:"center",ease:"none",y:"-30%",scrollTrigger:{trigger:l,start:"top bottom",scrub:1}})}if(window.addEventListener("load",(function(){ScrollTrigger.refresh()})),imagesLoaded("body",(function(){ScrollTrigger.refresh()})),e(".page-intro-home .img-animation").addClass("animated"),document.querySelector(".animated-input")){var i=[];document.querySelectorAll(".animated-input").forEach((e,t)=>{i[t]=bodymovin.loadAnimation({container:e,path:"../data.json",renderer:"svg",loop:!1,autoplay:!1,name:"input"+i}),e.querySelector("input").addEventListener("focus",()=>{i[t].playSegments([0,225],!0)})})}e(".card-effect-02 .card").on("mouseenter",(function(){e(this).parent().addClass("active")})).on("mouseleave",(function(){e(this).parent().removeClass("active")}));const u=document.querySelector(".blackout .overlay");u&&u.addEventListener("mousemove",e=>{u.style.left=e.clientX+"px",u.style.top=e.clientY+"px"})}));
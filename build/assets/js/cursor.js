jQuery(document).ready((function(t){var e='\n  <div class="cursor">\n    <div class="cursor-body">\n        <div class="cursor-text" data-c="details">\n          <div class="in">\n            <div class="o">\n              <div class="t">Details</div>\n            </div>\n          </div>\n        </div>\n        <div class="cursor-bg"><div class="b"></div></div>\n    </div>\n  </div>';t("body").append(e),(e={delay:1,_x:0,_y:0,endX:window.innerWidth/2,endY:window.innerHeight/2,$cursor:document.querySelector(".cursor"),$html:document.querySelector("html"),init:function(){this.setupEventListeners(),this.animateDotOutline()},setupEventListeners:function(){var t=this;document.querySelectorAll(".card-cursor .card").forEach((function(e){e.addEventListener("mouseenter",(function(e){t.$html.dataset.cursorType="details"})),e.addEventListener("mouseleave",(function(){t.$html.dataset.cursorType="none"}))})),document.addEventListener("mousemove",(function(e){t.endX=e.clientX,t.endY=e.clientY,t.$cursor.style.top=t.endY+"px",t.$cursor.style.left=t.endX+"px"}))},animateDotOutline:function(){this._x+=(this.endX-this._x)/this.delay,this._y+=(this.endY-this._y)/this.delay,this.$cursor.style.top=this._y+"px",this.$cursor.style.left=this._x+"px",requestAnimationFrame(this.animateDotOutline.bind(this))}}).init()}));
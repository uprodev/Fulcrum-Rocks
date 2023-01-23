jQuery(document).ready(function ($) {
  var cursor = `
  <div class="cursor">
    <div class="cursor-body">
        <div class="cursor-text" data-c="details">
          <div class="in">
            <div class="o">
              <div class="t">Details</div>
            </div>
          </div>
        </div>
        <div class="cursor-bg"><div class="b"></div></div>
    </div>
  </div>`;
  $("body").append(cursor);

  var cursor = {
    delay: 1,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    $cursor: document.querySelector(".cursor"),
    $html: document.querySelector("html"),

    init: function () {
      this.setupEventListeners();
      this.animateDotOutline();
    },

    setupEventListeners: function () {
      var self = this;

      document.querySelectorAll(".card-cursor .card").forEach(function (el) {
        el.addEventListener("mouseenter", function (e) {
          self.$html.dataset.cursorType = "details";
        });
        el.addEventListener("mouseleave", function () {
          self.$html.dataset.cursorType = "none";
        });
      });

      document.addEventListener("mousemove", function (e) {
        self.endX = e.clientX;
        self.endY = e.clientY;
        self.$cursor.style.top = self.endY + "px";
        self.$cursor.style.left = self.endX + "px";
      });
    },

    animateDotOutline: function () {
      var self = this;

      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$cursor.style.top = self._y + "px";
      self.$cursor.style.left = self._x + "px";

      requestAnimationFrame(this.animateDotOutline.bind(self));
    },
  };
  cursor.init();
});

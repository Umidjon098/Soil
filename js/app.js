const sr = ScrollReveal({
  origin: "top",
  distance: "-50px",
  duration: 2000,
  reset: true,
});

sr.reveal(".title", { delay: 100 });
sr.reveal(".text", { delay: 100 });
sr.reveal("#owl-01", { delay: 500 });
sr.reveal(".box", { interval: 500 });
sr.reveal(".stat-count", { interval: 500 });

window.addEventListener("scroll", function () {
  if (this.scrollY > 2800) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 3000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  }
});

$(document).ready(function () {
  function isPreviewIntersecting() {
    var imageElement = $("#preview");
    var imageRect = imageElement[0].getBoundingClientRect();
    var windowWidth = $(window).width();
    return imageRect.right > windowWidth;
  }

  $(document).on("mousemove", function (event) {
    $(".image-list__item")
      .on("mouseenter", function (e) {
        $("#preview").attr("src", e.target.src).css({ display: "inline" });
      })
      .on("mouseleave", function (e) {
        $("#preview").attr("src", e.target.src).css({ display: "none" });
      });

    if (isPreviewIntersecting()) {
      $("#preview").css({
        position: "absolute",
        top: event.pageY + 20,
        left: event.pageX - 350,
      });
    } else {
      $("#preview").css({
        position: "absolute",
        top: event.pageY + 20,
        left: event.pageX + 20,
      });
    }
  });
});

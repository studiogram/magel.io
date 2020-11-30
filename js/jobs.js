/* Jobs animation */

$(".main__jobs__single header").on("click", (e) => {
  $(".main__jobs__single header").not(e.currentTarget).next().slideUp();
  $(e.currentTarget).children("h3").toggleClass("main__jobs__single--active");
  $(e.currentTarget).next().slideToggle();
});

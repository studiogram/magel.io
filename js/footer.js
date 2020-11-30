/* Blur */
const blurryElement = $(".footer__contact__blurry");
const blurryElementParent = blurryElement.parents(".footer");
$(window).on("load resize", () => {
  blurryElement
    .width(blurryElementParent.width())
    .height(blurryElementParent.height());
});

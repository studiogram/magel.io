/* Initial animation */
const infoTl = gsap.timeline({ onComplete: hoverAnimation });

infoTl
  .fromTo(
    $(".main__info__schema figure"),
    { autoAlpha: 0, yPercent: 4 },
    { autoAlpha: 1, yPercent: 0, duration: 0.75, stagger: 0.3, ease: "none" }
  )
  .fromTo(
    $(".main__info__schema svg path, .main__info__schema svg line"),
    { drawSVG: "0%" },
    { drawSVG: "100%", duration: 0.3, delay: 0.3, stagger: 0.3, ease: "none" },
    "<"
  );

/* Animation triggered after inital animation */
function hoverAnimation() {
  if ($("body").hasClass("mobile")) {
    hoverMobileAnimation();
  }
  $(".main__info__schema__plan")
    .on("mouseenter", (e) => {
      const enterTl = gsap.timeline();
      enterTl
        .to(
          $(".main__info__schema__plan").not(e.currentTarget).parent(),
          {
            autoAlpha: 0.3,
            duration: 0.5,
          },
          "<"
        )
        .fromTo(
          $(e.currentTarget).nextAll("figcaption"),
          { autoAlpha: 0, yPercent: 20 },
          { autoAlpha: 1, yPercent: 0, duration: 0.5 },
          "<"
        );
    })
    .on("mouseleave", (e) => {
      const leaveTl = gsap.timeline();
      leaveTl
        .to($(".main__info__schema__plan").parent(), {
          autoAlpha: 1,
          duration: 0.5,
        })
        .to($("figcaption"), { autoAlpha: 0, duration: 0.5 }, "<");
    });
}

/* Mobile Animation triggered after inital animation */
function hoverMobileAnimation() {
  const plansLength = $(".main__info__schema__plan").length;
  let i = 0;
  setInterval(() => {
    $(".main__info__schema__plan").eq(i).trigger("mouseenter");
    setTimeout(() => {
      $(".main__info__schema__plan").eq(i).trigger("mouseleave");
      i < plansLength - 1 ? i++ : (i = 0);
    }, 1500);
  }, 3000);
}

/* Smooth scroll : */
$(".smooth").on("click", (e) => {
  e.preventDefault();
  const page = $(e.currentTarget).attr("href");
  $("html, body").animate({ scrollTop: $(page).offset().top }, 1000);
  return false;
});

/* Check if mobile : */
if (
  navigator.userAgent.match(
    /(android|iphone|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi
  )
) {
  $("body").addClass("mobile");
}

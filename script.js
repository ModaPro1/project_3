$(document).ready(function () {
  let scrollTop = $(window).scrollTop()
  function sectionAnimations() {
    if(scrollTop > $(".services").offset().top - 600) {
      $(".services").addClass("animate__animated animate__backInUp")
    }
    if(scrollTop > $(".menu").offset().top - 600) {
      $(".menu .boxes .box").addClass("animate__animated animate__fadeInUp")
    }
    if(scrollTop > $(".reservation").offset().top - 600) {
      $(".reservation form").addClass("animate__animated animate__fadeInUp")
    }
    if(scrollTop > $(".testimonials").offset().top - 600) {
      $(".testimonials").addClass("animate__animated animate__bounceIn")
    }
  }
  sectionAnimations()
  // Navbar Toggler
  $(".toggler-nav").on("click", () => {
    $(".navbar .items").toggleClass("show")
  })
  // Navbar Sticky
  $(window).on("scroll", () => {
    scrollTop = $(window).scrollTop()
    if(scrollTop >= 200 && scrollTop <= 500) {
      $(".landing .navbar").addClass("scrolling")
      $(".landing .navbar").removeClass("stick")
      $(".landing .navbar .items").removeClass("show")
    }else if(scrollTop >= 500) {
      $(".landing .navbar").removeClass("scrolling")
      $(".landing .navbar").addClass("stick")
    }else {
      $(".landing .navbar").removeClass("scrolling")
      $(".landing .navbar .items").removeClass("show")
    }
    sectionAnimations()
    // Add Scrolling class when scroll untill reaching 500 then remove it and add stick
    // For the animations

  })
})
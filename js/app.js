
  $(".nav-ico").on("click",function(){
    // $(this).find("#ico-rem").toggle()
     $(this).find("#ico-bar").slideDown()

     $(".mobile-down-menu").slideToggle(500)
  })

  $(".menu-mobile .mobile-down-menu .set a").click(function(){
    //  $(this).find("i").removeClass()
        
  
        $(".set.content").stop().slideUp(300)
        $(this).next().stop().slideToggle(500)
    })





  $(".tabMenu button").click(function(){
    $(".tabMenu button").css("background"," #1A2B48")
    $(this).css("background","#333")

    const btnInd=$(this).index()
    $(".tabMenu .tab-plg").stop().slideUp()

    $(".tabMenu .tab-plg").eq(btnInd).stop().slideDown()
})





// $('#slider').slick({
//   lazyLoad: 'ondemand',
//   slidesToShow: 4,
//   slidesToScroll: 1
  
// });
$('#slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});
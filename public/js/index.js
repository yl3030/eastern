$(".menu-icon").click(function () {
  $(".menu").addClass("active");
});
$(document).click(function (event) {
  var Mtarget = $(".menu");
  var Itarget = $(".menu-icon");
    if (!Mtarget.is(event.target) && Mtarget.has(event.target).length === 0) {
      if (!Itarget.is(event.target) && Itarget.has(event.target).length === 0) {
        $(".menu").removeClass("active");
      }
    }
});
$(".lang").children(".arrow").click(function(){
  console.log("click");
  $(this).toggleClass("active");
  $(this).parents(".lang").children(".choose-box").children(".inner").toggleClass("active")
})

// search
$(".search-btn").click(function(){
  $(this).parents(".search-box").toggleClass("active");
})

$(".footer-list .footer-title").click(function(){
    if($(window).width()<576){
        $(this).toggleClass("active");
        $(this).parents(".footer-list").children("ul").slideToggle(300);
    }
})

// main card
$(".card_arrow").click(function(){
  $(this).parents(".hide-box").children(".hide-content").slideToggle(300);
  $(this).toggleClass("active");
})

// list
$(".plus-icon").click(function(){
  $(this).toggleClass("active");
  $(this).parents(".main-list_box").children(".hide-box").slideToggle(200);
})
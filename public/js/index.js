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

$(".footer-list .footer-title").click(function(){
    if($(window).width()<576){
        $(this).toggleClass("active");
        $(this).parents(".footer-list").children("ul").slideToggle(300);
    }
})

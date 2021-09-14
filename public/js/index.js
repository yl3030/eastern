// menu
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
$(".menu-title").click(function () {
  if($(window).width()<768){
    $(this).parents(".item").children("ul").slideToggle(300);
  }
});
$(".menu-title").mouseenter(function () {
  if($(window).width()>=768){
    $(this).parents(".item").children("ul").slideDown(300);
  }
});
$(".menu-title").mouseleave(function () {
  if($(window).width()>=768){
    $(this).parents(".item").children("ul").hide();
  }
});
$(".lang")
  .children(".arrow")
  .click(function () {
    console.log("click");
    $(this).toggleClass("active");
    $(this)
      .parents(".lang")
      .children(".choose-box")
      .children(".inner")
      .toggleClass("active");
  });

// search
$(".search-btn").click(function () {
  $(this).parents(".search-box").toggleClass("active");
});

$(".footer-list .footer-title").click(function () {
  if ($(window).width() < 576) {
    $(this).toggleClass("active");
    $(this).parents(".footer-list").children("ul").slideToggle(300);
  }
});

// main card
$(".card_arrow").click(function () {
  $(this).parents(".hide-box").children(".hide-content").slideToggle(300);
  $(this).toggleClass("active");
});

// list
$(".plus-icon").click(function () {
  $(this).toggleClass("active");
  $(this).parents(".main-list_box").children(".hide-box").slideToggle(200);
});

// tab
$(".page-tab")
  .children(".nav-item")
  .each(function () {
    if ($(this).children("button").hasClass("active")) {
      var tab_title = $(this).text();
      $(".mobile-tab-title").text(tab_title);
    }
  });
$(".page-tab-mobile").click(function () {
  $(".page-tab-box").fadeIn(300);
});
$(".page-tab-bg").click(function () {
  $(".page-tab-box").fadeOut(300);
});
$(".page-tab")
  .children(".nav-item")
  .click(function () {
    if($(window).width()<768){
      $(".page-tab-box").fadeOut(300);
      var tab_title = $(this).text();
      $(".mobile-tab-title").empty().text(tab_title);
    }
    
  });

//ハンバーガーメニュー
$(function(){
    $(".openbtn,#global-nav a").on("click",function(){
        $("body").toggleClass("open");
    });

    $('a[href^="#"]').click(function(){
      var speed=500;
      var href = $(this).attr("href");
      if (href === "#") {
          var target = $("html");
        } else {
          var target = $(href);
        }
        var position = target.offset().top;
        $("html, body").animate({
          scrollTop: position
        }, speed);
        return false;
  });
});

  //スキッパー
$(".skippr-slider").skippr({
    transition: 'slide',
    autoPlay: true,
});
  //ライトボックス
lightbox.option({
    "wrapAround":true,
    "alwaysShowNavOnTouchDevices":true,
});
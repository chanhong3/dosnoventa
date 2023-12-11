$(document).ready(function(){
    var myHeader = $("#header");

    // 마우스 이벤트
    myHeader.on("mouseover", function(){
        $(this).addClass("over");
    });

    myHeader.on("mouseout", function(){
        $(this).removeClass("over");
    });

    // 스크롤 이벤트
    $(window).scroll(function(){
        if ($(window).scrollTop() > 200) {
            myHeader.css("top", "-60px");
        } else {
            myHeader.css("top", "0px");
        }
    });
});
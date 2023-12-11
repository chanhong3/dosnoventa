$(function(){
    /*
        #change 안에 div를 클릭하면 active 클래스를 토글한다.
        즉, 클릭할 때마다 active 클래스가 추가되거나 제거된다.
    */

    $('#change > div').click(function(){
        $(this).toggleClass('active');
        $(this).children('p').toggleClass('active');
    });
});


// $(".hover").mouseleave(
//     function () {
//         $(this).removeClass("hover");
//     }
// );
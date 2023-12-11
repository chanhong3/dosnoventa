$(document).ready(function(){
    var slider1 = $('.slider1');
    var slider2 = $('.slider2');
    var slideHeight1 = $('.slider1 img').height();
    var slideHeight2 = $('.slider2 img').height();
    var slideCount1 = $('.slider1 img').length;
    var slideCount2 = $('.slider2 img').length;
    var currentIndex1 = 0;
    var currentIndex2 = 0;

    // 슬라이드 초기 위치 설정
    slider1.css('transform', 'translateY(' + (-slideHeight1 * currentIndex1) + 'px)');
    slider2.css('transform', 'translateY(' + (-slideHeight2 * currentIndex2) + 'px)');

    // 스크롤 이벤트 처리
    $(window).on('wheel', function(event) {
        if (event.originalEvent.deltaY > 0) {
            // 스크롤 다운: 다음 슬라이드로 이동
            nextSlide();
        } else {
            // 스크롤 업: 이전 슬라이드로 이동
            prevSlide();
        }
    });

    // 다음 슬라이드로 이동
    function nextSlide() {
        if (currentIndex1 < slideCount1 - 1) {
            currentIndex1++;
        } else {
            currentIndex1 = 0;
        }
        if (currentIndex2 < slideCount2 - 1) {
            currentIndex2++;
        } else {
            currentIndex2 = 0;
        }
        updateSlider();
    }

    // 이전 슬라이드로 이동
    function prevSlide() {
        if (currentIndex1 > 0) {
            currentIndex1--;
        } else {
            currentIndex1 = slideCount1 - 1;
        }
        if (currentIndex2 > 0) {
            currentIndex2--;
        } else {
            currentIndex2 = slideCount2 - 1;
        }
        updateSlider();
    }

    // 슬라이더 업데이트
    function updateSlider() {
        slider1.css('transform', 'translateY(' + (-slideHeight1 * currentIndex1) + 'px)');
        slider2.css('transform', 'translateY(' + (-slideHeight2 * currentIndex2) + 'px)');
    }
});

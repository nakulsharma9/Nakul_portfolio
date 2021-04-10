$(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
        $("#toTop").fadeIn();
    } else {
        $("#toTop").fadeOut();
    }
});
$("#toTop").click(function () {
    $("html").animate({
        scrollTop: 0
    })
})
$('.hamburger').on('click', function () {
    $('.mobile-nav').addClass('open');
});
$('.times').on('click', function () {
    $('.mobile-nav').removeClass('open');
});
$('.mobile-nav ul li a').on("click", function () {
    $('.mobile-nav').removeClass('open');
});
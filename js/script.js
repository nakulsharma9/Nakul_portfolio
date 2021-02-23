$(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
        $("a.tbtn").fadeIn();
    }
    else {
        $("a.tbtn").fadeOut();
    }
});
$("a.tbtn").click(function () {
    $("html").animate({ scrollTop: 0 })
})
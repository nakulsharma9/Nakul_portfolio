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
window.onload = function () {
    setTimeout(function () {
        (document.getElementById('loader').style.display = "none").fadetoggle();
    }, 4000);
    (document.getElementById('content').style.display = "block").fadeOut;
}
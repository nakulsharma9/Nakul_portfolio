$(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
        $("a.tbtn").fadeIn();
    } else {
        $("a.tbtn").fadeOut();
    }
});
$("a.tbtn").click(function () {
    $("html").animate({
        scrollTop: 0
    })
})
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("content").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("content").style.visibility = "visible";
    }
};
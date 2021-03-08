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
let hamburger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    mobileNav.classList.add('open');
})
times.addEventListener('click', function () {
    mobileNav.classList.remove('open');

})

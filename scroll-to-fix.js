$(document).ready(function() {

    if ($("#home-boxes").length) {

        var boxes = $("#home-boxes .home-boxes");
        var content = $(".content");
        var threshold = $("#home-boxes").offset().top + 200;
        var previousScroll = 0;

        $(window).scroll(function(e) {

            var currentScroll = $(this).scrollTop();

            if (currentScroll > threshold) {
                boxes.addClass("home-boxes-left");
                content.addClass("content-left");
                if (currentScroll > previousScroll) {
                    window.setTimeout(showSubNav, 300);
                } else {
                    window.setTimeout(hideSubNav, 300);
                }
            } else {
                boxes.removeClass("home-boxes-left");
                content.removeClass("content-left");
            }

            previousScroll = currentScroll;
        });

        function hideSubNav() {
            $("[data-sub-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
        }

        function showSubNav() {
            $("[data-sub-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
        }
    }

});
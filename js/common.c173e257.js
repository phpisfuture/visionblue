"use strict";
!function (n) {
    function e(n, e) {
        var i = new Image;
        i.onload = function (n, i) {
            e && e(i)
        }, i.src = n
    }

    function i(n) {
        var e = {};
        e[cookie.name] = cookie.get(), $.ajax({
            url: s + "/users/me", headers: e, success: function (e) {
                userEmail = e.email, n && n(e)
            }, error: function (n) {
                n = n.responseText;
                try {
                    n = JSON.parse(n)
                } catch (n) {
                }
            }
        })
    }

    function r() {
        innerHeight < innerWidth && ($(".full-page").height(innerHeight), $(".full-page-nav").height(innerHeight - 50))
    }

    $('[href="#"]').click(function () {
        return !1
    }), $("[_src]").each(function (n, i) {
        var r = $(i), s = r.attr("_src");
        e(s, function () {
            var n = r.width();
            r.is("img") ? n ? r.width(n).attr("src", s) : r.attr("src", s) : "none" !== r.css("background-image") ? r.css("background-image", "url(" + s + ")") : r.children().css("background-image", "url(" + s + ")")
        })
    });
    var s = "https://passport.sensoro.com";
    n.getUserInfo = i, r(), $(window).resize(function () {
        r()
    }), function () {
        var n = $(".business img").length, e = Math.floor(Math.random() * n);
        $(".business img").eq(e).css("display", "block")
    }()
}(window);
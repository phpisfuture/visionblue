"use strict";
$(function () {
    function e() {
        innerHeight < innerWidth && ($(".full-page").height(innerHeight), $(".full-page-nav").height(innerHeight - 50))
    }

    function i(e, r) {
        var t = new Image;
        t.onload = function () {
            r && r(this.src)
        }, t.onerror = function () {
            if (c[this.src]) {
                var e = this.src.replace("@3x", "");
                return e = e.replace("@2x", ""), t.src = e
            }
            if (c[this.src] = !0, -1 !== this.src.indexOf("@3")) {
                var n = this.src.replace("@3", "@2");
                i(n, r), r && r(n)
            }
        };
        var n = "";
        if (-1 !== e.indexOf("@")) {
            var o = -1 === e.indexOf("@1") ? e.split("@2") : e.split("@1");
            o.splice(1, 0, "@3"), n = o.join("")
        } else {
            var o = e.split(".png");
            o.splice(1, 0, "@3x.png"), n = o.join("")
        }
        n = n.replace('"', ""), n = n.replace('"', ""), t.src = n
    }

    function r(e) {
        e.is(".full-side .after") && console.log(e), e.is("img") ? i(e.attr("src"), function (i) {
            e.attr("src", i)
        }) : i(e.css("background-image").match(/\(([^\)]+)\)/).pop(), function (i) {
            e.css("background-image", "url(" + i + ")")
        })
    }

    e(), $(window).resize(function () {
        e()
    });
    var t = detect.parse(navigator.userAgent), n = t.browser;
    "ie" === n.family.toLowerCase() && parseFloat(n.major) >= 10 || setTimeout(function () {

    }, 0);
    var o = (innerHeight, $(".honor .title")),
        s = (o.height(), $(".honor .ms"), $(".honor .nk"), $(".honor .ea"), $(".customer")),
        a = (s.height(), $(".customer .title")),
        c = (a.height(), new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}}), $("#trigger-sensor"), $(".node-4aa .shadow"), $(".chip-shadow"), {});
    $(".retina").each(function (e, i) {
        r($(i))
    }), t.device && "MZ-PRO 7-S" === t.device.family && t.source.indexOf("MZBrowser/7.4.1") > -1 && ($(".sub-title").delay(250), $(".sub-title2").delay(450), $(".play-video").delay(650), $(".man-sloagn, .sub-title, .play-video, .sub-title2").animate({opacity: 1}, 1500, "linear"))
});
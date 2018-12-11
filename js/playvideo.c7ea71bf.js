"use strict";
!function () {
    function e() {
        clearTimeout(h), u.hasClass("show") || u.addClass("show")
    }

    function i() {
        $("nav, .partner-banner").addClass("show")
    }

    var n = $(".video-contain"), o = $(".video-contain-village"), a = $(".video-contain-safe"),
        s = $(".video-contain-location"), l = $(".video-contain-location");
    if (n.length) {
        var d = $("body");
        if (2 === n.length) {
            var t = videojs("my-video"), r = videojs("video-village");
            n.on("mousewheel", function (e) {
                return !1
            }), a.find("> .close-btn").click(function () {
                "ontransitionend" in window ? a.addClass("hide-video") : (a.addClass("remove-video"), d.removeClass("hide-scroll-bar")), t.pause()
            }), o.find("> .close-btn").click(function () {
                "ontransitionend" in window ? o.addClass("hide-video") : (o.addClass("remove-video"), d.removeClass("hide-scroll-bar")), r.pause()
            }), n.on("transitionend", function (e) {
                e.target === this && ($(this).addClass("remove-video").removeClass("hide-video"), d.removeClass("hide-scroll-bar"))
            }), $("#paly-unboxing , #paly-unboxing1").click(function () {
                return a.removeClass("remove-video hide-video"), d.addClass("hide-scroll-bar"), !1
            }), $("#paly-unboxing2 , #paly-unboxing3").click(function () {
                return o.removeClass("remove-video hide-video"), d.addClass("hide-scroll-bar"), !1
            })
        } else {
            var l = videojs("video-lbs");
            n.on("mousewheel", function (e) {
                return !1
            }), s.find("> .close-btn").click(function () {
                "ontransitionend" in window ? s.addClass("hide-video") : (s.addClass("remove-video"), d.removeClass("hide-scroll-bar")), l.pause()
            }), n.on("transitionend", function (e) {
                e.target === this && ($(this).addClass("remove-video").removeClass("hide-video"), d.removeClass("hide-scroll-bar"))
            }), $("#paly-unboxing4").click(function () {
                return s.removeClass("remove-video hide-video"), d.addClass("hide-scroll-bar"), !1
            })
        }
    }
    var c = $("video.video-bg"), v = $("img.index-bg"), u = $(".billboard");
    v.css("opacity", 0);
    var f, h = setTimeout(e, 800), p = navigator.userAgent, m = p.indexOf("Android") > -1 || p.indexOf("Adr") > -1;
    if (m) {
        c.attr("x5-video-player-type", "h5"), c.attr("x-webkit-airplay", !0), c.attr("x5-video-player-fullscreen", !1), c.attr("x5-video-ignore-metadata", !0), c.attr("object-fit", "fill"), c.attr("object-position", "center center");
        var g = c.parent(), b = document.createElement("span");
        b.id = "android-play-btn", f = $(b), f.css("backgroundImage", 'url("img/safe/icons/icon_xiaofang_play@2x.png")'), f.css("backgroundSize", "cover"), f.css("width", "53px"), f.css("height", "53px"), f.css("zIndex", 3), f.css("position", "absolute"), f.css("left", "50%"), f.css("marginLeft", "-26px"), f.css("top", "50%"), f.css("marginTop", "-26px"), f.on("click", function () {
            console.log(222), c[0].play(), f.hide()
        }), g.append(b), c[0].onpause = function () {
            console.log("1111"), f.show()
        }
    } else c.attr("autoplay", !0), function () {
        document.addEventListener("WeixinJSBridgeReady", function () {
            console.log("WeixinJSBridgeReady"), c[0].play()
        }, !1), c.on("canplay", function () {
        })
    }();
    Modernizr.csstransitions && $("body").on("transitionend", function () {
        return e(), !1
    }).addClass("show"), function (e, i) {
        if (e) {
            var n = new Image;
            n.onload = i, n.src = e
        }
    }($(".index-bg").attr("src"), i), document.addEventListener("visibilitychange", function () {
        document.hidden ? c[0].pause() : c[0].play()
    }, !1)
}();
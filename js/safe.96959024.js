"use strict";
!function (e, t) {
    var i = e(".time-cont .time-mes"), o = e(".serve-time"), s = e(".time-cont .time-thirty"),
        c = e(".desc span.time-mes-desc"), n = e(".desc span.time-thirty-desc"),
        m = (document.documentElement.clientHeight, o.height(), o.offset().top - 50);
    e(window).scroll(function () {
        var e = document.documentElement.scrollTop, t = e - m;
        t > 0 && t < 1e3 ? (i.hide(), c.hide(), s.show(), n.show()) : (i.show(), c.show(), s.hide(), n.hide())
    })
}(jQuery);
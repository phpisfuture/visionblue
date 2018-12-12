"use strict";
! function () {
    for (var n = [], i = ["huoban1", "huoban1", "huoban1", "huoba1", "huoban1", ], a = i.length, u = {}; n.length < 24;) {
        var h = Math.floor(Math.random() * a);
        u[h] || (n.push(i[h]), u[h] = !0)
    }
    n.indexOf("tony") < 0 && n.splice(Math.round(Math.random() * n.length), 1, "tony"), String.prototype.includes || (String.prototype.includes = function (n, i) {
        return "number" != typeof i && (i = 0), !(i + n.length > this.length) && -1 !== this.indexOf(n, i)
    }), $(".parterner-item").each(function (i, a) {
        var u = n[i],
            h = "png";
        if (u.includes(".")) {
            var g = u.split(/\s*\.\s*/);
            u = g[0], h = g[1]
        }
        $(a).css("background-image", "url(img/about/wall/" + u + h + ")")
    })
}();
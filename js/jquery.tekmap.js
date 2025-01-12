// TekMap by comunicatek.com  under the mit license.
// Author:  Dani Prados
// http://code.comunicatek.com
// version 0.6
(function(b, c, k) {
    function p(a, f) {
        var e = new c.maps.LatLng(a.lat, a.lng),
            d, g, l, h = {
                position: e,
                map: f,
                draggable: a.draggable
            },
            j, m, k;
        a.icon && ("object" === typeof a.icon ? (g = new c.maps.Size(a.icon.size[0], a.icon.size[0]), d = a.icon.base ? new c.maps.Point(a.icon.base[0], a.icon.base[1]) : new c.maps.Point(0, 0), l = new c.maps.Point(a.icon.origin[0], a.icon.origin[1]), d = new c.maps.MarkerImage(a.icon.url, g, d, l), b.extend(h, h, {
            icon: d
        })) : b.extend(h, h, {
            icon: a.icon
        }));
        a.shadow && ("object" === typeof a.shadow ? (g = new c.maps.Size(a.shadow.size[0],
            a.shadow.size[0]), d = a.shadow.base ? new c.maps.Point(a.shadow.base[0], a.shadow.base[1]) : new c.maps.Point(0, 0), l = new c.maps.Point(a.shadow.origin[0], a.shadow.origin[1]), d = new c.maps.MarkerImage(a.shadow.url, g, d, l), b.extend(h, h, {
            shadow: d
        })) : b.extend(h, h, {
            shadow: a.shadow
        }));
        j = new c.maps.Marker(h);
        a.key && (b.extend(j, {
            tekkey: a.key
        }), b.fn.TekMap.markersAssoc[a.key] = j);
        b.fn.TekMap.markers.push(j);
        a.infowindow && (m = new c.maps.InfoWindow({
            content: a.infowindow
        }), c.maps.event.addListener(j, "click", function() {
            m.open(f,
                j);
            a.infowindowclosePrevious && (n && n !== m && n.close(), n = m)
        }));
        k = a.drag || b.noop;
        a.draggable && c.maps.event.addListener(j, "dragend", function() {
            k(j)
        });
        a.deferred && a.deferred.resolve(e)
    }

    function q(a, f) {
        var e = b.fn.TekMap.opts,
            d = e.mapoptions,
            g, l = b(f);
        g = new c.maps.LatLng(e.lat, e.lng);
        d.center = g;
        d = new c.maps.Map(f, d);
        e.click && c.maps.event.addListener(d, "click", e.click);
        for (g = 0; g < e.markers.length; g += 1) p(e.markers[g], d);
        l.data("tekmap", d)
    }
    var n = null;
    b.fn.TekMap = function(a) {
        k.console && k.console.log && k.console.log("tekmap initialized" +
            this);
        b.fn.TekMap.opts = b.extend({}, b.fn.TekMap.defaults, a);
        b.fn.TekMap.markers = [];
        b.fn.TekMap.markersAssoc = {};
        return this.each(q)
    };
    b.fn.TekMarker = function(a) {
        var f, e = this;
        b.fn.TekMap.p = b.extend({}, b.fn.TekMarker.defaults, a);
        return a.addres ? (f = new c.maps.Geocoder, f.geocode({
                address: a.addres
            }, function(d, f) {
                f === c.maps.GeocoderStatus.OK ? b.each(d, function(a, c) {
                    b.fn.TekMap.p.lat = c.geometry.location.lat();
                    b.fn.TekMap.p.lng = c.geometry.location.lng();
                    e.each(b.fn.TekMarker.marker)
                }) : a.deferred.reject()
            }), this) :
            this.each(b.fn.TekMarker.marker)
    };
    b.fn.TekMarker.marker = function() {
        var a = b.fn.TekMap.p,
            c = b.fn.TekMap.map;
        c || (c = b(this).data("tekmap"));
        p(a, c)
    };
    b.fn.TekMarker.trigger = function(a, f, e) {
        b.fn.TekMap.markersAssoc[a] && (c.maps.event.trigger(b.fn.TekMap.markersAssoc[a], f), "function" === typeof e && e(b.fn.TekMap.markersAssoc[a]))
    };
    b.fn.TekMarker.remove = function(a) {
        b.fn.TekMap.markersAssoc[a] && (b.fn.TekMap.markersAssoc[a].setMap(null), delete b.fn.TekMap.markersAssoc[a])
    };
    b.fn.TekMap.markers = [];
    b.fn.TekMap.defaults = {
        lat:22.591242,
        lng:88.416848,
        click: b.noop,
        mapoptions: {
            zoom:13,
            mapTypeId: c.maps.MapTypeId.ROADMAP,
            scrollwheel: !1
        },
        markers: []
    };
    b.fn.TekMarker.defaults = {
        draggable: !1,
        infowindowclosePrevious: !0
    }
})(jQuery, google, window);
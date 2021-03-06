(function ($) {
	
	// fixed by S
	var index = 'gravatar_id=';
	
	$.fn.identicon5 = function (w) {
		settings = jQuery.extend({
			replace: false,
			rotate: true,
			size: 32
		}, w);
		var z = function (a, b) {
			if (b.length >= 2) {
				a.beginPath();
				a.moveTo(b[0], b[1]);
				for (var i = 2; i < b.length; i++) {
					a.lineTo(b[i], b[i + 1]);
					i++
				}
				a.fill()
			}
		};
		var A = function (a, b) {
			switch (a) {
			case 0:
				a = [0.5, 1, 1, 0, 1, 1];
				break;
			case 1:
				a = [0.5, 0, 1, 0, 0.5, 1, 0, 1];
				break;
			case 2:
				a = [0.5, 0, 1, 0, 1, 1, 0.5, 1, 1, 0.5];
				break;
			case 3:
				a = [0, 0.5, 0.5, 0, 1, 0.5, 0.5, 1, 0.5, 0.5];
				break;
			case 4:
				a = [0, 0.5, 1, 0, 1, 1, 0, 1, 1, 0.5];
				break;
			case 5:
				a = [1, 0, 1, 1, 0.5, 1, 1, 0.5, 0.5, 0.5];
				break;
			case 6:
				a = [0, 0, 1, 0, 1, 0.5, 0, 0, 0.5, 1, 0, 1];
				break;
			case 7:
				a = [0, 0, 0.5, 0, 1, 0.5, 0.5, 1, 0, 1, 0.5, 0.5];
				break;
			case 8:
				a = [0.5, 0, 0.5, 0.5, 1, 0.5, 1, 1, 0.5, 1, 0.5, 0.5, 0, 0.5];
				break;
			case 9:
				a = [0, 0, 1, 0, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 0, 1];
				break;
			case 10:
				a = [0, 0.5, 0.5, 1, 1, 0.5, 0.5, 0, 1, 0, 1, 1, 0, 1];
				break;
			case 11:
				a = [0.5, 0, 1, 0, 1, 1, 0.5, 1, 1, 0.75, 0.5, 0.5, 1, 0.25];
				break;
			case 12:
				a = [0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0, 1, 0.5, 0.5, 1, 0.5, 0.5, 0, 1];
				break;
			case 13:
				a = [0, 0, 1, 0, 1, 1, 0, 1, 1, 0.5, 0.5, 0.25, 0.5, 0.75, 0, 0.5, 0.5, 0.25];
				break;
			case 14:
				a = [0, 0.5, 0.5, 0.5, 0.5, 0, 1, 0, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 0, 1];
				break;
			default:
				a = [0, 0, 1, 0, 0.5, 0.5, 0.5, 0, 0, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 0, 1];
				break
			}
			for (var i = 0; i < a.length; i++) {
				a[i] = a[i] * b
			}
			return a
		};
		var B = function (a, b) {
			var c;
			var d = b / 5;
			var e = d / 2;
			var j = 0;
			var k = 0;
			a.strokeRect(0, 0, d, d);
			for (var i = 0; i < 15; i++) {
				c = A(i, d);
				a.save();
				a.translate(e + (j * d), e + (k * d));
				for (var p = 0; p < c.length; p++) {
					c[p] -= e
				}
				z(a, c);
				a.strokeRect(-e, -e, d, d);
				a.restore();
				if (j >= 4) {
					j = 0;
					k++
				} else {
					j++
				}
			}
		};
		var C = function (a, b, x, y, c, d, e) {
			var f = e / 2;
			a.save();
			a.translate(x, y);
			a.rotate(d * Math.PI / 180);
			a.save();
			a.translate(f, f);
			var g = [];
			for (var p = 0; p < b.length; p++) {
				g[p] = b[p] - f
			}
			a.rotate(c);
			z(a, g);
			a.restore();
			a.restore()
		};
		var D = function (a, b) {
			switch (a) {
			case 0:
				a = [];
				break;
			case 1:
				a = [0, 0, 1, 0, 1, 1, 0, 1];
				break;
			case 2:
				a = [0.5, 0, 1, 0.5, 0.5, 1, 0, 0.5];
				break;
			case 3:
				a = [0, 0, 1, 0, 1, 1, 0, 1, 0, 0.5, 0.5, 1, 1, 0.5, 0.5, 0, 0, 0.5];
				break;
			case 4:
				a = [0.25, 0, 0.75, 0, 0.5, 0.5, 1, 0.25, 1, 0.75, 0.5, 0.5, 0.75, 1, 0.25, 1, 0.5, 0.5, 0, 0.75, 0, 0.25, 0.5, 0.5];
				break;
			case 5:
				a = [0, 0, 0.5, 0.25, 1, 0, 0.75, 0.5, 1, 1, 0.5, 0.75, 0, 1, 0.25, 0.5];
				break;
			case 6:
				a = [0.33, 0.33, 0.67, 0.33, 0.67, 0.67, 0.33, 0.67];
				break;
			case 7:
				a = [0, 0, 0.33, 0, 0.33, 0.33, 0.66, 0.33, 0.67, 0, 1, 0, 1, 0.33, 0.67, 0.33, 0.67, 0.67, 1, 0.67, 1, 1, 0.67, 1, 0.67, 0.67, 0.33, 0.67, 0.33, 1, 0, 1, 0, 0.67, 0.33, 0.67, 0.33, 0.33, 0, 0.33];
				break;
			default:
				a = [0, 0, 1, 0, 0.5, 0.5, 0.5, 0, 0, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 0, 1];
				break
			}
			for (var i = 0; i < a.length; i++) {
				a[i] = a[i] * b
			}
			return a
		};
		var E = function (a, b, c, d) {
			var e = parseInt(b.substr(0, 1), 16);
			var f = parseInt(b.substr(1, 1), 16);
			var g = parseInt(b.substr(2, 1), 16) & 7;
			var h = Math.PI / 2;
			var i = h * (parseInt(b.substr(3, 1), 16) & 3);
			var j = h * (parseInt(b.substr(4, 1), 16) & 3);
			var k = parseInt(b.substr(5, 1), 16) % 2;
			var l = parseInt(b.substr(6, 2), 16);
			var m = parseInt(b.substr(8, 2), 16);
			var n = parseInt(b.substr(10, 2), 16);
			var o = parseInt(b.substr(12, 2), 16);
			var p = parseInt(b.substr(14, 2), 16);
			var q = parseInt(b.substr(16, 2), 16);
			var r = c / 3;
			var s = c;
			var t = A(e, r);
			a.fillStyle = "rgb(" + l + "," + m + "," + n + ")";
			if (d === false) {
				i = 0
			}
			C(a, t, 0, 0, i, 0, r);
			C(a, t, s, 0, i, 90, r);
			C(a, t, s, s, i, 180, r);
			C(a, t, 0, s, i, 270, r);
			if (d === false) {
				j = 0
			}
			var u = A(f, r);
			a.fillStyle = "rgb(" + o + "," + p + "," + q + ")";
			C(a, u, 0, r, j, 0, r);
			C(a, u, 2 * r, 0, j, 90, r);
			C(a, u, 3 * r, 2 * r, j, 180, r);
			C(a, u, r, 3 * r, j, 270, r);
			var v = D(g, r);
			if (k > 0 && (Math.abs(l - o) > 127 || Math.abs(m - p) > 127 || Math.abs(n - q) > 127)) {
				a.fillStyle = "rgb(" + o + "," + p + "," + q + ")"
			} else {
				a.fillStyle = "rgb(" + l + "," + m + "," + n + ")"
			}
			C(a, v, r, r, 0, 0, r)
		};
		
		// fixed by S
		if (settings.replace && this.is('img')) {
			return this.each(function () {
				var b = document.createElement('canvas');
				var src = this.src;
				var pos1 = src.indexOf(index) + index.length;
				var c = b.getContext("2d");
				var className = settings.className || 'IdentIcon5';
				var hash;
				if (b.getContext) {
					b.width = settings.size;
					b.height = settings.size;
					$(b).addClass(className);
					if (pos1 > 0) {
						hash = src.substr(pos1, 32);
						E(c, hash, settings.size, settings.rotate);
						$(this).replaceWith(b);
					}
				}
				return this;
			});
		}
		
		return this.each(function () {
			var a = $(this).html();
			var b = document.createElement('canvas');
			if (b.getContext) {
				b.width = settings.size;
				b.height = settings.size;
				var c = b.getContext("2d");
				if (a === "test") {
					B(c, settings.size)
				} else {
					E(c, a, settings.size, settings.rotate)
				}
				$(this).html('');
				$(this).append(b)
			} else {
				$(this).html('<img src="http://www.gravatar.com/avatar/' + a + '?s=' + settings.size + '&d=identicon&r=PG" width="' + settings.size + '" height="' + settings.size + '"/>')
			}
		});
	}
})(jQuery);
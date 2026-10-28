/* Md Faisal Kabir — Academic Portfolio: shared UI behaviour */
(function () {
	"use strict";

	/* Mobile nav toggle */
	var toggle = document.querySelector(".nav-toggle");
	var links = document.getElementById("nav-links");
	if (toggle && links) {
		toggle.addEventListener("click", function () {
			var open = links.classList.toggle("open");
			toggle.setAttribute("aria-expanded", open ? "true" : "false");
		});
		links.addEventListener("click", function (e) {
			if (e.target.tagName === "A") {
				links.classList.remove("open");
				toggle.setAttribute("aria-expanded", "false");
			}
		});
	}

	/* Sticky header shadow on scroll */
	var header = document.querySelector(".site-header");
	var onScroll = function () {
		if (header) header.classList.toggle("scrolled", window.scrollY > 8);
		if (toTop) toTop.classList.toggle("show", window.scrollY > 500);
	};

	/* Back-to-top button */
	var toTop = document.querySelector(".to-top");
	if (toTop) {
		toTop.addEventListener("click", function () {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	}

	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();

	/* Reveal on scroll */
	var reveal = document.querySelectorAll("[data-reveal]");
	if ("IntersectionObserver" in window && reveal.length) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
		reveal.forEach(function (el) { io.observe(el); });
	} else {
		reveal.forEach(function (el) { el.classList.add("is-visible"); });
	}

	/* Contact form: FormSubmit redirects back with ?sent=1 after delivery */
	if (/[?&]sent=1\b/.test(location.search)) {
		document.querySelectorAll(".form-sent").forEach(function (el) { el.hidden = false; });
	}

	/* Rotating 3D node network on the right of inner-page heroes.
	   Each page gets its own shape, picked from the URL. */
	var heroInner = document.querySelector(".hero.compact .hero-inner");
	if (heroInner && window.HTMLCanvasElement) {
		var page = (location.pathname.match(/\/(about|research|publications|projects|blog|cv)(?=\/|\.html|$)/) || [])[1];
		var shapes = {
			about: sphereShape, research: layersShape, publications: helixShape,
			projects: torusShape, blog: waveShape, cv: latticeShape
		};
		var shape = (shapes[page] || sphereShape)();
		var canvas = document.createElement("canvas");
		canvas.className = "hero-3d";
		canvas.setAttribute("aria-hidden", "true");
		heroInner.appendChild(canvas);
		heroInner.parentNode.classList.add("has-3d");
		runNetwork(canvas, shape);
	}

	function sphereShape() {
		var pts = [], n = 90, golden = Math.PI * (3 - Math.sqrt(5));
		for (var i = 0; i < n; i++) {
			var y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), a = i * golden;
			pts.push([Math.cos(a) * r, y, Math.sin(a) * r]);
		}
		return { pts: pts, edges: nearestEdges(pts, 3) };
	}

	function layersShape() {
		var pts = [], edges = [], layers = [], sizes = [3, 4, 4, 2];
		sizes.forEach(function (s, li) {
			var layer = [], x = -1 + li * (2 / (sizes.length - 1));
			for (var a = 0; a < s; a++) {
				for (var b = 0; b < s; b++) {
					layer.push(pts.length);
					pts.push([x, (a - (s - 1) / 2) * 0.42, (b - (s - 1) / 2) * 0.42]);
				}
			}
			layers.push(layer);
		});
		for (var l = 0; l < layers.length - 1; l++) {
			layers[l].forEach(function (i) {
				layers[l + 1].forEach(function (j) { if (Math.random() < 0.35) edges.push([i, j]); });
			});
		}
		return { pts: pts, edges: edges };
	}

	function helixShape() {
		var pts = [], edges = [], n = 26;
		for (var i = 0; i < n; i++) {
			var t = i / (n - 1), y = -0.85 + t * 1.7, a = t * Math.PI * 3.2;
			pts.push([Math.cos(a) * 0.55, y, Math.sin(a) * 0.55]);
			pts.push([Math.cos(a + Math.PI) * 0.55, y, Math.sin(a + Math.PI) * 0.55]);
			edges.push([i * 2, i * 2 + 1]);
			if (i > 0) { edges.push([i * 2 - 2, i * 2]); edges.push([i * 2 - 1, i * 2 + 1]); }
		}
		return { pts: pts, edges: edges };
	}

	function torusShape() {
		var pts = [], edges = [], U = 22, V = 7;
		for (var u = 0; u < U; u++) {
			for (var v = 0; v < V; v++) {
				var a = u / U * Math.PI * 2, b = v / V * Math.PI * 2;
				pts.push([(0.78 + 0.3 * Math.cos(b)) * Math.cos(a), 0.3 * Math.sin(b), (0.78 + 0.3 * Math.cos(b)) * Math.sin(a)]);
				edges.push([u * V + v, ((u + 1) % U) * V + v]);
				edges.push([u * V + v, u * V + (v + 1) % V]);
			}
		}
		return { pts: pts, edges: edges, tiltX: 0.9 };
	}

	function waveShape() {
		var pts = [], edges = [], G = 11;
		for (var a = 0; a < G; a++) {
			for (var b = 0; b < G; b++) {
				pts.push([(a / (G - 1)) * 2 - 1, 0, (b / (G - 1)) * 2 - 1]);
				if (a > 0) edges.push([(a - 1) * G + b, a * G + b]);
				if (b > 0) edges.push([a * G + b - 1, a * G + b]);
			}
		}
		return {
			pts: pts, edges: edges, tiltX: 0.55,
			update: function (t) {
				pts.forEach(function (p) {
					p[1] = 0.22 * Math.sin(p[0] * 3 + t * 1.4) * Math.cos(p[2] * 2.5 + t * 0.9);
				});
			}
		};
	}

	function latticeShape() {
		var pts = [], edges = [], G = 4, s = 1.5 / (G - 1);
		for (var x = 0; x < G; x++) {
			for (var y = 0; y < G; y++) {
				for (var z = 0; z < G; z++) {
					var i = pts.length;
					pts.push([x * s - 0.75, y * s - 0.75, z * s - 0.75]);
					if (x > 0) edges.push([i - G * G, i]);
					if (y > 0) edges.push([i - G, i]);
					if (z > 0) edges.push([i - 1, i]);
				}
			}
		}
		return { pts: pts, edges: edges };
	}

	function nearestEdges(pts, k) {
		var seen = {}, edges = [];
		pts.forEach(function (p, i) {
			pts.map(function (q, j) {
				var dx = p[0] - q[0], dy = p[1] - q[1], dz = p[2] - q[2];
				return { j: j, d: dx * dx + dy * dy + dz * dz };
			}).sort(function (a, b) { return a.d - b.d; }).slice(1, k + 1).forEach(function (o) {
				var key = Math.min(i, o.j) + "-" + Math.max(i, o.j);
				if (!seen[key]) { seen[key] = 1; edges.push([i, o.j]); }
			});
		});
		return edges;
	}

	function runNetwork(canvas, shape) {
		var ctx = canvas.getContext("2d");
		var colors = ["110,220,189", "164,151,255", "245,184,94"];
		var nodeColor = shape.pts.map(function (_, i) { return colors[i % 7 === 0 ? 2 : i % 2]; });
		var pulses = [];
		for (var p = 0; p < 9; p++) pulses.push(newPulse(Math.random()));
		var proj = [], order = shape.pts.map(function (_, i) { return i; });
		var mouseX = 0, mouseY = 0, mx = 0, my = 0;
		var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		var running = false, start = performance.now();

		function newPulse(t) {
			return { e: shape.edges[Math.floor(Math.random() * shape.edges.length)], t: t || 0, v: 0.006 + Math.random() * 0.01 };
		}

		function resize() {
			var dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = canvas.clientWidth * dpr;
			canvas.height = canvas.clientHeight * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}

		function frame(now) {
			var w = canvas.clientWidth, h = canvas.clientHeight;
			if (!w || !h) { if (running) requestAnimationFrame(frame); return; }
			var t = (now - start) / 1000;
			mx += (mouseX - mx) * 0.05;
			my += (mouseY - my) * 0.05;
			if (shape.update) shape.update(t);

			var ay = t * 0.22 + mx * 0.6, ax = (shape.tiltX || 0.3) + my * 0.3;
			var cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
			var R = Math.min(w, h) * 0.4, ox = w / 2, oy = h / 2;
			shape.pts.forEach(function (pt, i) {
				var x = pt[0] * cy - pt[2] * sy, z = pt[0] * sy + pt[2] * cy;
				var y = pt[1] * cx - z * sx; z = pt[1] * sx + z * cx;
				var d = 3 / (3 + z);
				proj[i] = { x: ox + x * R * d, y: oy + y * R * d, d: d };
			});

			ctx.clearRect(0, 0, w, h);
			ctx.lineWidth = 1;
			shape.edges.forEach(function (e) {
				var a = proj[e[0]], b = proj[e[1]];
				var alpha = Math.max(0.05, Math.min(0.4, ((a.d + b.d) / 2 - 0.72) * 0.9));
				ctx.strokeStyle = "rgba(150,225,205," + alpha.toFixed(3) + ")";
				ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
			});

			order.sort(function (i, j) { return proj[i].d - proj[j].d; });
			order.forEach(function (i) {
				var q = proj[i], r = 1.4 + 2.6 * q.d * q.d, a = Math.min(1, 0.35 + (q.d - 0.75) * 1.4);
				ctx.fillStyle = "rgba(" + nodeColor[i] + "," + (a * 0.18).toFixed(3) + ")";
				ctx.beginPath(); ctx.arc(q.x, q.y, r * 2.6, 0, 6.283); ctx.fill();
				ctx.fillStyle = "rgba(" + nodeColor[i] + "," + a.toFixed(3) + ")";
				ctx.beginPath(); ctx.arc(q.x, q.y, r, 0, 6.283); ctx.fill();
			});

			pulses.forEach(function (pl, k) {
				if (!still) pl.t += pl.v;
				if (pl.t >= 1) { pulses[k] = newPulse(); return; }
				var a = proj[pl.e[0]], b = proj[pl.e[1]];
				var x = a.x + (b.x - a.x) * pl.t, y = a.y + (b.y - a.y) * pl.t;
				ctx.fillStyle = "rgba(255,236,200,0.22)";
				ctx.beginPath(); ctx.arc(x, y, 6, 0, 6.283); ctx.fill();
				ctx.fillStyle = "rgba(255,248,232,0.95)";
				ctx.beginPath(); ctx.arc(x, y, 2, 0, 6.283); ctx.fill();
			});

			if (running && !still) requestAnimationFrame(frame);
		}

		function play() {
			if (running) return;
			running = true;
			requestAnimationFrame(frame);
		}

		resize();
		window.addEventListener("resize", function () { resize(); if (still) frame(performance.now()); });
		window.addEventListener("pointermove", function (e) {
			mouseX = e.clientX / window.innerWidth - 0.5;
			mouseY = e.clientY / window.innerHeight - 0.5;
		}, { passive: true });

		if (still) {
			start = performance.now() - 4000;
			frame(performance.now());
		} else if ("IntersectionObserver" in window) {
			new IntersectionObserver(function (entries) {
				if (entries[0].isIntersecting) play(); else running = false;
			}).observe(canvas);
		} else {
			play();
		}
		requestAnimationFrame(function () { canvas.classList.add("is-ready"); });
	}

	/* 3D tilt on cards and the portrait (mouse/trackpad only, respects reduced motion) */
	var canTilt = window.matchMedia &&
		window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
		!window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (canTilt) {
		document.querySelectorAll(".card-hover, .pub, .hero-visual").forEach(function (el) {
			var max = el.classList.contains("hero-visual") ? 14 : 6;
			var glare = document.createElement("span");
			glare.className = "tilt-glare";
			glare.setAttribute("aria-hidden", "true");
			el.classList.add("tilt");
			el.appendChild(glare);

			el.addEventListener("pointermove", function (e) {
				var r = el.getBoundingClientRect();
				var x = (e.clientX - r.left) / r.width;
				var y = (e.clientY - r.top) / r.height;
				el.style.setProperty("--ry", ((x - 0.5) * 2 * max).toFixed(2) + "deg");
				el.style.setProperty("--rx", ((0.5 - y) * 2 * max).toFixed(2) + "deg");
				el.style.setProperty("--gx", (x * 100).toFixed(1) + "%");
				el.style.setProperty("--gy", (y * 100).toFixed(1) + "%");
				el.classList.add("is-tilting");
			});
			el.addEventListener("pointerleave", function () {
				el.classList.remove("is-tilting");
			});
		});
	}
})();

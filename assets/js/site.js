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

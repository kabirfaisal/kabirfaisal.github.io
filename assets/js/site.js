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
		}, { threshold: 0.12 });
		reveal.forEach(function (el) { io.observe(el); });
	} else {
		reveal.forEach(function (el) { el.classList.add("is-visible"); });
	}
})();

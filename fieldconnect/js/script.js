/* ============================================================
   Field Connect — interaccions de la landing
   ============================================================ */
(function () {
  "use strict";

  /* --- Topbar: estat "scrolled" en baixar --- */
  var topbar = document.querySelector(".topbar");
  function onScroll() {
    if (!topbar) return;
    topbar.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Reveal en fer scroll --- */
  var revealTargets = document.querySelectorAll(
    ".pillar, .municipi-card, .big-statement, .sub-statement, " +
    ".split-col, .contacte-form, .contacte-info, .section-intro, .expansio-note"
  );

  if ("IntersectionObserver" in window && revealTargets.length) {
    revealTargets.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 3) * 90 + "ms";
    });

    var io = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* --- Scroll suau per als enllaços interns (amb offset del header) --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

})();

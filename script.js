/* ============================================================
   QS Consulting — Minimal interactions
   - Scroll reveal (IntersectionObserver)
   - Booking link injection (set BOOKING_URL below)
   - Year in footer
   - Header background shift on scroll
   ============================================================ */

// ⬇️  Drop your booking link here when ready (Calendly, Cal.com, etc.)
// TEMP: points at email so the CTA works. Replace with your scheduler URL.
const BOOKING_URL = "mailto:hroman@qslean.com?subject=Free%2030-min%20agency%20audit";

(function () {
  "use strict";

  /* ------------ Booking link wiring ------------ */
  if (BOOKING_URL && BOOKING_URL !== "#book") {
    document.querySelectorAll("[data-booking-link], .btn--primary[href='#book']").forEach((el) => {
      el.setAttribute("href", BOOKING_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ------------ Year in footer ------------ */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------ Scroll reveal ------------ */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ------------ Header solidify on scroll ------------ */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        header.style.background = "rgba(218, 206, 190, 0.96)";
        header.style.boxShadow = "0 1px 0 rgba(43, 50, 61, 0.06)";
      } else {
        header.style.background = "rgba(218, 206, 190, 0.85)";
        header.style.boxShadow = "none";
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------ Smooth anchor offset (sticky header) ------------ */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerH = (header && header.offsetHeight) || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
})();

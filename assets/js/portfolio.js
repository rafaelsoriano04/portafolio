(function () {
  const nav = document.getElementById("mainNav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const scrollTop = document.getElementById("scrollTop");

  function onScroll() {
    const scrolled = window.scrollY > 30;
    nav.classList.toggle("scrolled", scrolled);
    scrollTop.classList.toggle("show", window.scrollY > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
  navLinks.addEventListener("click", function (event) {
    if (event.target.closest("a")) navLinks.classList.remove("open");
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(function (element) {
    observer.observe(element);
  });
})();

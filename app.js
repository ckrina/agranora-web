// Agranora — small enhancements for the static export
(function () {
  const benefits = [
    "Less administrative burden",
    "Better control over farm information",
    "Improved traceability and operational order",
    "Easier compliance, certification, and reporting",
    "A tool adapted to real field work",
    "Designed with the farmer at the center",
  ];

  const checkSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  const list = document.getElementById("benefits-list");
  if (list) {
    list.innerHTML = benefits
      .map(
        (b) => `
        <li class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-sage-200/70">
          <span class="size-7 rounded-full bg-sage-600 text-sage-900 grid place-items-center shrink-0">${checkSvg}</span>
          <span class="font-medium text-sage-900">${b}</span>
        </li>`
      )
      .join("");
  }

  const form = document.getElementById("cta-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        const btn = form.querySelector("button");
        const original = btn.textContent;
        btn.textContent = "Thanks — we'll be in touch";
        btn.disabled = true;
        input.value = "";
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
        }, 3000);
      }
    });
  }
})();

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector("button");
  button?.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});


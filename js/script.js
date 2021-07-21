"use stirct";
const categories = document.querySelectorAll(".blury-card");

categories.forEach((e) => {
  const row = e.closest(".row");
  const panel = row.querySelector(".categories__panel");
  e.addEventListener("mouseenter", (event) => {
    panel.classList.add("_disable");
  });
  e.addEventListener("mouseleave", (event) => {
    panel.classList.remove("_disable");
  });
});

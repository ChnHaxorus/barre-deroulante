const settings = document.querySelector(".div_container");

settings.addEventListener("click", () => {
  if (menu.style.height === "250px") {
    settings.style.transform = "none";
    menu.style.height = "0";
    setTimeout(() => {
      nav.style.display = "none";
    }, 50);
  } else {
    settings.style.transform = "rotate(90deg)";
    menu.style.height = "250px";
    setTimeout(() => {
      nav.style.display = "flex";
    }, 167);
  }
});

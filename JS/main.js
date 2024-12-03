function toggleMenu() {
  const menu = document.getElementById("myLinks");
  const topnav = document.querySelector(".topnav");
  const body = document.body;

  // Toggle menu visibility
  if (menu.style.display === "block") {
    menu.style.display = "none";
    topnav.classList.remove("menu-open");
    body.style.overflow = "auto"; // Re-enable scrolling
  } else {
    menu.style.display = "block";
    topnav.classList.add("menu-open");
    body.style.overflow = "hidden"; // Disable scrolling
  }
}

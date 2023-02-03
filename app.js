const features = document.getElementById("features");
const menu_deroulant1 = document.getElementById("menu_deroulant");
const company = document.getElementById("company");
const menu_deroulant2 = document.getElementById("menu_deroulant2");
const up = document.getElementById("up");
const down = document.getElementById("down");
const up2 = document.getElementById("up2");
const down2 = document.getElementById("down2");
const burger = document.getElementById("burger");

features.addEventListener("click", () => {
  console.log("click");
  if (menu_deroulant1.style.display === "block") {
    menu_deroulant1.style.display = "none";
    up.style.display = "none";
    down.style.display = "inline";
  } else {
    menu_deroulant1.style.display = "block";
    up.style.display = "inline";
    down.style.display = "none";
  }
});
company.addEventListener("click", () => {
  console.log("click");
  if (menu_deroulant2.style.display === "block") {
    menu_deroulant2.style.display = "none";
    up2.style.display = "none";
    down2.style.display = "inline";
  } else {
    menu_deroulant2.style.display = "block";
    up2.style.display = "inline";
    down2.style.display = "none";
  }
});

burger.addEventListener("click", () => {
  console.log("click");
});

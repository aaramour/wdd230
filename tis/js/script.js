const hamburger_btn = document.querySelector("#hamburger");

const nav = document.querySelector("nav");

hamburger_btn.addEventListener(
  "click",
  (nav) => {
    toggleMenu(document.querySelector("nav"), document.querySelector("#hamburger"));
  },
  false
);

window.onresize = () => {if (window.innerWidth > 800) {nav.removeAttribute("class")}else{nav.setAttribute("class", "closed")}};


function toggleMenu(item, button) {
  console.log("The Menu Toggle Worked!");
  console.log(item.classList);
  if (item.classList.contains("closed")) {
    item.removeAttribute("class");
    item.setAttribute("class", "open");
    button.removeAttribute("src");
    button.setAttribute(
      "src",
      "https://aaramour.github.io/wdd230/tis/images/x_btn.png"
    );
  } else {
    item.setAttribute("class", "closed");
    button.removeAttribute("src");
    button.setAttribute(
      "src",
      "https://aaramour.github.io/wdd230/tis/images/burger_btn.png"
    );
  }
}

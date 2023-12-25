// Bouncing
document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
  element.addEventListener("mouseover", (e) => bounce(e.target));
});

function bounce(letter) {
  if (!letter.classList.contains("bounce")) {
    letter.classList.add("bounce");
    setTimeout(function () {
      letter.classList.remove("bounce");
    }, 1000);
  }
}

// Cursor
const cursor = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const Button = document.querySelector(".button");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  cursorOutline.animate(
    {
      left: e.pageX + "px",
      top: e.pageY + "px",
    },
    {
      duration: 500,
      fill: "forwards",
    }
  );
});

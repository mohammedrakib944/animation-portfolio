// Bouncing Letters
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

// cursor
const cursor = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  if (e.target.tagName === "BUTTON" || e.target.tagName === "A") {
    cursor.style.transform = "translate(-50%, -50%) scale(6)";
  } else {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  }

  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

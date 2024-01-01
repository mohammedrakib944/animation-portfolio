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
const cursorOutline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", (e) => {
  if (e.target.tagName === "BUTTON" || e.target.tagName === "A") {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1.6)";
    cursorOutline.style.background = "white";
  } else {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
    cursorOutline.style.background = "transparent";
  }
  // Animated;
  cursorOutline.animate(
    {
      left: `${e.pageX}px`,
      top: `${e.pageY}px`,
    },
    {
      duration: 500,
      fill: "forwards",
    }
  );
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

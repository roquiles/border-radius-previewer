"use strict";

// ELEMENTS
const borderTopLeftRadius = document.getElementById("border-top-left-radius");
const borderTopRightRadius = document.getElementById("border-top-right-radius");
const borderBottomLeftRadius = document.getElementById(
  "border-bottom-left-radius"
);
const borderBottomRightRadius = document.getElementById(
  "border-bottom-right-radius"
);

const box = document.querySelector(".main-box");

const generatedCss = document.querySelector(".code-text");
const btnCopy = document.querySelector(".button");

// CHANGING BORDER RADIUS
borderTopLeftRadius.addEventListener("change", changeBorderRadius);
borderTopRightRadius.addEventListener("change", changeBorderRadius);
borderBottomLeftRadius.addEventListener("change", changeBorderRadius);
borderBottomRightRadius.addEventListener("change", changeBorderRadius);

function changeBorderRadius() {
  let value = this.value + "%";

  if (this.value >= 0 && this.value <= 100) {
    box.style[this.id] = value;

    // SHOW THE RESULTING CSS
    generatedCss.value = `border-radius: ${
      box.style.borderTopLeftRadius || 0
    }  ${box.style.borderTopRightRadius || 0}  ${
      box.style.borderBottomRightRadius || 0
    }  ${box.style.borderBottomLeftRadius || 0}`;
  }

  btnCopy.style.opacity = "100%";
}

// COPY TO CLIPBOARD
function copyText() {
  generatedCss.select();
  navigator.clipboard.writeText(cssStyle.value);
}

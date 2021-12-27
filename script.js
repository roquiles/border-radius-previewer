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

const cssStyle = document.querySelector(".code-text");

// CHANGING BORDER RADIUS
borderTopLeftRadius.addEventListener("change", changeBorderRadius);
borderTopRightRadius.addEventListener("change", changeBorderRadius);
borderBottomLeftRadius.addEventListener("change", changeBorderRadius);
borderBottomRightRadius.addEventListener("change", changeBorderRadius);

function changeBorderRadius() {
  let valor = this.value + "%";

  if (this.value >= 0 && this.value <= 100) {
    box.style[this.id] = valor;
  }
}

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

    // SHOW THE RESULTING CSS
    cssStyle.value = `border-radius: ${
      box.style.borderTopLeftRadius ? box.style.borderTopLeftRadius : 0
    }  ${
      box.style.borderTopRightRadius ? box.style.borderTopRightRadius : 0
    }  ${
      box.style.borderBottomRightRadius ? box.style.borderBottomRightRadius : 0
    }  ${
      box.style.borderBottomLeftRadius ? box.style.borderBottomLeftRadius : 0
    }`;
  }
}

// COPY TO CLIPBOARD
function copyText() {
  cssStyle.select();
  navigator.clipboard.writeText(cssStyle.value);
}

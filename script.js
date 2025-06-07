let display = document.getElementById("display");
let history = document.getElementById("history");

function addToDisplay(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
  history.innerText = "";
}

function deleteLast() {
  let current = display.innerText;
  display.innerText = current.length <= 1 ? "0" : current.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.innerText
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "*0.01"); // Replace % with *0.01 (more math-friendly)

    let result = Function("'use strict'; return (" + expression + ")")();

    if (!Number.isFinite(result)) throw new Error("Math Error");

    history.innerText = display.innerText + " =";
    display.innerText = result;
  } catch {
    display.innerText = "Error";
    history.innerText = "";
  }
}
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  change();
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", change);
};

function change() {
  const center = document.querySelector("#number");
  const tops = document.querySelector("#topsuite");
  const bottoms = document.querySelector("#bottomsuite");
  const suites = ["♦", "♥", "♠", "♣"];
  const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const suiteindex = Math.floor(Math.random() * suites.length);

  center.innerText = cards[Math.floor(Math.random() * cards.length)];
  tops.innerText = suites[suiteindex];
  bottoms.innerText = suites[suiteindex];

  if (suiteindex === 0 || suiteindex === 1) {
    tops.style.color = "red";
    bottoms.style.color = "red";
  } else {
    tops.style.color = "black";
    bottoms.style.color = "black";
  }
}

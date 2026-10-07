"use strict";

let amount = document.getElementById("amount");

let term = document.getElementById("term");

let interest = document.getElementById("interest");

let calculateRepayment = document.getElementById("calculate");

const para = document.getElementById("para");

function calculate() {
  let amountValue = Number(amount.value);
  let intValue = Number(interest.value) / 100 / 12;
  let termValue = Number(term.value) * 12;

  if (!amountValue || !intValue || !termValue) {
    para.innerHTML = "Please enter valid numbers in all fields.";
    return;
  }

  let repayment =
    (amountValue * (intValue * (1 + intValue) ** termValue)) /
    ((1 + intValue) ** termValue - 1);

  para.innerHTML = repayment.toFixed(2);
}

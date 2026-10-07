"use strict";
const amount = document.getElementById("amount");
const term = document.getElementById("term");
const interest = document.getElementById("interest");
const calculateRepayment = document.getElementById("calculate");
// const para = document.getElementById("para");
const monthlyResult = document.querySelector(".h2Result");
const overallRepay = document.querySelector(".overallRepay");
const resultContainer = document.querySelector(".resultContainer");
const primaryContainer = document.querySelector(".primaryContainer");
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

  let overTerm = repayment * termValue;
  monthlyResult.innerHTML = repayment.toFixed(2);
  overallRepay.innerHTML = overTerm.toFixed(2);
  resultContainer.style.display = "block";
  primaryContainer.style.display = "none";
}

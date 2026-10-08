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
const repaymentOnly = document.getElementById("repaymentOnly");
const interestOnly = document.getElementById("interestOnly");
const amountError = document.getElementById("amountError");
const termError = document.getElementById("termError");
function calculate() {
  let amountValue = Number(amount.value);
  let intValue = Number(interest.value) / 100 / 12;
  let termValue = Number(term.value) * 12;
  // let amountErrorMessage = amountError.value;
  // let termErrorMessage = termError.value;

  let repayment =
    (amountValue * (intValue * (1 + intValue) ** termValue)) /
    ((1 + intValue) ** termValue - 1);

  let overTerm = repayment * termValue;
  let interestValue = overTerm - amountValue;
  if (repaymentOnly.checked) {
    monthlyResult.innerHTML = `\u20A6 ${repayment.toFixed(2)}`;
    overallRepay.innerHTML = `\u20A6 ${overTerm.toFixed(2)}`;
  } else if (interestOnly.checked) {
    document.getElementById("repay/interest").innerHTML =
      "The interest on the money";
    monthlyResult.innerHTML = `\u20A6 ${interestValue.toFixed(2)}`;
    overallRepay.innerHTML = `\u20A6 ${overTerm.toFixed(2)}`;
  }
  resultContainer.style.display = "block";
  primaryContainer.style.display = "none";
}

function clearAll() {
  amount.value = "";
  term.value = "";
  interest.value = "";
  // repaymentOnly = "";
  resultContainer.style.display = "none";
  primaryContainer.style.display = "block";

  repaymentOnly.checked = false;
}

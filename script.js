"use strict";
const amount = document.getElementById("amount");
const term = document.getElementById("term");
const interest = document.getElementById("interest");
const calculateRepayment = document.getElementById("calculate");
const monthlyResult = document.querySelector(".h2Result");
const overallRepay = document.querySelector(".overallRepay");
const resultContainer = document.querySelector(".resultContainer");
const primaryContainer = document.querySelector(".primaryContainer");
const repaymentOnly = document.getElementById("repaymentOnly");
const interestOnly = document.getElementById("interestOnly");
const amountError = document.getElementById("amountError");
const termError = document.getElementById("termError");
const rateError = document.getElementById("rateError");
const typeError = document.getElementById("typeError");
const inputDiv = document.querySelector(".inputDiv");
const inputDivSpan = document.querySelector(".inputDivSpan");
const termDiv = document.querySelector(".termDiv");
const termDivSpan = document.querySelector(".termDivSpan");
const interestDiv = document.querySelector(".interestDiv");
const interestDivSpan = document.querySelector(".interestDivSpan");

// Calculate Repayment Button Function

function calculate() {
  // Error Message
  if (term.value > 50 || term.value < 0) {
    termError.style.color = "red";
    termDiv.style.borderColor = "red";
    termDivSpan.style.backgroundColor = "red";
    return (termError.innerHTML =
      "The years must not less than 0 or greater than 50");
  } else if (interest.value > 100 || interest.value <= 0) {
    rateError.style.color = "red";
    interestDiv.style.borderColor = "red";
    interestDivSpan.style.backgroundColor = "red";
    return (rateError.innerHTML =
      "The interest must be greater than 0 or greater than 100%");
  }
  if (amount.value == Number("")) {
    amountError.style.color = "red";
    inputDiv.style.borderColor = "red";
    inputDivSpan.style.backgroundColor = "red";
    return (amountError.innerHTML = "This field is required");
  } else if (term.value == Number("")) {
    termError.style.color = "red";
    termDiv.style.borderColor = "red";
    termDivSpan.style.backgroundColor = "red";
    return (termError.innerHTML = "This field is required");
  } else if (interest.value == Number("")) {
    rateError.style.color = "red";
    interestDiv.style.borderColor = "red";
    interestDivSpan.style.backgroundColor = "red";
    return (rateError.innerHTML = "This field is required");
  }

  let amountValue = Number(amount.value);
  let intValue = Number(interest.value) / 100 / 12;
  let termValue = Number(term.value) * 12;

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
  } else if (repaymentOnly.checked == false || interestOnly.checked == false) {
    typeError.style.color = "red";
    return (typeError.innerHTML = "This field is required");
  }
  resultContainer.style.display = "block";
  primaryContainer.style.display = "none";
}

// Clear All Function Button

function clearAll() {
  amount.value = "";
  term.value = "";
  interest.value = "";
  resultContainer.style.display = "none";
  primaryContainer.style.display = "block";
  interestOnly.checked = false;
  repaymentOnly.checked = false;
  amountError.innerHTML = "";
  termError.innerHTML = "";
  rateError.innerHTML = "";
  typeError.innerHTML = "";
  inputDiv.style.borderColor = "";
  inputDivSpan.style.backgroundColor = "";
  termDiv.style.borderColor = "";
  termDivSpan.style.backgroundColor = "";
  interestDiv.style.borderColor = "";
  interestDivSpan.style.backgroundColor = "";
}

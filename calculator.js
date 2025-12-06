let loanrange = document.getElementById("amountRange");
let loaninput = document.getElementById("amountInput");
loanrange.addEventListener("input", function () {
  loaninput.value = loanrange.value;
});
let raterange = document.getElementById("rateRange");
let rateinput = document.getElementById("rateInput");
raterange.addEventListener("input", function () {
  rateinput.value = raterange.value;
});
let timerange = document.getElementById("tenureRange");
let timeinput = document.getElementById("tenureInput");
timerange.addEventListener("input", function () {
  timeinput.value = timerange.value;
});
window.onload = calculate_emi;
loanrange.addEventListener("input", calculate_emi);
raterange.addEventListener("input", calculate_emi);
timerange.addEventListener("input", calculate_emi);


function calculate_emi() {
  let p = Number(loaninput.value);
  let r = Number(rateinput.value) / 12 / 100;
  let t = Number(timeinput.value) * 12;

  let emi = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
  let month_emi = document.getElementById("monthlyemi");
  let total_interest = document.getElementById("totalInterest");
  let total_payment = document.getElementById("totalAmount");

  total_interest.innerText = "₹ " + (emi * t - p).toFixed(2);
  total_payment.innerText = "₹ " + (emi * t).toFixed(2);
  month_emi.innerText = emi.toFixed(2);
}

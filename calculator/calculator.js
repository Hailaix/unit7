window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 100;
  document.getElementById("loan-years").value = 1;
  document.getElementById("loan-rate").value = 1;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  if (isNaN(values['amount']) || isNaN(values['rate']) || isNaN(values['years'])) {
    return 'Please input valid numbers'
  } else {
    let pir = values['rate'] / 1200; //periodic interest rate
    console.log(`periodic interest rate = ${pir}`);
    let nop = values['years'] * 12; //number of payments
    console.log(`number of payments = ${nop}`);
    let divisor = (1 - Math.pow((1 + pir), (-nop)));
    let monpay = 0;
    console.log(`Math is ${values['amount'] * pir} divided by ${divisor}`)
    if (divisor !== 0) { //prevent divison by 0 (if rate is 0)
      monpay = (values['amount'] * pir) / divisor;
    }
    console.log(monpay);
    return `$ ${monpay.toFixed(2)}`;
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}

function calculatePayment() {

    var principal = parseFloat(document.getElementById("principal").value);
    //principal = parseInt(principal);

    var termOfLoan = parseFloat(document.getElementById("termOfLoan").value);
    //termOfLoan = parseInt(termOfLoan);

    var annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);
    //annualInterestRate = parseFloat(annualInterestRate);
    //document.getElementById("Calculate").value = principal * annualInterestRate / (1 - (Math.pow(1 / (1 + annualInterestRate), termOfLoan)));
    //var monthlyPayment = principal * annualInterestRate / (1 - (Math.pow(1 / (1 + annualInterestRate), termOfLoan)));

    var percentageRate = annualInterestRate / 1200;
    var lengthOfLoan = 12 * termOfLoan;
    var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate), lengthOfLoan * -1)));
    monthlyPayment = monthlyPayment.toFixed(2);

    document.getElementById("payment").value = monthlyPayment; //must be .value
    console.log("monthlyPayment")
        //document.getElementById('monthlyPayment').innerHTML = "Monthly Payment" + monthlyPayment;

}
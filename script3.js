//challenge 3 - Net Salary Calculator

const prompt = require('prompt-sync')({sigint: true});

//prompt function used to retrieve user salary and benefits
let basicSalary = parseFloat(prompt("Enter basic salary: "));
let benefits = parseFloat(prompt("Enter benefits: "));

//calculate gross salary
let grossSalary = basicSalary + benefits;

//function for determining PAYE tax

function payeTax() {
	let payeTaxAmount;
    if (grossSalary <= 24000) {
        payeTaxAmount = grossSalary * 0.10;
    } 
	else if (grossSalary >= 24001 && grossSalary <= 32333) {
        payeTaxAmount = grossSalary * 0.25;
    } 
	else if (grossSalary >= 32334 && grossSalary <= 500000) {
        payeTaxAmount = grossSalary * 0.30;
    } 
	else if (grossSalary >= 500001 && grossSalary <=800000) {
        payeTaxAmount = (grossSalary - 60000) * 0.25;
    }
	else {
        payeTaxAmount = grossSalary * 0.35;
    }
    return payeTaxAmount;
}

//function for determining NHIF deductions Amount

function nhifDeductions() {
    let deductionAmount = 0;
    if (grossSalary <= 5999) {
        deductionAmount = 150;
    } 
    else if (grossSalary >= 6000 && grossSalary <= 7999) {
        deductionAmount = 300;
    } 
    else if (grossSalary >= 8000 && grossSalary <= 11999) {
        deductionAmount = 400;
    } 
    else if (grossSalary >= 12000 && grossSalary <=14999){
        deductionAmount = 500;
    }
	else if (grossSalary >= 15000 && grossSalary <=19999) {
		deductionAmount = 600;
	}
	else if (grossSalary >= 20000 && grossSalary <=24999) {
        deductionAmount = 750;
    }
	else if (grossSalary >= 25000 && grossSalary <=29999) {
		deductionAmount = 850;
	}
	else if (grossSalary >= 30000 && grossSalary <=34999) {
		deductionAmount = 900;
	}
	else if (grossSalary >= 35000 && grossSalary <=39999) {
		deductionAmount = 950;
	}
	else if (grossSalary >= 40000 && grossSalary <=44999) {
		deductionAmount = 1000;
	}
	else if (grossSalary >= 45000 && grossSalary <=49999) {
		deductionAmount = 1100;
	}
	else if (grossSalary >= 50000 && grossSalary <=59999) {
		deductionAmount = 1200;
	}
	else if (grossSalary >= 60000 && grossSalary <=69999) {
		deductionAmount = 1300;
	}
	else if (grossSalary >= 70000 && grossSalary <=79999) {
		deductionAmount = 1400;
	}
	else if (grossSalary >= 80000 && grossSalary <=89999) {
		deductionAmount = 1500;
	}
	else if (grossSalary >= 90000 && grossSalary <=99999) {
		deductionAmount = 1600;
	}
	else {
		deductionAmount = 1700;
	}
    return deductionAmount;
}

//function for determining NSSF deduction amount

function nssfDeductions() {
	let nssf = grossSalary * 0.06;
	return nssf;
}

//call all the functions and store them in variables
let paye = payeTax();
let nhif = nhifDeductions();
let nssf = nssfDeductions();

//calculate net salary
let netSalary = grossSalary - (paye + nhif + nssf);

//display the calculated net salary
console.log(`Net Salary is:${netSalary}`);
//added the prompt-sync module so as to create prompting functions that can retrieve user's input from the terminal
const prompt = require('prompt-sync')({sigint: true});

//Function to generate a student's grade based on their percentage score
function generateGrade(marks) {
    if (marks > 79) {
        return "A";
    }
    else if (marks <= 79 && marks >= 60) {
        return "B";
    }
    else if (marks <= 59 && marks >= 50) {
        return "C";
    }
    else if (marks <= 49 && marks >= 40)
        return "D";
    else {
        return "E";
    }
}

//Prompt the user to enter their percentage score
const marks = parseFloat(prompt('Enter your marks: '));

//Check if the input is a valid number

//if not valid, then display a warning
//Otherwise, display the grade
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log('Invalid input! Please enter a valid percentage score between 0 and 100.');
}
else {
    console.log(`Your grade is: ${generateGrade(marks)}`);
}
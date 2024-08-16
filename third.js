let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


let age = parseFloat(prompt("Enter an age:"));

if(age>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not Eligible to vote")
}

let n = parseFloat(prompt("Enter n1:"));
let no = parseFloat(prompt("Enter n2:"));
let ni = parseFloat(prompt("Enter n3:"));

if(n>no && n>ni){
    console.log(n)
}
else if(no>n && no>ni){
    console.log(no)
}else{
    console.log(ni)
}
let days = parseFloat(prompt("Enter the number"));
switch(days){
    case 1:
        console.log("Mo")
        break;
    case 2:
        console.log("Tu")
        break;
    case 3:
        console.log("we")
        break;
    case 4:
        console.log("th")
        break;
    case 5:
        console.log("fr")
        break;
    case 6:
        console.log("sa")
        break;
    case 7:
        console.log("su")
        break;


}

let score = parseFloat(prompt("Enter the score")); // You can change this value to test different scores
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 0 && score < 60):
        grade = 'F';
        break;
    default:
        grade = 'Invalid score';
}

console.log(`The grade for a score of ${score} is: ${grade}`);

let a = parseFloat(prompt("Enter the number "));

 a %2 == 0 ? console.log("Even") : console.log("Odd")

 let year = parseFloat(prompt("Enter the year")); // You can change this value to test different years

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (isLeapYear) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}


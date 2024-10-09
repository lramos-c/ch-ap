/*grade = prompt("Enter your first grade");
grade2 = prompt("Enter your second grade");
grade3 = prompt("Enter your third grade");

term = (parseFloat(grade) + parseFloat(grade2) + parseFloat(grade3)) / 3;

if (term >= 6 && term <= 10) {
    console.log("Your final grade is " + term + " and you pass");
} else if (term <= 6 && term >= 0) {
    console.log("Your final grade is " + term + " and you have failed");
} else { 
    console.log("Please enter a number between 0 and 10 for your grades");
}
 */

let weekday = prompt("Enter the day of the week");

switch (weekday) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    case "Wednesday":
        console.log("It's Wednesday");
        break;
    case "Thursday":
        console.log("It's Thursday");
        break;
    case "Friday":
        console.log("It's Friday");
        break;
    case "Saturday":
        console.log("It's Saturday");
        break;
    case "Sunday":
        console.log("It's Sunday");
        break;
    default:
        console.log("It's not a weekday");
        break;
}
grade = prompt("Enter your first grade");
grade2 = prompt("Enter your second grade");
grade3 = prompt("Enter your third grade");


term = (parseFloat(grade) + parseFloat(grade2) + parseFloat(grade3)) / 3;

switch (parseInt(term)) {
    case 10:
        console.log("Your final grade is " + term + " and you pass");
        break;
    case 9:
        console.log("Your final grade is " + term + " and you pass");
        break;
    case 8:
        console.log("Your final grade is " + term + " and you pass");
        break;
    case 7:
        console.log("Your final grade is " + term + " and you pass");
        break;
    case 6:
        console.log("Your final grade is " + term + " and you pass");
        break;
    case 5:
        console.log("Your final grade is " + term + " and you failed");
        break;
    case 4:
        console.log("Your final grade is " + term + " and you failed");
        break;
    case 3:
        console.log("Your final grade is " + term + " and you failed");
        break;
    case 2:
        console.log("Your final grade is " + term + " and you failed");
        break;
    case 1:
        console.log("Your final grade is " + term + " and you failed");
        break;
    default:
        console.log("There seems to be some problem with your grades");
        break;
}

/*
if (term >= 6 && term <= 10) {
    console.log("Your final grade is " + term + " and you pass");
} else if (term <= 6 && term >= 0) {
    console.log("Your final grade is " + term + " and you have failed");
} else { 
    console.log("Please enter a number between 0 and 10 for your grades");
}
*/

/*
let weekday = prompt("Enter the day of the week");
weekday = weekday.toLowerCase();

switch (weekday) {
    case "monday":
        console.log("It's Monday");
        break;
    case "tuesday":
        console.log("It's Tuesday");
        break;
    case "wednesday":
        console.log("It's Wednesday");
        break;
    case "thursday":
        console.log("It's Thursday");
        break;
    case "friday":
        console.log("It's Friday");
        break;
    case "saturday":
        console.log("It's Saturday");
        break;
    case "sunday":
        console.log("It's Sunday");
        break;
    default:
        console.log("It's not a weekday");
        break;
} */
const nombres = ["juan", "pedro", "ana"];
const numbers = [2,3,7,5,10,23,24,28,18,28,29];

function getNumbers() {
    const numbers = [];
    let number;

    do {
        number = prompt("Add a number to the array, or press escape to finish");
        if (number === null) break;
        numbers.push(Number(number));
    } while (number !== NaN);

    return numbers;
}


/*
const evenOrOdd = (numbers) => {
    numbers.forEach((number) => number % 2 == 0? console.log(number + " is even") : console.log(number + " is odd"));
}*/



console.log(getNumbers())


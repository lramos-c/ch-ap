function makeTriangle(size) {
    let height = 0;
    let print = "";
    while (height < size) {
        print+="#";
        console.log(print);
        height+=1;
    }
}

function makeChessBoard (size) {

        for(let i = 1; i < size+1 ; i++ ) {
            if ( i % 2 == 0) {
                console.log("■□".repeat(size))
            }
            else {
                console.log("□■".repeat(size))
            }
        }

}

function fizzBuzz () {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }    
}

function calculateResistance (resistances) {
    let totalResistance = 0;
    for (resistance of resistances) {
        resistance = Number(resistance);
        if (resistance < 0){
            resistance = resistance * -1;
        }
        totalResistance += resistance;
    }
    return ("The equivalent resistance of the circuit is of " + totalResistance + " Ohms."
    );
}

function divideNum(number) {
    number = Number(number);

    if (number % 2 == 0) {
        return [number / 2, number / 2];
    }
    else {
        return [parseInt(number / 2), parseInt(number / 2 + 1)];
    }

}

function secretSociety(names) {

    let secretSociety = "";
    for (let i = 0; i < names.length; i++) {
        secretSociety += (names[i].at(0));
    }
    return secretSociety
}

function onlineStatus(users) {

    totalUsers = 0;
    for (user of users) {
        totalUsers += 1;
    }

    return `${users[0]},${users[1]} and ${totalUsers-2} more online`
}

function makeMultipleArray(multiplier,arrayLength){

    let multiples = [];

    for(let i = 0; i < arrayLength; i++){
        multiples.push(Number(multiplier*i));
    }
    return multiples;
}

function checkPositiveDominance(numbers){

    valueCheck = 0;
    for (number of numbers)  {
        if (number >= 0) {
            valueCheck += 1;
        }
        else {
            valueCheck -= 1;
        }
    }

    if (valueCheck>0){
        return true;
    } 
    else return false;
}

function antipodalAverage(numbers) {
    let firstHalf = numbers.slice(0,numbers.length/2);
    let secondHalf = numbers.slice(Math.ceil(numbers.length/2)).reverse();
    let average = [];     

    for(x of firstHalf) {
        average.push((x + secondHalf[firstHalf.indexOf(x)])/2)
    }

    return average;
}




// makeTriangle(Number(prompt("How tall do you want your triangle to be?")));
//makeChessBoard(Number(prompt("Which size do you want your chess board to be?")))
//fizzBuzz()
//console.log(calculateResistance([1,-2,10,4,5,6]));
//console.log(divideNum(23));
//console.log(secretSociety(["Horacio","Orlando","Laura","Andrea"]));
//console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer', 'Kinomancer', 'Retrodog']));
//console.log(makeMultipleArray(2,15));
//console.log(checkPositiveDominance([-1, -3, -5, 4, 6767,5,6]))
//console.log(antipodalAverage([1,2,3,7,5,22,6]));
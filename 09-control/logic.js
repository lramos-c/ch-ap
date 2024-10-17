//Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
//Store the information and then showcase it in the console.
//Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
function userProfile() {
    username = prompt("What is your username?")
    age = prompt("How old are you")
    favoriteMovies = [];
    let movie = "ph";
    let movies = "";

    while ( movie  !== "") {
        movie = prompt("What are your favorite movies?, press enter to end")
        favoriteMovies.push(movie);
    }
    for (i = 1; i < favoriteMovies.length-1; i++) {
        movies += `${favoriteMovies[i]},`;
    };
    
    return `Username:${username}, Age: ${age} years old, The film ${favoriteMovies[0]} is one of my favorites, but i also like ${movies}`;
}

//Write a program that asks for 10 numbers.
//Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
function highestNumber() {
    let highestNumber = -Infinity;
    let numbers = [];
    for (i = 1; i < 11; i++) {
        numbers.push(prompt(`Enter number ${i} to be compared`));
    };
    numbers.forEach(number => {
        if (number > highestNumber){
            highestNumber = number;
        }
    });

    return highestNumber;
}

function palindrome(word) {
    word = word.toLowerCase();
    word = word.replace(/\s+/g, '');
    let reversedWord = word.split("").reverse().join("");

    if (reversedWord==word){
        return `The word is a palindrome`
    }
    else return `The word is not a palindrome`
}

function flatArray(multiDimension) {
    return multiDimension.flat(Infinity);
}

//console.log(userProfile());
//console.log(highestNumber());
//console.log(palindrome("Dabale arroz a la zorra el abad"))
//console.log(flatArray([0, 1, [2, [3, [4, 5]]]]))

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

export class Animal {
    legs = 4;
    size = "small";
    species = "dog";
    age = "10";
    name = "Panchito";
    tail = true;
    sounds = "bark";

    constructor(legs, size, species, age, name, tail, sounds) {
        this.legs = legs;
        this.size = size;
        this.species = species;
        this.age = age;
        this.name = name;
        this.tail = tail;
        this.sounds = sounds;
    }

    set setName(newName) {
        this.name = newName;
    }

    get getName() {
        return this.name;
    }

    set setLegs(newLegs) {
        this.legs = newLegs;
    }

    get getLegs() {
        return this.legs;
    }

    set setSize(newSize) {
        this.size = newSize;
    }

    get getSize() {
        return this.size;
    }

    set setSpecies(newSpecies) {
        this.species = newSpecies;
    }

    get getSpecies() {
        return this.species;
    }

    set setAge(newAge) {
        this.age = newAge;
    }

    get getAge() {
        return this.age;
    }

    set setTail(newTail) {
        this.tail = newTail;
    }

    get getTail() {
        return this.tail;
    }   

    set setSounds(newSounds) {
        this.sounds = newSounds;
    }

    get getSounds() {
        return this.sounds;
    }

    getAllProperties() {
        return this.legs + " " + this.size + " " + this.species + " " + this.age + " " + this.name + " " + this.tail + " " + this.sounds;
    }
}

// const capybara = new Animal(4, 1.3, "rodent", 3, "Panchito", true, "grunt");
// console.log(capybara.getTail);
// capybara.setTail = false;
// console.log(capybara.getAllProperties());




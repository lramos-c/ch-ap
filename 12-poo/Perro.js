import { Animal } from "./Animal.js";
class Dog extends Animal {
    breed;
    owner;
    leash;
    color;
    spurs; 
    fur;
    teeth;

    constructor(owner, breed, teeth, leash, color, spurs, fur) {
        super(4, "small", "Golden Terrier", 20, "Nala", "short", "bark");
        this.breed = breed;
        this.owner = owner;
        this.leash = leash;
        this.color = color;
        this.spurs = spurs;
        this.fur = fur;
        this.teeth = teeth;
    }

    set setBreed(newBreed) {
        this.breed = newBreed;
    }

    get getBreed() {
        return this.breed;
    }

    set setOwner(newOwner) {
        this.owner = newOwner;
    }

    get getOwner() {
        return this.owner;
    }

    set setLeash(newLeash) {
        this.leash = newLeash;
    }

    get getLeash() {
        return this.leash;
    }

    set setColor(newColor) {
        this.color = newColor;
    }

    get getColor() {
        return this.color;
    }

    set setSpurs(newSpurs) {
        this.spurs = newSpurs;
    }

    get getSpurs() {
        return this.spurs;
    }

    set setFur(newFur) {
        this.fur = newFur;
    }

    get getFur() {
        return this.fur;
    }

    set setTeeth(newTeeth) {
        this.teeth = newTeeth;
    }

    get getTeeth() {
        return this.teeth;
    }
    getAllProperties() {
        return `Hi I'm ${this.owner} and my dog is a ${this.breed} called ${this.name}, its fur is ${this.fur} and it has ${this.color} color.`
       }
}

const nala = new Dog("Martha", "Poodle", 4, "short", "white", "fine", "long");
const salsita = new Dog("Carlos", "Criolla", 4, "wavy", "black", "fine", "short");
const tomas = new Dog("Muriel", "Labrador", 4, "short", "brown", "fine", "short");

console.log(nala.getAllProperties());

console.log(nala.getOwner);
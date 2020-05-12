class List {
    
    constructor(name, height, age, eyeColor, occupation) {
        this.name = name;
        this.height = height;
        this.age = age;
        this.eyeColor = eyeColor;
        this.occupation = occupation;
    }

    getOlder() {
        this.age++
    }

    eat() {
        this.height++
    }

    die() {
        this.isAlive = false
    }

    greet() {
        return "Hello " + this.name + "! ";
        
    }
}

const peter = new Person("Peter", 180, 34, "Brown", "Elephant watcher");
const tasha = new Person("Tasha", 160, 22, "Brown", "Developer");
const mrDrJetski = new Person("Mr Dr", 260, 330, "Prismatic", "Jet ski owner");
const bogdan = new Person("Bogdan", 170, 29, "Brown", "Brave guy");

const people = [peter, tasha, mrDrJetski, bogdan];


const createUser = () => {
    document.getElementById("greeting-list").innerHTML = "";
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const eyeColor = document.getElementById("eye-color").value;
    const occupation = document.getElementById("occupation").value;
    const user = new Person(name, height, weight, eyeColor, occupation);
    
    for(const i in user) {
        document.getElementById("greeting-list").innerHTML += `<p> ${(i + ": " + user[i])} </p>`
    }
}
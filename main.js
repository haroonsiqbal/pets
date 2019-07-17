const pet = {
    name: "Fido",
    species: "Dog",
    nicknames: ["fi-fi, wi-fi", "doggo"],
    age: 12,
    bark: function() {
        window.alert("WOOF!");
    },
    whine: function() {
        console.log("arf!");
    },
    howl: function() {
        window.alert("arwhooo!")
    },
    favoriteToys: [],
    play: function(toy) {
        if (toy === "fuzzy") {
            this.favoriteToys.push(toy);
        }
    }

}

pet.bark();
pet.whine();
pet.howl();

console.log(pet.favoriteToys);
pet.play("ball");
pet.play("fuzzy");
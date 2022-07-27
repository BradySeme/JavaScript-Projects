function getRandomProperty(Animal) { 
    const entries = Object.entries(Animal);
    //This is supposed to use random keys & values from the dictionary. I know this is not what you guys asked for but I wanted to try something new!
    return entries[Math.floor(Math.random() * entries.length)];
  } //Trying something new :)

function dictionaryFunction() {
    const Animal = {
        Species: "Cat",
        Color: "Purple",
        Breed: "Cat?",
        Age: 102,
        Sound: "Meow!"
    };
    delete Animal.Sound; //Deleted key & value.
    document.getElementById("Dictionary").innerHTML = getRandomProperty(Animal);
}
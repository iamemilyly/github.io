/*** Object Constructors ***/
function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.image = "panda.png";
  this.type = "Panda";
}

function Flamingo(name, age) {
  this.name = name;
  this.age = age;
  this.image = "flamingo.png"
  this.type = "Flamingo";
}

function Peacock(name, age) {
  this.name = name;
  this.age = age;
  this.image = "peacock.png"
  this.type = "Peacock";
}

/*** Global Variables ***/
var animals = [new Panda(), new Flamingo(), new Peacock()];
var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Panda) 
  {
    return new Panda(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Flamingo) 
  {
    return new Flamingo(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Peacock) 
  {
    return new Peacock(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
function onLoad() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + " years old";
  document.getElementById("animal-img").setAttribute("src", animal.image)

};

function bun(type, glazing, quantity) {
  this.type = type;
  this.glazing = glazing;
  this.image = "panda.png";
  this.quantity = quantity;
}

function onQuantitySelect() {
	var t = document.getElementById("quantity");
	var quan = t.options[t.selectedIndex].text;
  var p = quan * 5.00
	document.getElementById("price").innerHTML = p;
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
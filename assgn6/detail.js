function bun(type, glazing, quantity) {
  this.type = type;
  this.glazing = glazing;
  this.image = "o1.png";
  this.quantity = quantity;
}

function onQuantitySelect() {
	var t = document.getElementById("quantity");
	var quan = t.options[t.selectedIndex].text;
  var p = quan * 5.00
	document.getElementById("price").innerHTML = p;
}

function onGlazingSelect() {
  var g = document.getElementById("glazing");
  var glaz = g.options[g.selectedIndex].text;
}

function name(){
  var t = document.getElementById("quantity");
  var quan = t.options[t.selectedIndex].text;
  var g = document.getElementById("glazing");
  var glaz = g.options[g.selectedIndex].text;

  var bun = new bun(document.getElementById("type").textContent, glaz, quan);
  localStorage.setItem("curr", JSON.stringify(bun));
}

/*** Document Load ****/
function onLoad() {

  var curr = JSON.parse(localStorage.getItem("curr"));

  if (curr != null) {
      document.getElementById("type").textContent = curr;
  }

};
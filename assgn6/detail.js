function bun(type, glazing, quantity, price) {
  this.nam = type;
  this.glazing = glazing;
  this.image = type + ".png";
  this.quantity = quantity;
  this.price = price;
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

function onSelect(){
  var curr = document.getElementById("type").textContent;
  localStorage.setItem("curr", curr);
}

function test(){
  document.getElementById("hey").textContent = "please";
}

/*** Document Load ****/
function onLoad() {

  var curr = localStorage.getItem("curr");
  var des = localStorage.getItem("des");

  if (curr != null) {
      document.getElementById("type").textContent = curr;
      document.getElementById("des").textContent = des;
  }

  document.getElementById("add").addEventListener("click", function(){
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart === null) {
      var cart = [];
    }

    var g = document.getElementById("glazing");
    var glazing = g.options[g.selectedIndex].text;

    var t = document.getElementById("quantity");
    var quantity = t.options[t.selectedIndex].text;

    var price = document.getElementById("price").textContent;

    var n = new bun(curr, glazing, quantity, price);
    cart.push(n);

    localStorage.setItem("cart", JSON.stringify(cart));

  })

};
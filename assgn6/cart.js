function bun(type, glazing, quantity) {
  this.type = type;
  this.glazing = glazing;
  this.image = JSON.stringify(type) + ".png";
  this.quantity = quantity;
}

function onQuantitySelect() {
	var t = document.getElementById("quantity");
	var quan = t.options[t.selectedIndex].text;
  var p = quan * 5.00
	document.getElementById("price").innerHTML = p;
}

function addItem(){
    var t = document.getElementById("type");
    var type = t.options[t.selectedIndex].text;
    var g = document.getElementById("glazing");
    var glazing = g.options[g.selectedIndex].text;
    var q = document.getElementById("quantity");
    var quantity = q.options[q.selectedIndex].text;

    var b = new bun(type, glazing, quantity);

    localStorage.setItem(type, b);

  }

  function removeItem(){
    var name = document.getElementById("type");
    localStorage.removeItem(name);

  }

/*** Document Load, inspired by lab activity ****/
function onLoad() {

  var bun = document.getElementById("type");

  document.getElementById("glazing").textContent = localStorage.getItem(bun.glazing);
  document.getElementById("qresult").textContent = localStorage.getItem(bun.quantity);
  document.getElementById("price").textContent = localStorage.getItem(bun.quantity * 5.00);
  document.getElementById("tax").textContent = localStorage.getItem(bun.quantity * 5.00 * 0.07);
  document.getElementById("total-price").textContent = localStorage.getItem(bun.quantity * 5.00) + localStorage.getItem(bun.quantity * 5.00 * 0.07);

  for (i = 0; i <= localStorage.length-1; i++){
    key = localStorage.key(i);
    list += localStorage.getItem(key);
  }
  document.getElementById('buns').innerHTML = list;


};
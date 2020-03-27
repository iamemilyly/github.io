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

function test(){

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
}

/*** Document Load, inspired by lab activity ****/
function onLoad() {

  var all = JSON.parse(localStorage.getItem("cart"));
  var subtotal = 0;

  for (i=0; i < all.length; i++){
    var b = all[i];

    document.getElementById(b.nam + "G").textContent = b.glazing;
    document.getElementById(b.nam + "Q").textContent = b.quantity;
    document.getElementById(b.nam + "P").textContent = b.price;

    document.getElementById(b.nam).style.display = "block";

    var subtotal = subtotal + parseInt(b.price);
  }

  document.getElementById("price").textContent = subtotal.toString();
  var tax = subtotal * 0.07;
  document.getElementById("tax").textContent = tax.toString();
  var total = subtotal + (subtotal * 0.07);
  document.getElementById("total-price").textContent = total.toString();

  document.getElementById("removeO").addEventListener("click", function(){
    var name = "Original";
    var cart = JSON.parse(localStorage.getItem("cart"));
    var dup = JSON.parse(localStorage.getItem("cart"));

    var j = 0;
    for (i=0; i < cart.length; i++){
      var curr = cart[i];
      if (curr.nam == name){
        dup.splice(j, 1);
        j--;
      }
      j++;
    }

    localStorage.setItem("cart", JSON.stringify(dup));
    location.reload();
  })

document.getElementById("removeW").addEventListener("click", function(){
    var name = "Walnut";
    var cart = JSON.parse(localStorage.getItem("cart"));
    var dup = JSON.parse(localStorage.getItem("cart"));

    var j = 0;
    for (i=0; i < cart.length; i++){
      var curr = cart[i];
      if (curr.nam == name){
        dup.splice(j, 1);
        j--;
      }
      j++;
    }

    localStorage.setItem("cart", JSON.stringify(dup));
    location.reload();
  })

document.getElementById("removeB").addEventListener("click", function(){
    var name = "Blackberry";
    var cart = JSON.parse(localStorage.getItem("cart"));
    var dup = JSON.parse(localStorage.getItem("cart"));

    var j = 0;
    for (i=0; i < cart.length; i++){
      var curr = cart[i];
      if (curr.nam == name){
        dup.splice(j, 1);
        j--;
      }
      j++;
    }

    localStorage.setItem("cart", JSON.stringify(dup));
    location.reload();
  })

document.getElementById("removeGF").addEventListener("click", function(){
    var name = "Original (Gluten-Free)";
    var cart = JSON.parse(localStorage.getItem("cart"));
    var dup = JSON.parse(localStorage.getItem("cart"));

    var j = 0;
    for (i=0; i < cart.length; i++){
      var curr = cart[i];
      if (curr.nam == name){
        dup.splice(j, 1);
        j--;
      }
      j++;
    }

    localStorage.setItem("cart", JSON.stringify(dup));
    location.reload();
  })

document.getElementById("removeC").addEventListener("click", function(){
    var name = "Caramel Pecan";
    var cart = JSON.parse(localStorage.getItem("cart"));
    var dup = JSON.parse(localStorage.getItem("cart"));

    var j = 0;
    for (i=0; i < cart.length; i++){
      var curr = cart[i];
      if (curr.nam == name){
        dup.splice(j, 1);
        j--;
      }
      j++;
    }

    localStorage.setItem("cart", JSON.stringify(dup));
    location.reload();
  })

document.getElementById("removeP").addEventListener("click", function(){
    var name = "Pumpkin Spice";
    var cart = JSON.parse(localStorage.getItem("cart"));
    var dup = JSON.parse(localStorage.getItem("cart"));

    var j = 0;
    for (i=0; i < cart.length; i++){
      var curr = cart[i];
      if (curr.nam == name){
        dup.splice(j, 1);
        j--;
      }
      j++;
    }

    localStorage.setItem("cart", JSON.stringify(dup));
    location.reload();
  })

};
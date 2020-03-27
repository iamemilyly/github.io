function onSelect(){
  var curr = Document.getElementById("type").textContent;
  localStorage.setItem("curr", curr);
}

/*** Document Load ****/
function onLoad() {

	document.getElementById("og").addEventListener("click", function(){
		var curr = document.getElementById("og").textContent;
  		localStorage.setItem("curr", curr);
  		localStorage.setItem("des", "Your classic, home-style cinnamon rolls that are fluffy, soft, and topped with vanilla glaze")
	})

	document.getElementById("bb").addEventListener("click", function(){
		var curr = document.getElementById("bb").textContent;
  		localStorage.setItem("curr", curr);
  		localStorage.setItem("des", "Homemade soft cinnamon rolls made with fresh blackberries that you and your family will love")
	})

	document.getElementById("wal").addEventListener("click", function(){
		var curr = document.getElementById("wal").textContent;
  		localStorage.setItem("curr", curr);
  		localStorage.setItem("des", "The sweet honey-walnut topping and tender texture make these sticky rolls a surefire crowd-pleaser")
	})

	document.getElementById("gf").addEventListener("click", function(){
		var curr = document.getElementById("gf").textContent;
  		localStorage.setItem("curr", curr);
  		localStorage.setItem("des", "Sweet, tender gluten free cinnamon rolls made with an all purpose gluten free flour and instant yeast")
	})

	document.getElementById("ps").addEventListener("click", function(){
		var curr = document.getElementById("ps").textContent;
  		localStorage.setItem("curr", curr);
  		localStorage.setItem("des", "Soft pumpkin cinnamon rolls filled with a gooey cinnamon swirl and topped with maple cream cheese icing.")
	})

	document.getElementById("cp").addEventListener("click", function(){
		var curr = document.getElementById("cp").textContent;
  		localStorage.setItem("curr", curr);
  		localStorage.setItem("des", "Deliciously tender, sweet and sticky, these sticky buns are made with a homemade maple-caramel sauce that is out of this world")
	})

};
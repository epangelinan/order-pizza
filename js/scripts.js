//Business Logic

//Create a pizza object constructor with properties for toppings and size.
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

//Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
Pizza.prototype.cost = function () {
  if (this.size === "small") {
    alert(10 * 1.1);
    return 10 * 1.1;
  } else if (this.size === "medium") {
    alert(12 * 1.1);
    return(12 * 1.1);
  } else if (this.size === "large") {
    alert(14 * 1.1);
    return(14 * 1.1);
  }
}

var toppings = [];
var size = " ";


var newPizza = new Pizza(toppings, size);
var toppingSelected = " ";
newPizza.toppings.push(toppingSelected);
newPizza.cost();



//UI Logic
$(document).ready(function() {
  //Allow the user to choose toppings and size for the pizza they'd like to order.
  $("form").submit(function(event) {
    //alert("submit successfull!");
    size = $("#size").val();
    alert(size);
  });
});

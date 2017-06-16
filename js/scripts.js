//Business Logic
var toppings = [];
var size = "";
var toppingSelected;
var finalCost = 0;
var cost = 0;

//A pizza object constructor with properties for toppings and size.
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

//A prototype method for the cost of a pizza depending on the selections chosen.
Pizza.prototype.cost = function () {
  if (this.size === "Small") {
    cost = (this.toppings.length + 10) * 1.1;
    return cost;
  } else if (this.size === "Medium") {
    cost = (this.toppings.length + 12) * 1.1;
    return cost;
  } else if (this.size === "Large") {
    cost = (this.toppings.length + 14) * 1.1;
    return cost;
  }
}



//UI Logic
$(document).ready(function() {
  //Allow the user to choose toppings and size for the pizza they'd like to order.
  $("form").submit(function(event) {
    event.preventDefault();
    //alert("submit successfull!");
    size = $("#size").val();
    alert(size);
    $("input:checkbox[name=topping]:checked").each(function() {
      toppingSelected = $(this).val();
      toppings.push(toppingSelected);
    });
    alert(toppings);
    var newPizza = new Pizza(toppings, size);
    finalCost = newPizza.cost().toFixed(2);
    $("#result").show();
    $("#total-cost").text(finalCost);
  });

});

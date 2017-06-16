//Business Logic
var toppings = [];
var size = "";
var toppingSelected;

//A pizza object constructor with properties for toppings and size.
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

//A prototype method for the cost of a pizza depending on the selections chosen.
Pizza.prototype.cost = function () {
  if (this.size === "Small") {
    //alert(10 * 1.1);
    return 10 * 1.1;
  } else if (this.size === "Medium") {
    //alert(12 * 1.1);
    return 12 * 1.1;
  } else if (this.size === "Large") {
    //alert(14 * 1.1);
    return 14 * 1.1;
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
    alert(newPizza.cost());
  });
});

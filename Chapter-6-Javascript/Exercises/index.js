 // Function to calculate total cost
 function calculateTotal() {
  // Retrieve values from input fields
  var costPerLiter = parseFloat(document.getElementById('cost').value);
  var litersPurchased = parseFloat(document.getElementById('liters').value);
  // Calculate total cost
  var totalCost = costPerLiter * litersPurchased;
  // Display total cost
  document.getElementById('totalCost').innerText = "Total Cost: $" + totalCost.toFixed(2);
}

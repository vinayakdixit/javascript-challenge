// from data.js
var tableData = data;
// get reference to the table body
var tbody = d3.select("tbody");
// YOUR CODE HERE!
console.log(data);

tableData.forEach((UFOsighting) => {
	var row = tbody.append("tr");
	Object.entries(UFOsighting).forEach (([key,value]) => {
		var cell = row.append("td");
		cell.text(value);
	});
});

// data.forEach((UFOsighting) => {
// 	var row = tbody.append("tr");
// 	Object.entries(UFOsighting).forEach (([key,value]) => {
// 		var cell = row.append("td");
// 		cell.text(value);
// 	});
// });

var button = d3.select("#filter-btn");

button.on("click", function() {
// Select the input element and get the raw HTML node
  var inputElementValue = d3.select("#datetime").property("value");



  var filteredData = tableData.filter(ufosighting => ufosighting.datetime === inputElementValue);
  if(filteredData.length == 0)
  {
    filteredData = tableData;
    d3.select("#spn-Message").html("No data found for input value. Displaying all sightings data");
  }
  else
  {
  	d3.select("#spn-Message").html("");
  }
  tbody.html("");
  filteredData.forEach((UFOsighting) => {
	var row = tbody.append("tr");
	Object.entries(UFOsighting).forEach (([key,value]) => {
		var cell = row.append("td");
		cell.text(value);
		});
	});
   
});

  







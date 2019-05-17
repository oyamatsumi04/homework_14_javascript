
// from data.js
var sightingsData = data;


// select tbody using ds
tbody = d3.select("tbody");


// use Object.entries to get key: value pairs from data and loop through to add to table
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sightings){
    new_tr = tbody.append("tr")
    Object.entries(sightings).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(sightingsData)

var inputFilter = d3.select("#datetime")
var filterButton = d3.select("filter-btn")

// filter by date
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputFilter.property("value"));
    var new_table = sightingsData.filter(sightings => sightings.datetime===inputFilter.property("value"))
    displayData(new_table)
}

// event listener
inputFilter.on("change", changeHandler)
filterButton.on("click", changeHandler)
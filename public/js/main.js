//main.js
$(document).ready(function() {
   //

});

function search() {
    //$( "#searchPopulation option:selected" ).text()
    
    var population = $("#searchPopulation option:selected").map(function(){ return this.value; }).get().join(", ");
    var categories = $("#searchCategory option:selected").map(function(){ return this.value; }).get().join(", ");
    console.log(population);
    console.log(categories);
}
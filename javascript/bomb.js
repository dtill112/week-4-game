var winningNumber = 50;

$("#number-to-guess").text(winningNumber);

var counter = 0;

var numOptions = [12, 4, 6, 8];

var anything = [];



for(var i = 0; i < numOptions.length; i++){

    var newElements = $("<img>");

    newElements.addClass("go");

    newElements.attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/800px-Dwayne_Johnson_2%2C_2013.jpg"); 

    newElements.attr("data-points", numOptions[i]);

    $("#div1").append(newElements);

}



$("#div1").on("click", ".go", function(){

    var points = ($(this).attr("data-points"));

    points = parseInt(points);

    counter += points;

    alert("New score: " + counter);

    if (counter === winningNumber) {
        alert("YOU ROCK!");
      }
  
      else if (counter >= winningNumber) {
        alert("Try Again");
      }
  
    });

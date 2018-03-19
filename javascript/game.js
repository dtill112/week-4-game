var winningNumber = 50;

$("#number-to-guess").text(winningNumber);

var counter = 0;

var numOptions = [9, 3, 6, 12];




for(var i = 0; i < numOptions.length; i++){

    var numPicks = numOptions[Math.round(Math.random()*numOptions.length)];
    
    var newElements = $("<img>");

    newElements.addClass("go");

    newElements.attr("src", "/Users/dontillery/Bootcamp/Code/Homework/Week 4 Game/images/a" + i + ".jpeg"); 

    newElements.attr("data-points", numOptions[i]);

    $("#div1").append(newElements);

}



$("#div1").on("click", ".go", function(){

    var points = ($(this).attr("data-points"));

    points = parseInt(points);

    counter += points;

    alert("New score: " + counter);

    if (counter === winningNumber) {
        alert("You saved us all");
      }
  
      else if (counter >= winningNumber) {
        alert("World War 3");
      }
  
    });

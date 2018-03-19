var winningNumber = 50;

$("#number-to-guess").text(winningNumber);

var counter = 0;

var numOptions = [3, 6, 9, 12];

numPicks = numOptions[Math.round(Math.random()*numOptions.length)];

console.log(numPicks);

for(var i = 0; i < numOptions.length; i++){

    var newElements = $("<img>");

    newElements.addClass("go");

    $("#div1").append(newElements);

    newElements.attr("src", "/Users/dontillery/Bootcamp/Code/Homework/Week 4 Game/images/a" + i + ".jpeg"); 

    newElements.attr("data-points", numPicks[i]);


}



$("#div1").on("click", ".go", function(){

    var points = ($(this).attr("data-points"));

    points = parseInt(points);

    counter += points;

    alert("New score: " + counter);

    if (counter === winningNumber) {
        alert("You win!");
      }
  
      else if (counter >= winningNumber) {
        alert("You lose!!");
      }
  
    });







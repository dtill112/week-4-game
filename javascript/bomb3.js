var winningNumber = 50;

$("#number-to-guess").text(winningNumber);

var imgTags = $("#div1")

var counter = 0;

var numOptions = [3, 6, 9, 12];

numPicks = numOptions[Math.round(Math.random())];

console.log(numPicks)

for(var i = 0; i < numOptions.length; i++){

    var imgPlace = $("<img>");
    
    imgPlace.addClass("leader-image");

    attr("src", src="images/trump.jpeg")

    $(".worldLeaders").attr("data-points", numOptions[i]);

}



$("#div1").on("click", ".worldLeaders", function(){

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







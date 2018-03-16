var winningNumber = 50;

$("#number-to-guess").text(winningNumber);

var div2 = $("#div1");

var counter = 0;

var numOptions = [3, 6, 9, 12];

numPicks = numOptions[Math.round(Math.random())];

for(var i = 0; i < numOptions.length; i++){

    var newElements = $("<img>");

    newElements.addClass("imagePics");

    newElements.attr("src", "/Users/dontillery/Bootcamp/Code/Homework/Week 4 Game/images/a" + i + ".jpeg"); 

    newElements.attr("data-points", numPicks[i]);

    div2.append(newElements);

console.log(numPicks);
}



    div2.on("click", ".imagePics", function(){

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

   






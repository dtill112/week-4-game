var winningNumber = 50;

$("#number-to-guess").text(winningNumber);

var demo = $("#div1");

var counter = 0;

var numOptions = [3, 6, 9, 18];
function leaderValues(){
for(var i = 0; i < numOptions.length; i++){
numPicks = numOptions[Math.round(Math.random())];
numOptions.push(numPicks);
        }
    }

leaderValues();
$(document).ready(function(){
    $("img").each(function (index){
        $(this).attr("data-points", leaderValues[i]);
    })

    $('img').on('click', function(){
        console.log($(this).attr('data-points'));
    });
})

    "data-points" = parseInt("data-points");

    counter += "data-points";

    alert("New score: " + counter);

    if (counter === winningNumber) {
        alert("You win!");
      }
  
      else if (counter >= winningNumber) {
        alert("You lose!!");
      };







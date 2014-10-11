$(document).ready(function() {
  var x = prompt("Please enter a number");
  var myFunction = function(integer) {
    for(myNum=1; myNum<=integer; myNum++) {
      if (myNum % 15 === 0) {
        $("body").append("<p>fizzbuzz</p>")
      } else if (myNum % 5 === 0) {
      $("body").append("<p>Buzz</p>")
      } else if (myNum % 3 === 0) {
        $("body").append("<p>Fizz</p>")
      } else {
        $("body").append(myNum + "<p></p>")
      }
    }
  }
  while (isNaN(x) === true) {
    var x = prompt("That's not a number. Please enter a number");
  }

  while (x % 1 != 0) {
    var x = prompt("Please enter a whole number, not a decimal.");
  }

  return myFunction(+x);
})



//STOP HERE//
$(document).ready(function() {
  for (myNum = 1; myNum < 101; myNum++) {
    if (myNum % 15 === 0) {
      $("body").append("<p>fizzbuzz</p>")
    } else if (myNum % 5 === 0) {
    $("body").append("<p>Buzz</p>")
    } else if (myNum % 3 === 0) {
      $("body").append("<p>Fizz</p>")
    } else {
      $("body").append(myNum + "<p></p>")
    }
  };
})
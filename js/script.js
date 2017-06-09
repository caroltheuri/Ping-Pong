//business logic
var game = function(userInputs) {
  var result = [];
  for (var number = 1; number <= userInputs; number++) {
    if (number % 15 === 0) {
      result.push("pingpong")
    } else if (number % 5 === 0) {
      result.push("pong");
    } else if (number % 3 === 0) {
      result.push("ping");
    } else {
      result.push(number);
    }
  }
  return result;
}

//user logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInputs = parseInt($("input#divisible").val());
    var results = game(userInputs);
    $("#final").text("");
    $("#final").append("<ul>");
    results.forEach(function(result) {
      $("#final").append("<li>" + result + "</li>");
    })
    $("#final").append("<ul>");
  });

});

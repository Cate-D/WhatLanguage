// Business logic:

function submit(answer1, answer2, answer3, answer4, answer5) {
  return answer1 + answer2 + answer3 + answer4 + answer5;
};

// User interface logic:

$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
  
    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
    const answer5 = $("input:radio[name=question5]:checked").val();
   
   
    let result;
    if (submit === "submit") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#result").text(result);
  });
});
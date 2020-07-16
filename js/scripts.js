// Business logic:

function submit(answer1, answer2, answer3, answer4, answer5) {
  return answer1 + answer2 + answer3 + answer4 + answer5;
}; 

function determineLang(result) {
  let language;
  if (result===5 || result===6) {
    language = "Based on your score, you should learn C#!"
  } else if (result===7 || result===8) {
    language = "Based on your score, you should learn JavaScript!"
  } else if (result===9 || result===10) {
    language = "Based on your score, you should learn Python!"
  } else { 
    language = "Please complete all questions for your most accurate result!"
  }
  return language;
}

// User interface logic:

$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
  
    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
    const answer5 = $("input:radio[name=question5]:checked").val();
   
    const result = submit(parseInt(answer1), parseInt(answer2), parseInt(answer3), parseInt(answer4), parseInt(answer5));
    const selectedLang = determineLang(result);

    $("#result").text(selectedLang);
    $("#result").css( "display", "show" )
    $("#quiz").css("display", "none")
  });
});
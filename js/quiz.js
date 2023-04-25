function submitQuiz() {
  // get all the radio button groups
  var q1 = document.getElementsByName('q1');
  var q2 = document.getElementsByName('q2');
  var q3 = document.getElementsByName('q3');
  var q4 = document.getElementsByName('q3');
  var q5 = document.getElementsByName('q3');
  var q6 = document.getElementsByName('q3');
  var q7 = document.getElementsByName('q3');
  var q8 = document.getElementsByName('q3');
  var q9 = document.getElementsByName('q3');
  var q10 = document.getElementsByName('q3');
  
  // check if all questions have been answered
  if (q1[0].checked || q1[1].checked || q1[2].checked &&
      q2[0].checked || q2[1].checked || q2[2].checked &&
      q3[0].checked || q3[1].checked || q3[2].checked &&
      q4[0].checked || q4[1].checked || q4[2].checked &&
      q5[0].checked || q5[1].checked || q5[2].checked &&
      q6[0].checked || q6[1].checked || q6[2].checked &&
      q7[0].checked || q7[1].checked || q7[2].checked &&
      q8[0].checked || q8[1].checked || q8[2].checked &&
      q9[0].checked || q9[1].checked || q9[2].checked &&
      q10[0].checked || q10[1].checked || q10[2].checked) {
    
    // initialize score to 0
    var score = 0;
    
    // check answers and update score
    if (q1[1].checked) {
      score++;
    }
    if (q2[1].checked) {
      score++;
    }
    if (q3[0].checked) {
      score++;
    }
    if (q4[0].checked) {
      score++;
    }
    if (q5[1].checked) {
      score++;
    }
    if (q6[1].checked) {
      score++;
    }
    if (q7[0].checked) {
      score++;
    }
    if (q8[1].checked) {
      score++;
    }
    if (q9[0].checked) {
      score++;
    }
    if (q10[0].checked) {
      score++;
    }
    
    // display score
    alert('You scored ' + score + ' out of 10.');
  } else {
    // if not all questions have been answered, display error message
    alert('Please answer all questions before submitting.');
  }
}

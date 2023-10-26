function checkAnswer() {
const answer = document.getElementById("answer-input").value;
if (answer.toLowerCase() == "paris") {
  document.getElementById("result").innerHTML = "Correct!";
} else {
  document.getElementById("result").innerHTML = "Incorrect.";
  }
}

function checkAnswer2() {
  const answer = document.getElementById("answer-input-2").value;
  if(answer.toLowerCase() == "yes"){
    document.getElementById("result-2").innerHTML ="🥹 Aww you too!"
  } else {
    document.getElementById("result-2").innerHTML = "😣 Why you so mean! It's true tho 😪";
   }
  }
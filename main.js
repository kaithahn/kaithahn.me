
// adapted from https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById('score_modal');

// Get the button that opens the modal
var btn = document.getElementById("submit");

var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// possible results to score
let people = [
  {character: "pam", score: 0},
  {character: "meredith", score: 0},
  {character: "dwight", score: 0},
  {character: "stanley", score: 0},
  {character: "kevin", score: 0},
  {character: "andy", score: 0},
];

function updateScore(name) {
  for (var i=0; i<people.length; i++){
    if (people[i].character == name){
      people[i].score += 1;
      break;
    }
  }
}

function winner() {
    let winner = people[0].score;
    let maxIndex = 0;
    for (var i=0; i<people.length; i++){
      if (people[i].score > winner){
        maxIndex = i;
        winner = people[i].score;
      }
    }
    return people[maxIndex].character;
}

$('#submit').on('click', function(e) { // from lab2 instructions
  // gather all checked radio-button values
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();
  // if all there are enough answers, there are 5 questions
  if (choices.length > 4) {
    for (var i=0; i<choices.length; i++){
      console.log(choices[i]);
      updateScore(choices[i]);
    }

    $('#result').show();

    if (winner() == "pam"){
      $('#pam').show();
    }
    else if (winner() == "meredith"){
      $('#meredith').show();
    }
    else if (winner() == "dwight"){
      $('#dwight').show();
    }
    else if (winner() == "stanley"){
      $('#stanley').show();
    }
    else if (winner() == "kevin"){
      $('#kevin').show();
    }
    else if (winner() == "andy"){
      $('#andy').show();
    }
  }

  else {
    $('#invalid').show();
  }
});

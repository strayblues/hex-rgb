"use strict";

const REGEX = /^[a-z]+$/i;
var characterArray;
var digitArray;

function hexToRgb() {
  var hex = document.getElementById('hex-input').value;
  if (hex != null) { // TODO Other input validation conditions may be wanted
    // Array contains 6 single character strings of digits and letters
    characterArray = hex.split('');
    handleLetters();
    // Output the result
    document.getElementById('rgb-output').innerHTML = toRGB();
  }
  else {
    alert('Please enter something.');
  }
}

function handleLetters(){
  for (var i=0; i<characterArray.length; i++) {
    // If the array contains a letter
    if(characterArray[i].match(REGEX)) {
      // Convert letter to number
      characterArray[i] = letterToNumber(characterArray[i]);
    }
  }
}

function letterToNumber(l){
  if (l === 'A'){ // TODO Handle lowercase as well
    l = 10;
  }
  else if (l === 'B'){
    l = 11;
  }
  else if (l === 'C'){
    l = 12
  }
  else if (l === 'D'){
    l = 13
  }
  else if (l === 'E'){
    l = 14
  }
  else if (l === 'F'){
    l = 15
  }
  return l;
}

function toRGB(){
  var rgbArray = [];
  var digitArray = characterArray;
  for(var i=0; i<digitArray.length; i++){
    if (i % 2 === 0) {
      var leftDig = parseInt(digitArray[i]);
      leftDig = leftDig*16;
      var rightDig = parseInt(digitArray[i+1]);
      leftDig = leftDig + rightDig;
      rgbArray.push(leftDig);
    }
  }
  return 'rgb(' + rgbArray[0] + ', ' + rgbArray[1] + ', ' + rgbArray[2] + ')';
}

/*
function handleHash(){
  if (hex[0] == '#'){
    hex.shift();
  }
}
*/

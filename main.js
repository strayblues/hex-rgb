"use strict";

const LETTER = /^[a-z]+$/i;
//const VALID_INPUT = /^[0-9A-Fa-f]{0,6}$/;

function hexToRgb() {
  var hex = document.getElementById('hex-input').value;
  if (hex.length > 0) { // TODO Other input validation conditions may be wanted
    // Array contains 6 single character strings of digits and letters
    var characterArray = hex.split('');
    if (characterArray[0] == '#'){
      characterArray.shift();
    }
    toInt(characterArray);
    // Output the result when input is 6 characters long
    if (characterArray.length > 5){
      var color = toRGB(characterArray);
      document.getElementById('rgb-output').innerHTML = color;
      // Change body color
      document.body.style.background = color;
    }
  }
  else {
    alert('Please enter something.');
  }
}

function toInt(characterArray){
  for (var i=0; i<characterArray.length; i++) {
    // If the array contains a letter
    if(characterArray[i].match(LETTER)) {
      // Convert letter to number
      characterArray[i] = letterToNumber(characterArray[i]);
    }
    else {
      characterArray[i] = parseInt(characterArray[i]);
    }
  }
}

function letterToNumber(l){
  l = l.toUpperCase();
  if (l === 'A') {
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

function toRGB(digitArray){
  var rgbArray = [];
  for(var i=0; i<digitArray.length; i = i+2){
      var leftDig = digitArray[i];
      var rightDig = digitArray[i+1];
      rgbArray.push(leftDig*16 + rightDig);
  }
  return 'rgb(' + rgbArray[0] + ', ' + rgbArray[1] + ', ' + rgbArray[2] + ')';
}

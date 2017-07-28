"use strict";

var hex;
var rgb;
var rgbValues;
var r;
var g;
var b;
var regex = /^[a-z]+$/i;

function hexToRgb(){
  hex = document.getElementById('hex-input').value;
  if (hex != null) { // TODO Other input validation conditions may be wanted
//    cutHash();
    hexToPairs();
    pairsToDec();
    decToRGB();
    reassembleAndOutput();
  }
  else {
    alert('Please enter something.');
  }
}

function hexToPairs(){
  // Separate original input value into 3 pairs
  r = hex.slice(1,3);
  g = hex.slice(3,5);
  b = hex.slice(5);
  // And store those pairs in an array so we can later loop over them
  rgbValues = [r, g, b];
  return rgbValues;
}

// Convert each hexadecimal value to decimal
function pairsToDec(rgbValues){
  // Use handleLetters over r, g and b
  for(var i=0; i<rgbValues.length; i++){
    // If r, g or b contain a letter...
    handleLetters(rgbValues);
    // convert that letter into a number in the 10-base system by...
    for(var j=0; j<rgbValues.length; j++){
      // multiplying the left digit by 16
      rgbValues[j][0] = parseInt(rgbValues[j][0]) * 16;
    }
  }
  return rgbValues;
}

function decToRGB(rgbValues){
  // Turn decimal representation into RGB representation
  for(var i=0; i<rgbValues.length; i++){
    var num1 = parseInt(rgbValues[i][0]);
    var num2 = parseInt(rgbValues[i][1]);
    rgbValues[i] = (num1 + num2).toString();
  }
  return rgbValues;
}

function handleLetters(rgbValues){
  for (var i=0; i<rgbValues.length; i++) {
    for (var j=0; j<2; j++) {
      // If the array contains a letter
      if(rgbValues[i][j].match(regex)) {
        // Store that letter in a variable
        var letter = rgbValues[i][j];
        // Convert letter into number
        letterToNumber(letter); // This function is mine
        return true;
      } else {
        return false;
      }
    }
  }
  return rgbValues;
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

function reassembleAndOutput(){
// Compose the RGB representation
rgb = '(' + r + ', ' + g + ', ' + b + ')';
// Output the result
document.getElementById('rgb-output').innerHTML = rgb;
}

function cutHash(hex){
  if (hex[0] == '#'){
    hex.split('').shift(); // TODO Make it work.
  }
}

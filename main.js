"use strict";

var hex,
    rgb,
    r,
    g,
    b,
    rgbValues = [];

function hexToRgb(){
  hex = document.getElementById('hex-input').value;
  if (hex != null) { // TODO Other input validation conditions may be wanted
//    cutHash();
    hexToPairs();
    pairsToDec();
//    decToRGB();
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
  b = hex.slice(5,);
  // And store those pairs in an array so we can later loop over them
  rgbValues = [r, g, b];
}

// Convert each hexadecimal value to decimal
function pairsToDec(){
  // Use isLetters over r, g and b
  for(var i=0; i<rgbValues.length; i++){
    // If r, g or b contain a letter...
    isLetters(rgbValues[i]);
    // convert that letter into a number in the 10-base system by...
    for(var i=0; i<rgbValues.length; i++){
      // multiplying the left digit by 16
      rgbValues[i][0] = rgbValues[i][0]*16;
    }
  }
}

function decToRGB(){
  // Turn decimal representation into RGB representation
  for(var i=0; i<rgbValues.length; i++){
    var num1 = rgbValues[i][0];
    var num2 = rgbValues[i][1];
    rgbValues[i] = num1 + num2;
  }
}

// Helper function from Stack Overflow to check if a character is a letter
// This leverages ECMAScript case transformation to find letters
//(instead of using a regex).
function isLetters(array){
  for (var i=0; i<array.length; i++) {
    // If the array contains a letter
    if(array[i].toLowerCase() != array[i].toUpperCase()){
      // Store that letter in a variable
      var letter = array[i];
      // Convert letter into number
      letterToNumber(letter); // This function is mine
    } else {
      return false;
    }
  } return true;
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
}

function reassembleAndOutput(){
// Compose the RGB representation
rgb = r + ', ' + g + ', ' + b;
// Output the result
document.getElementById('rgb-output').innerHTML = rgb;
}

function cutHash(hex){
  if (hex[0] == '#'){
    hex.split('').shift(); // TODO Make it work.
  }
}

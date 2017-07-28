"use strict";

var hex;
var rgb;
var pairs;
var valuesArray = [];
var newArray = [];
var rgbArray;
var r;
var g;
var b;
var regex = /^[a-z]+$/i;

function hexToRgb() {
  hex = document.getElementById('hex-input').value;
  if (hex != null) { // TODO Other input validation conditions may be wanted
    toPairs();
    handleLetters();
    toArray();
    toDec();
    toRGB();
    // Output the result
    document.getElementById('rgb-output').innerHTML = rgb;
  }
  else {
    alert('Please enter something.');
  }
}

function toPairs(){
  // Separate original input value into 3 pairs
  r = hex.slice(0,2); // (Assuming Hash is used)
  g = hex.slice(2,4);
  b = hex.slice(4);
  // And store those pairs in an array so we can later loop over them
  pairs = [r, g, b];
  alert('toPairs outout: ' + pairs);
  return pairs;
}

function handleLetters(){
  for (var i=0; i<pairs.length; i++) {
    for (var j=0; j<2; j++) {
      // If the array contains a letter
      if(pairs[i][j].match(regex)) {
        // Store that letter in a variable
        var letter = pairs[i][j];
        // Convert letter into number
        letterToNumber(); // This function is mine
      }
    }
  }
  alert('handleLetters outout: ' + pairs);
  return pairs;
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

function toArray(){
  for(var i=0; i<pairs.length; i++){
    valuesArray.push(parseInt(pairs[i]));
  }
  alert('pairs array: ' + pairs);
  return pairs;
}

function toDec(){
  for(var i=0; i<valuesArray.length; i++){
    if (i % 2 === 0) {
      newArray.push(valuesArray[i]);
    }
  }
  for(var i=0; i<newArray.length; i++){
    newArray[i] = newArray[i] * 16;
  }
  alert('toDec output: ' + newArray);
  return newArray;
}

function toRGB(){
  for(var i=0; i<valuesArray.length; i++){
    if (i % 2 === 0) {
      newArray[i] = newArray[i]+valuesArray[i+1];
      rgbArray = newArray.push(parseInt(newArray[i]));
    }
  }
  // Compose the RGB representation
  rgb = '(' + rgbArray[0] + ', ' + rgbArray[1] + ', ' + rgbArray[2] + ')';
  alert('toRGB output: ' + rgb);
  return rgb;
}

function handleHash(){
  if (hex[0] == '#'){
    hex.shift();
  }
}

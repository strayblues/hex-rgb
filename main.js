"use strict";

var hex;
var rgb;
var hexArray;
var valuesArray = [];
var decArray = [];
var rgbArray;
var r;
var g;
var b;
var regex = /^[a-z]+$/i;

function hexToRgb() {
  hex = document.getElementById('hex-input').value;
  if (hex != null) { // TODO Other input validation conditions may be wanted
    toArray();
    handleLetters();
    toDec();
    toRGB();
    // Output the result
    document.getElementById('rgb-output').innerHTML = rgb;
  }
  else {
    alert('Please enter something.');
  }
}

function toArray(){
  hexArray = hex.split('');
//  alert('hex array: ' + hexArray);
  return hexArray;
}

function handleLetters(){
  for (var i=0; i<hexArray.length; i++) {
    // If the array contains a letter
    if(hexArray[i].match(regex)) {
      // Convert letter into number
      hexArray[i] = letterToNumber(hexArray[i]);
//      alert('Letter found!!!');
    }
  }
//  alert('handleLetters outout (supposed to contain no letters): ' + hexArray);
  return hexArray;
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

function toDec(){
  for(var i=0; i<hexArray.length; i++){
    if (i % 2 === 0) {
      decArray.push(hexArray[i]);
    }
  }
  for(var i=0; i<decArray.length; i++){
    decArray[i] = decArray[i] * 16;
  }
  alert('toDec output: ' + decArray);
  return decArray;
}

function toRGB(){
  for(var i=0; i<decArray.length; i++){
    if (i % 2 === 0) {
      decArray[i] = decArray[i]+hexArray[i+1];
      rgbArray = decArray.push(decArray[i]);
    }
  }

  rgb = '(' + rgbArray[0] + ', ' + rgbArray[1] + ', ' + rgbArray[2] + ')';
  alert('toRGB output: ' + rgb);
  return rgb;
}

function handleHash(){
  if (hex[0] == '#'){
    hex.shift();
  }
}

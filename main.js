"use strict";

var hex;
var rgb;
var hexArray;
var rgbArray = [];
var r;
var g;
var b;
var regex = /^[a-z]+$/i;

function hexToRgb() {
  hex = document.getElementById('hex-input').value;
  if (hex != null) { // TODO Other input validation conditions may be wanted
    hexArray = hex.split('');
    handleLetters();
    // Output the result
    document.getElementById('rgb-output').innerHTML = toRGB();
  }
  else {
    alert('Please enter something.');
  }
}

function handleLetters(){
  for (var i=0; i<hexArray.length; i++) {
    // If the array contains a letter
    if(hexArray[i].match(regex)) {
      // Convert letter to number
      hexArray[i] = letterToNumber(hexArray[i]);
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
  for(var i=0; i<hexArray.length; i++){
    if (i % 2 === 0) {
      var leftNum = parseInt(hexArray[i]);
      leftNum = leftNum*16;
      var rightNum = parseInt(hexArray[i+1]);
      leftNum = leftNum + rightNum;
      rgbArray.push(leftNum);
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

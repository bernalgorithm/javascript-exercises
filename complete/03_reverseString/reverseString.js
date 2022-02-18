const reverseString = function(str) {
  let strArray = str.split("");
  let charHold = strArray[0];
  for (let i = 0; i<(strArray.length/2); i++) {
    strArray[i] = strArray[strArray.length-(i+1)];
    strArray[strArray.length-(i+1)] = charHold;
    if ((i+1) < strArray.length) {
      charHold = strArray[i+1];
    }
  }
  return strArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

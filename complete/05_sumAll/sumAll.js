const sumAll = function(num1, num2) {
  //return ERROR if inputs are not both a number
  if (typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (num1 === num2) {
    return num1;
  }

  //set up
  let bigNum,
      lilNum;
  if (num1 > num2) {
    bigNum = num1;
    lilNum = num2;
  } else {
    bigNum = num2;
    lilNum = num1;
  }

  //process
  let sum = 0;
  do {
    
    sum += lilNum;
    lilNum++;
    //console.log(`sum is ${sum}`);
  } while (bigNum >= lilNum)

  return sum;

};

//sumAll(4,1);

// Do not edit below this line
module.exports = sumAll;

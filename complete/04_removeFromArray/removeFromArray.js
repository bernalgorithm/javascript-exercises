const removeFromArray = function(array, ...args) {
  let returnArray = [];
  //for every item in array
  for (const arg1 of array) {
    //see if matches any of the args
    let argCount = 0;
    for (const arg2 of args) {
      //if it does, we're not adding it to returnArray
      //and we're moving on to the next item in array
      if (arg1 === arg2) {
        break;
      //else if we've made it through all of the args
      //without a positive add it to the returnArray
      } else if (args.length-1 == argCount) {
        returnArray.push(arg1);
        break;
      }
      argCount++;
    }
  }
  return returnArray;
};



// Do not edit below this line
module.exports = removeFromArray;

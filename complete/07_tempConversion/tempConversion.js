const ftoc = function(tempF) {
  return round((((tempF - 32)/1.8)*10)/10, 1);
};

const ctof = function(tempC) {
  return round((((tempC*1.8 + 32)*10)/10),1)
};

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier)/multiplier;
}


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

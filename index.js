function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplier){
  return function (number) {
    return number * multiplier;
  }
}

function doubler(number){
  return createMultiplier(2)(number);
}

function tripler(number){
  return createMultiplier(3)(number);
}


function multiplier(multiplierValue, value){
  return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)

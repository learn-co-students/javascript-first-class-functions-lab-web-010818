function countdown(callback){
  setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue){
  return function(value) {return value * multiplierValue};
}

function multiplier(arg1, arg2){
  return arg1 * arg2
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)

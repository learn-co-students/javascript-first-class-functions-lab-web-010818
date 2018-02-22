function countdown(callback){
  window.setTimeout(callback, 2);
}

// function multiplierValue(number) {
//   return number;
// }

function createMultiplier(multiplierValue) {
  return function (value){
    return multiplierValue * value;
  };
}

function multiplier(a, b) {
  return a * b;
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

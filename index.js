function countdown(cb) {
  window.setTimeout(cb, 2000);
}

function createMultiplier(multiplier) {
    return function(score) {
      return multiplier * score;
    }
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3);


function multiplier(value, multiplierValue) {
  return value * multiplierValue;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

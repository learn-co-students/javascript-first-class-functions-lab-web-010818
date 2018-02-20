function countdown(cb) {
  setTimeout(function () {
    cb();
  }, 2000);
}

function createMultiplier(num) {
  return (value) => value * num;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(valOne, valTwo) {
  return valOne * valTwo;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

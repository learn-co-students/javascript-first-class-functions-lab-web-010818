function countdown(cb){
  window.setTimeout(cb, 2000);
}

function createMultiplier(num1){
  return function(num2){
    return num1 * num2
  }
}

function multiplier(num1, num2){
  return  num1 * num2
  }

  var doubler = createMultiplier(2)
  var tripler = createMultiplier(3)
  var doublerWithBind = multiplier.bind(null, 2)
  var triplerWithBind = multiplier.bind(null, 3)

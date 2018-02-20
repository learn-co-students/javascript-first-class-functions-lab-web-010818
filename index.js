function countdown(callback) {
  window.setTimeout(callback)
}

function createMultiplier(multiplyValue) {
  return function(value) {
    return value * multiplyValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(a, b) {
  return a * b
}

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)

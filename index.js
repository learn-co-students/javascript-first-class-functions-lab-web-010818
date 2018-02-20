function countdown(callBack){
 return  setTimeout(callBack, 2);
}

function createMultiplier(num){
  return function(num2){
    return num * num2

  }

}


var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(num, num2){
  return num * num2

}

// Create a doublerWithBind variable that partially applies the multiplier() function by passing in 2 as its first argument.
// Create a triplerWithBind variable that partially applies the multiplier() function by passing in 3 as its first argument.



var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)


function countdown(callback){

  return window.setTimeout(callback(), 2000);

}


function createMultiplier(number){
  function multiplierValue(value){ return value * number};
}le

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
le

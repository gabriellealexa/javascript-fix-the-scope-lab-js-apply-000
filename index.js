var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {

  return animal
}

function add2(n) {
  const two = 2
  return n + two

}


var funkyFunction = function funktown() {
  var thefunkiest = 'FUNKY!'
  return function() {
    return thefunkiest
  }
}
var funktown()
var theFunk = funkyFunction()
theFunk()

//Declaration
function fullName(first : string, last : string) : string {
  return first + " " + last;
}

//Expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}

console.log(fullName('Kaden', 'Jenson'));
console.log(otherFullName('Kaden', 'Jenson'));
console.log(thirdFullName('Kaden', 'Jenson'));
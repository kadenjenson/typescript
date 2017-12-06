//Declaration
function fullName(first, last) {
    return first + " " + last;
}
//Expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Kaden', 'Jenson'));
console.log(otherFullName('Kaden', 'Jenson'));
console.log(thirdFullName('Kaden', 'Jenson'));
//# sourceMappingURL=013_function_declaration_vs_expressions.js.map
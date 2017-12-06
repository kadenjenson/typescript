//Boolean
var paidAccount = false;
//Number
var age = 33;
var taxRate = 7.5;
//String
var fullName = "Kaden Jenson";
//Array
var ages = [33, 29, 34];
//Tuple
var player;
player = [3, 'Corerra', 4.5, 23];
//Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
//Any
var apiData = [123, 'Kaden', false];
//Void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=003_types.js.map
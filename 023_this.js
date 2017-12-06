var Invoice = /** @class */ (function () {
    function Invoice(total) {
        this.total = total;
    }
    Invoice.prototype.printTotal = function () {
        console.log(this.total);
    };
    //   printLater(time : number) {
    //     setTimeout(function() {
    //       console.log(this.total);
    //     }, time);
    //   }
    // }
    Invoice.prototype.printLater = function (time) {
        var _this = this;
        setTimeout(function () {
            console.log(_this.total);
        }, time);
    };
    return Invoice;
}());
var invoice = new Invoice(979);
invoice.printTotal();
invoice.printLater(1000);
//# sourceMappingURL=023_this.js.map
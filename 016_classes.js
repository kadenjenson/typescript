var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'Mountain View', 'California');
var bearInvoice = new Invoice('Bear Canyon', 'Eagle Mountain', 'Utah');
console.log(googleInvoice.companyProfile);
console.log(bearInvoice.companyProfile);
//# sourceMappingURL=016_classes.js.map
class Invoice {
  companyProfile : string;

  constructor(public name, public city, public state) {
    this.companyProfile = name + ", " + city + ", " + state;
  }
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'California');
var bearInvoice = new Invoice('Bear Canyon', 'Eagle Mountain', 'Utah');

console.log(googleInvoice.companyProfile);
console.log(bearInvoice.companyProfile);
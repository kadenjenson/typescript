interface InvoiceFunc {
  (name : string, total : number) : void;
}

let myInvoice : InvoiceFunc;
myInvoice = function(n, t) {
  console.log(n);
  console.log(t);
}

myInvoice('Bungie', 987);
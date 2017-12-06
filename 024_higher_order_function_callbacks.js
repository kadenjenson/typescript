var dbQuery = function () {
    setTimeout(function () {
        console.log('Query Results');
    }, 3000);
};
function loadPage(q) {
    console.log("Header");
    q();
    console.log("Sidebar");
    console.log("Footer");
}
loadPage(dbQuery);
// A higher order function that (must) receive(s) another function 
//# sourceMappingURL=024_higher_order_function_callbacks.js.map
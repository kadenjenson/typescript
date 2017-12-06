function profile(user) {
    return "Welcome, " + user.firstName + " " + user.lastName;
}
var realUser = {
    email: 'test@test.com',
    firstName: 'Kaden',
    lastName: 'Jenson'
};
console.log(profile(realUser));
console.log(realUser.email);
//# sourceMappingURL=019_interfaces.js.map
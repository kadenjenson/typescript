interface User {
  email : string;
  firstName? : string;
  lastName? : string;   //Add question marks if you want to make it optional
}

function profile(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser = {
  email: 'test@test.com',
  firstName: 'Kaden',
  lastName: 'Jenson'
};

console.log(profile(realUser));
console.log(realUser.email);
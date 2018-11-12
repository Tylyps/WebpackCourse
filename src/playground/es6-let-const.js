var nameVar = 'Jakub';
var nameVar = 'Kuba';
console.log('nameVar', nameVar);

let nameLet = 'Jakub';
nameLet = 'Kuba'
console.log('nameLet', nameLet);

const nameConst = 'Jakub';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jakub Chmielewski';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName)
}

console.log(firstName)

const square = function (x) {
  return x*x;
};

// const squareArrow = (x) => {
//   return x * x
// };

const squareArrow = (x) => x * x;

const x = 4;
console.log(square(x), squareArrow(x));


const fullName = 'Jakub Chmielewski';

const getFirstNameRegular = (fullName) => {
  return fullName.split(' ')[0];
};

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName(fullName), getFirstNameRegular(fullName));


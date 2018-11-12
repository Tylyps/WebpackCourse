// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments)
  return a+b;
};

console.log(add(55, 5, 1001));

// this keyword - no longer bound

const user = {
  name: 'Jakub',
  cities: ['Białystok', 'Ełk', 'Poznań'],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);
    return this.cities.map((city) => this.name + ' has lived in ' + city);

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city)
    // });
  }
};

console.log(user.printPlacesLived())

//challenge area

const multiplier = {
  numbers: [1,2,3,4,5,6],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy)
  }
};

console.log(multiplier.multiply());

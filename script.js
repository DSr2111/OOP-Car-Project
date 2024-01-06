//create a class for vehicle, with props of make, model, year
//methods honk and toString needed

class vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }

  toString() {
    return `This vehicle is a ${year} ${make} ${model}`;
  }
}

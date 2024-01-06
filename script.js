//create a class for vehicle, with props of make, model, year
//methods honk and toString needed

class Vehicle {
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

//Create a class for a car. The Car class should inherit from Vehicle and each
//car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

//Create a class for a Motorcycle. This class should inherit from Vehicle
//and each motorcycle instance should have a property called numWheels
//which has a value of 2. It should also have a revEngine method which
//returns “VROOM!!!”

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOOM!";
  }
}

//create class for Garage, should have prop vehicles, which stores array
//of vehicles, and capacity,

class Garage {
  vehicles = [];
  capacity = 4;
  add(newVehicle) {
    if (!newVehicle instanceof Vehicle) {
      return "Only Vehicles allowed in the Garage";
    }

    if (this.vehicles.length > this.capacity) {
      return "Garage is full";
    } else {
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }
}

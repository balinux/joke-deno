export class Car {
    nameCar: String;
    constructor(name: String) {
        this.nameCar = name
    }

    getCar() {
        return "name new Car:" + this.nameCar;
    }
}

class ChildCar extends Car {
    CarColor: String;
    Car: String;
    constructor(car: String, Color: String) {
        super(car)
        this.Car = car
        this.CarColor = Color;
    }

    getDetailCar() {
        return "this new Car is: " + this.Car + " color: " + this.CarColor;
    }
}

let car1 = new ChildCar("lambo", "purple")

console.log(car1.getDetailCar());


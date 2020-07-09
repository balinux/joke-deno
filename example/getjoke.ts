import { Joke, Car } from '../mod.ts'
const request = new Joke()
const newCar = new Car("Lambo")
const dataReq = await request.getJoke();
console.log(dataReq);
console.log(newCar);

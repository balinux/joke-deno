import { Joke } from '../mod.ts'
const request = new Joke()
const dataReq = await request.getJoke();
console.log(dataReq);
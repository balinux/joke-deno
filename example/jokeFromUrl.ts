import { Joke } from 'https://raw.githubusercontent.com/balinux/joke-deno/master/mod.ts'

const newJoke = new Joke()
const dataJoke = await newJoke.getJoke()
console.log(dataJoke);

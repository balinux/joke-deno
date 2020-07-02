import { JokeType } from './types.ts'

export class Joke {
    link: String;
    constructor(url: String = "https://api.chucknorris.io/jokes/random") {
        this.link = url
    }

    async getJoke() {
        const data = await fetch(`${this.link}`)
        const json: JokeType = await data.json()
        return json
    }
}
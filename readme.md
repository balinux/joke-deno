#   joke-deno

Retrieve a random chuck joke with deno 

```ts
import { Joke } from 'https://raw.githubusercontent.com/balinux/joke-deno/master/mod.ts'
```

## example
```ts
import { Joke } from 'https://raw.githubusercontent.com/balinux/joke-deno/master/mod.ts'

const newJoke = new Joke()
const dataJoke = await newJoke.getJoke()
console.log(dataJoke);
```

## json response
```json
{
  categories: [ "money" ],
  created_at: "2020-01-05 13:42:28.664997",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "BwMFn3FCQQaCSw0uEKkWLw",
  updated_at: "2020-05-22 06:16:41.133769",
  url: "https://api.chucknorris.io/jokes/BwMFn3FCQQaCSw0uEKkWLw",
  value: "Obama is Chuck Norris's personal bitch, and makes him wipe his ass, with Obama's own money."
}
```

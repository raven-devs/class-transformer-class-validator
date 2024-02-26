// npx ts-node src/class-validator/class-validator.ts

import { Post } from './type/post';
import { Validator } from './validator';

const post = new Post();
post.title = 'Hello'; // should not pass
post.text = 'this is a great post about hell world'; // should not pass
post.rating = 11; // should not pass
post.email = 123; // should not pass
post.site = 'googlecom'; // should not pass

async function main() {
  const errors = await Validator.validate(post);
  if (errors.length !== 0) {
    const errorsStr = Validator.toString(errors);
    console.log(errorsStr);
  }
}

main().catch((error) => console.error(error));

export {};

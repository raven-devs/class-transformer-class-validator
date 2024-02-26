// npx ts-node src/class-validator/class-validator.ts

import { Post } from './type/post';
import { Validator } from './validator';

const post = new Post();
post.title = 'Hello';
post.text = 'this is a great post about hell world';
post.rating = 11;
post.email = 'user@company.com';
post.site = 'googlecom';

async function main() {
  const errors = await Validator.validate(post);
  if (errors.length !== 0) {
    const errorsStr = Validator.toString(errors);
    console.log(errorsStr);
  }
}

main().catch((error) => console.error(error));

export {};

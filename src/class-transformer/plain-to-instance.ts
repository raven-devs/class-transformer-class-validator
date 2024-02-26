// npx ts-node src/class-transformer/plain-to-instance.ts

import 'reflect-metadata';
import userPlain from './json/user.json';
import { Transformer } from './transformer';
import { User } from './type/user';

const user = Transformer.toInstance<User>(User, userPlain);
console.log({ user });

export {};

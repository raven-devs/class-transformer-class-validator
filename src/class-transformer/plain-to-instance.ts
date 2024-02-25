// npx ts-node src/class-transformer/plain-to-instance.ts

import { plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import userPlain from './json/user.json';
import { User } from './type/user';

const user = plainToInstance<User, Record<string, any>>(User, userPlain, {
  excludeExtraneousValues: true,
  exposeDefaultValues: true,
});
console.log({ user });

export {};

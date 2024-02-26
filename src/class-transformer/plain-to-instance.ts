// npx ts-node src/class-transformer/plain-to-instance.ts

import 'reflect-metadata';
import { UserDto } from '../module/user/dto/user-dto';
import userPlain from '../module/user/json/user.json';
import { Transformer } from './transformer';

const user = Transformer.toInstance<UserDto>(UserDto, userPlain);
console.log({ user });

export {};

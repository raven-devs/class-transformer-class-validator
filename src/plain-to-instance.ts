// npx ts-node src/plain-to-instance.ts

import { plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { User } from './user';

const userPlain = {
  id: 1,
  firstName: 'Firstname',
  lastName: 'Lastname',
  age: 27,
  password: 'password',
  unkownProp: 'hello there',
  address: {
    postCode: '123',
    city: 'City',
    street: 'Street',
    building: '45',
    unkownProp: 'hello there',
  },
};

const user = plainToInstance(User, userPlain, { excludeExtraneousValues: true });
console.log({ user });

const name = user.getFullName();
console.log({ name });

const address = user.address;
const street = address.getFullAddress();
console.log({ street });

export {};

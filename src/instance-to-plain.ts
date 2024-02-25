// npx ts-node src/instance-to-plain.ts

import { instanceToPlain } from 'class-transformer';
import 'reflect-metadata';
import { Address } from './address';
import { User } from './user';

const address = new Address();
address.postCode = '123';
address.city = 'City';
address.street = 'Street';
address.building = '45';

const user = new User();
user.id = 1;
user.firstName = 'Firstname';
user.lastName = 'Lastname';
user.age = 27;
user.address = address;
user.password = 'password';

const name = user.getFullName();
console.log({ name });

const userPlain = instanceToPlain(user);
console.log({ userPlain });

export {};

// npx ts-node src/class-transformer/instance-to-plain.ts

import { instanceToPlain } from 'class-transformer';
import 'reflect-metadata';
import { Address } from './type/address';
import { User } from './type/user';

const address1 = new Address();
address1.street = 'Street1';
address1.building = '45';
address1.city = 'City1';
address1.postCode = '123';
address1.country = 'country1';

const address2 = new Address();
address2.street = 'Street2';
address2.building = '67';
address2.city = 'City2';
address2.postCode = '456';
address2.country = 'country1';

const user = new User();
user.id = '857fe68e-8366-44e7-aa98-6d10391fac20';
user.name = 'Name1';
user.age = 25;
user.password = 'password';
user.addresses = [address1, address2];
user.onboardingDate = new Date().toISOString();
user.registrationDate = new Date();
user.skills = new Set(['skill1', 'skill2', 'skill3', 'skill1', 'skill2', 'skill4', 'skill5', 'skill6']);
user.experience = new Map();
user.experience.set('skill1', { level: 'level1', years: 1 });
user.experience.set('skill2', { level: 'level2', years: 3 });
user.experience.set('skill3', { level: 'level3', years: 5 });
user.languages = new Set([
  { language: 'language1', proficiency: 'proficiency1' },
  { language: 'language2', proficiency: 'proficiency2' },
  { language: 'language3', proficiency: 'proficiency3' },
]);

const userPlain = instanceToPlain<User>(user);
console.log({ userPlain });

export {};

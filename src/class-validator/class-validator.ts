// npx ts-node src/class-validator/class-validator.ts

import 'reflect-metadata';
import { AddressDto } from '../module/user/dto/address-dto';
import { UserDto } from '../module/user/dto/user-dto';
import { Validator } from './validator';

const address1 = new AddressDto();
address1.street = 'Street1';
address1.building = '45';
address1.city = 'City1';
address1.postCode = '123';
address1.country = 'country1';

const user = new UserDto();
user.id = '857fe68e-8366-44e7-aa98-6d10391fac20';
user.name = 'Name1';
user.age = 18;
user.password = 'password';
user.addresses = [address1];
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
user.notes = 'notes';

async function main() {
  const errors = await Validator.validate(user);
  if (errors.length === 0) {
    return;
  }

  const errorsStr = Validator.toString(errors);
  console.log(errorsStr);
}

main().catch((error) => console.error(error));

export {};

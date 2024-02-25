import { Exclude, Expose, Type } from 'class-transformer';
import { Address } from './address';

export class User {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  age: number;

  @Expose()
  @Type(() => Address)
  address: Address;

  @Expose()
  @Exclude({ toPlainOnly: true })
  password: string;

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

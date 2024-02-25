import { Expose } from 'class-transformer';

export class Address {
  @Expose()
  street: string;

  @Expose()
  building: string;

  @Expose()
  city: string;

  @Expose()
  postCode: string;

  @Expose()
  country: string;
}

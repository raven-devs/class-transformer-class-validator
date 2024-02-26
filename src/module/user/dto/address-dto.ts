import { Expose } from 'class-transformer';
import { Address } from '../address';

export class AddressDto implements Address {
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

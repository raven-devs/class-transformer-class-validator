import { Expose } from 'class-transformer';

export class Address {
  @Expose()
  postCode: string;

  @Expose()
  city: string;

  @Expose()
  street: string;

  @Expose()
  building: string;

  getFullAddress() {
    return `${this.street} ${this.building}, ${this.postCode} ${this.city}`;
  }
}

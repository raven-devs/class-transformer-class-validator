import { Expose } from 'class-transformer';

export class Language {
  @Expose()
  language: string;

  @Expose()
  proficiency: string;
}

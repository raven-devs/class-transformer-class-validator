import { Expose } from 'class-transformer';
import { Language } from '../language';

export class LanguageDto implements Language {
  @Expose()
  language: string;

  @Expose()
  proficiency: string;
}

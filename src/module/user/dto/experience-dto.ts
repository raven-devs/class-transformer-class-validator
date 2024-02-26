import { Expose } from 'class-transformer';
import { Experience } from '../experience';

export class ExperienceDto implements Experience {
  @Expose()
  level: string;

  @Expose()
  years: number;
}

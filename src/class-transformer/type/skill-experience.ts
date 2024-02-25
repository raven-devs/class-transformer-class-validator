import { Expose } from 'class-transformer';

export class SkillExperience {
  @Expose()
  level: string;

  @Expose()
  years: number;
}

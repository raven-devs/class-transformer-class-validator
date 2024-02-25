import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { Address } from './address';
import { Language } from './language';
import { SkillExperience } from './skill-experience';

export class User {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  age: number;

  @Expose()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Expose()
  @Type(() => Address)
  addresses: Address[];

  @Expose()
  department = 'Default Dep';

  @Expose()
  @Type(() => Date)
  registrationDate: Date;

  @Expose()
  @Type(() => Date)
  @Transform(
    ({ value, key, obj }) => {
      return String(value);
    },
    { toClassOnly: true },
  )
  onboardingDate: string;

  @Expose()
  @Type(() => String)
  skills: Set<string>;

  @Expose()
  @Type(() => SkillExperience)
  experience: Map<string, SkillExperience>;

  @Expose()
  @Type(() => Language)
  languages: Set<Language>;
}

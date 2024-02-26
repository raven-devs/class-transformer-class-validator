import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsOptional, MinLength, ValidationArguments } from 'class-validator';
import { User } from '../user';
import { AddressDto } from './address-dto';
import { ExperienceDto } from './experience-dto';
import { LanguageDto } from './language-dto';

export class UserDto implements User {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  age: number;

  @Expose()
  @Exclude({ toPlainOnly: true })
  @MinLength(10, {
    message: '$target.$property is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  password: string;

  @Expose()
  @Type(() => AddressDto)
  addresses: AddressDto[];

  @Expose()
  @IsOptional()
  @MinLength(20, {
    message: ({ targetName, property, object, value, constraints }: ValidationArguments) => {
      return `${targetName}.${property} is too short. Minimal length is ${constraints[0]} characters, but actual is ${value}`;
    },
  })
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
  @Type(() => ExperienceDto)
  experience: Map<string, ExperienceDto>;

  @Expose()
  @Type(() => LanguageDto)
  languages: Set<LanguageDto>;
}

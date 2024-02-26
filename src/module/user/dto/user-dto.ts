import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsOptional, MinLength, ValidateIf, ValidationArguments } from 'class-validator';
import { IsLongerThan } from '../../../class-validator/decorator/is-longer-than';
import { IsUserAlreadyExist } from '../../../class-validator/decorator/is-user-already-exist';
import { User } from '../user';
import { AddressDto } from './address-dto';
import { ExperienceDto } from './experience-dto';
import { LanguageDto } from './language-dto';

export class UserDto implements User {
  @Expose()
  id: string;

  @Expose()
  @IsUserAlreadyExist({
    message: 'User $value already exists. Choose another name.',
  })
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
  @ValidateIf((object) => object.age >= 18)
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

  @IsOptional()
  @IsLongerThan('department', {
    /* you can also use additional validation options, like "groups" in your custom validation decorators. "each" is not supported */
    message: 'notes must be longer than the department',
  })
  notes?: string;
}

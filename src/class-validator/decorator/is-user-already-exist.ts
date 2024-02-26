import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class IsUserAlreadyExistConstraint implements ValidatorConstraintInterface {
  async validate(userName: any, args: ValidationArguments) {
    try {
      const user = await new Promise((resolve, reject) => setTimeout(() => resolve({ id: 1, name: 'user1' }), 3000));
      return user ? false : true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserAlreadyExistConstraint,
    });
  };
}

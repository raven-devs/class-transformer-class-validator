import { ValidationError, validate as classValidate } from 'class-validator';

const validate = async (input: Record<string, any>) => {
  return await classValidate(input, {
    validationError: { target: false },
  });
};

const toString = (errors: ValidationError[]) => {
  return errors.map((error) => {
    const { property, constraints } = error;
    const messages: string[] = constraints ? Object.values(constraints) : [];
    return { [property]: messages };
  });
};

export const Validator = {
  validate,
  toString,
};

import { instanceToPlain, plainToInstance } from 'class-transformer';

interface ClassConstructor<T> {
  // eslint-disable-next-line
  new (...args: any[]): T;
}

const toInstance = <T>(cls: ClassConstructor<T>, plainObj: Record<string, any>) => {
  return plainToInstance<T, Record<string, any>>(cls, plainObj, {
    excludeExtraneousValues: true,
    exposeDefaultValues: true,
  });
};

const toPlain = <T>(instance: T) => {
  return instanceToPlain<T>(instance);
};

export const Transformer = {
  toInstance,
  toPlain,
};

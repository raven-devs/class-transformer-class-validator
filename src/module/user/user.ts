import { Address } from './address';
import { Experience } from './experience';
import { Language } from './language';

export interface User {
  id: string;
  name: string;
  age: number;
  password: string;
  addresses: Address[];
  department?: string;
  registrationDate: Date;
  onboardingDate: string;
  skills: Set<string>;
  experience: Map<string, Experience>;
  languages: Set<Language>;
  notes?: string;
}
